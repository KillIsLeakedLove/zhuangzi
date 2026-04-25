// 侧边栏导航：目录渲染 + 事件监听 + 标签页切换

function renderNavigation() {
    Object.keys(chapters).forEach(section => {
        const list = document.getElementById(`${section}-list`);
        chapters[section].forEach(chapter => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#" data-chapter="${chapter.id}" data-section="${section}">${chapter.title}</a>`;
            list.appendChild(li);
        });
    });
}

function setupEventListeners() {
    document.querySelectorAll('.toc').forEach(toc => {
        toc.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                const chapterId = e.target.dataset.chapter;
                location.hash = `#${chapterId}`;
            }
        });
    });

    document.querySelectorAll('.section-title').forEach(title => {
        title.addEventListener('click', () => {
            title.classList.toggle('collapsed');
            title.nextElementSibling.classList.toggle('collapsed');
        });
    });

    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    initTheme();
    setupTabListeners();
}

function setupTabListeners() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(`tab-${tabId}`).classList.add('active');
}

function goHome() {
    document.getElementById('welcome').style.display = '';
    document.getElementById('chapter-content').style.display = 'none';
    document.querySelectorAll('.chapter-list a').forEach(a => a.classList.remove('active'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.hash) {
        history.pushState(null, '', location.pathname + location.search);
    }
}
