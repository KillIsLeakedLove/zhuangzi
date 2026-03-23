// 《庄子》网站主脚本

// 章节目录数据
const chapters = {
    neipian: [
        { id: 'xiaoyaoyou', title: '逍遥游' },
        { id: 'qiwulun', title: '齐物论' },
        { id: 'yangshengzhu', title: '养生主' },
        { id: 'renjianshi', title: '人间世' },
        { id: 'dechongfu', title: '德充符' },
        { id: 'dashizong', title: '大宗师' },
        { id: 'yingdiwang', title: '应帝王' }
    ],
    waipian: [
        { id: 'tiandao', title: '天道' },
        { id: 'tianyun', title: '天运' },
        { id: 'qishui', title: '秋水' },
        { id: 'zhimubai', title: '至乐' },
        { id: 'dasheng', title: '达生' },
        { id: 'shanshui', title: '山木' },
        { id: 'tianziyan', title: '田子方' },
        { id: 'zhiman', title: '知北游' },
        { id: 'yuyan', title: '寓言' },
        { id: 'rangwang', title: '让王' },
        { id: 'shuibai', title: '说剑' },
        { id: 'daozhi', title: '盗跖' },
        { id: 'zuojian', title: '渔父' },
        { id: 'lieyukou', title: '列御寇' },
        { id: 'tianxia', title: '天下' }
    ],
    zapian: [
        { id: 'hongbeiming', title: '庚桑楚' },
        { id: 'zeyang', title: '则阳' },
        { id: 'wawu', title: '外物' },
        { id: 'jiquan', title: '荆筐' },
        { id: 'liezi', title: '列御寇' },
        { id: 'tianda', title: '天下' }
    ]
};

// 章节数据映射（从全局 window 对象获取）
const chapterData = {
    xiaoyaoyou: window.xiaoyaoyou,
    qiwulun: window.qiwulun,
    yangshengzhu: window.yangshengzhu,
    renjianshi: window.renjianshi,
    dechongfu: window.dechongfu,
    dashizong: window.dashizong,
    yingdiwang: window.yingdiwang,
    tiandao: window.tiandao,
    tianyun: window.tianyun,
    qishui: window.qishui,
    zhimubai: window.zhimubai,
    dasheng: window.dasheng,
    shanshui: window.shanshui,
    tianziyan: window.tianziyan,
    zhiman: window.zhiman,
    yuyan: window.yuyan,
    rangwang: window.rangwang,
    shuibai: window.shuibai,
    daozhi: window.daozhi,
    zuojian: window.zuojian,
    lieyukou: window.lieyukou,
    tianxia: window.tianxia,
    hongbeiming: window.hongbeiming,
    zeyang: window.zeyang,
    wawu: window.wawu,
    jiquan: window.jiquan,
    liezi: window.liezi,
    tianda: window.tianda
};

// 初始化页面
function init() {
    renderNavigation();
    setupEventListeners();
}

// 渲染导航目录
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

// 设置事件监听
function setupEventListeners() {
    // 章节点击
    document.querySelectorAll('.toc').forEach(toc => {
        toc.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                const chapterId = e.target.dataset.chapter;
                const section = e.target.dataset.section;
                loadChapter(chapterId, section, e.target);
            }
        });
    });

    // 目录折叠
    document.querySelectorAll('.section-title').forEach(title => {
        title.addEventListener('click', () => {
            title.classList.toggle('collapsed');
            const list = title.nextElementSibling;
            list.classList.toggle('collapsed');
        });
    });

    // 主题切换
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);
    
    // 初始化主题
    initTheme();

    // 标签页切换
    setupTabListeners();
}

// 设置标签页切换事件
function setupTabListeners() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            switchTab(tabId);
        });
    });
}

// 切换标签页
function switchTab(tabId) {
    // 移除所有激活状态
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // 激活当前标签
    document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(`tab-${tabId}`).classList.add('active');
}

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // 检测系统偏好
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
}

// 切换主题
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// 加载章节内容（从全局变量）
function loadChapter(chapterId, section, linkElement) {
    // 更新活动链接
    document.querySelectorAll('.chapter-list a').forEach(a => a.classList.remove('active'));
    linkElement.classList.add('active');

    // 显示内容区
    const welcome = document.getElementById('welcome');
    const content = document.getElementById('chapter-content');
    welcome.style.display = 'none';
    content.style.display = 'block';

    // 获取章节信息
    const chapter = chapters[section].find(c => c.id === chapterId);
    const sectionNames = { neipian: '内篇', waipian: '外篇', zapian: '杂篇' };

    // 获取内容数据
    const data = chapterData[chapterId];
    if (!data) {
        // 显示默认内容
        const defaultData = {
            title: chapter.title,
            sentences: [
                {original: '此章节内容正在整理中...', translation: 'This chapter content is being organized...'}
            ],
            interpretation: '<p>此章节内容正在整理中，敬请期待。</p>',
            insight: '<p>更多内容即将上线。</p>'
        };
        renderContent(defaultData, chapter, sectionNames[section]);
        return;
    }

    renderContent(data, chapter, sectionNames[section]);
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 渲染内容
function renderContent(data, chapter, sectionName) {
    document.getElementById('chapter-tag').textContent = sectionName;
    document.getElementById('chapter-title').textContent = data.title;
    renderOriginalText(data);
    document.getElementById('interpretation-content').innerHTML = (data.interpretation || '<p>暂无解读</p>') + '<p>&nbsp;</p>';
    document.getElementById('insight-content').innerHTML = (data.insight || '<p>暂无启示</p>') + '<p>&nbsp;</p>';
    document.getElementById('example-content').innerHTML = data.example || '<p>暂无用例</p>';
}

// 渲染原文
function renderOriginalText(data) {
    const container = document.getElementById('original-text');
    container.innerHTML = data.sentences.map((s, index) => `
        <div class="sentence" data-index="${index}" onclick="toggleSentenceTranslation(${index})">
            <p class="original">${s.original}</p>
            <p class="translation" style="display: none;">${s.translation}</p>
        </div>
    `).join('');
}

// 切换单个句子的译文显示
function toggleSentenceTranslation(index) {
    const sentences = document.querySelectorAll('.sentence');
    if (sentences[index]) {
        const translation = sentences[index].querySelector('.translation');
        if (translation) {
            translation.style.display = translation.style.display === 'none' ? 'block' : 'none';
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);