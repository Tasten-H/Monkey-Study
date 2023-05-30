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
