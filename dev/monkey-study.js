// ==UserScript==
// @name         脚本学习
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Tasten_H
// @match        https://www.baidu.com
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cnblogs.com
// @grant        none
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

(function () {
    'use strict';
    console.log("learn_style")
    createHTML()
})();
