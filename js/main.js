// 《庄子》网站主脚本 —— 入口文件

function init() {
    renderNavigation();
    setupEventListeners();
    setupBackToTop();
}

document.addEventListener('DOMContentLoaded', init);
