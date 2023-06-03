// ==UserScript==
// @name         此脚本仅用于学习讨论交流，请在24小时内删除，否则请自行承担后果！！！
// @namespace    http://www.tasten-h.com/
// @version      1.0
// @description  准备封装油猴代码
// @require      http://cdn.staticfile.org/jquery/2.1.1/jquery.min.js
// @author       Tasten_H
// @match        https://www.baidu.com
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cnblogs.com
// @grant        GM_addStyle
// ==/UserScript==

// 快速创建复杂 HTML 结构
function createHTML() {
    // 获取百度首页 logo 
    let logo = document.querySelector("#lg")
    // 创建一个自己的结构
    let example = document.createElement("div")
    // 给 example 这个 div 设置类名
    example.classList.add("wrap")
    example.innerHTML = `<div class="h1">标题</div>
                            <p class="des">这是一段描述</p>`
    logo.appendChild(example)
}

class GM {
    static test = function(){
        console.log('No Problem');
    }

    static request = function (params) {
        return new Promise(resolve => {
            GM_xmlhttpRequest({
                method: params.method,
                url: params.url,
                headers: {
                    "Content-Type": params.contentType
                },
                data: params.data,
                onload: function (res) {
                    try {
                        resolve(JSON.parse(res.responseText));
                    } catch (e) {
                        resolve([]);
                    }
                },
                onerror: function (e) {
                    resolve([]);
                }
            })
        })
    }

    static addStyle = function (params) {
        return new Promise(resolve => {
            GM_addStyle(params.css);
            resolve();
        })
    }

    static addSet = function (name, value) {
        return new Promise(resolve => {
            GM_setValue(name, JSON.stringify(value));
            resolve();
        })
    }

    static getSet = function (name, def) {
        return new Promise((resolve, reject) => {
            try {
                resolve(JSON.parse(GM_getValue(name, '') || '{}'));
            } catch (e) {
                reject(def);
            }
        })
    }

    static getAllSet = function () {
        var promises = GM_listValues().map(key => getSet(key));
        return Promise.all(promises); // 将所有promise事件结果集合
    }

    static deleteAllSet = function(){
        var promises = GM_listValues().map(GM_deleteValue);
        return Promise.all(promises);
    }
}

// 添加 css 样式
function addStyle() {
    let css = `
    .wrap{
        padding: 5px
    }
    
    .h1{
        font-size: 16px;
        color: green;
    }
    
    .des{
        font-size: 10px;
    }
    `
    GM_addStyle(css)
}

(function () {
    'use strict';
    console.log("learn_style")
    createHTML()
    var gm = new GM()
    gm.test()
})();
