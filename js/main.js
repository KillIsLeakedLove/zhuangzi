// 《庄子》网站主脚本 —— 入口文件

function init() {
    renderNavigation();
    setupEventListeners();
    setupBackToTop();
    handleHashOnLoad();
    window.addEventListener('hashchange', handleHashChange);
}

function parseHash() {
    const hash = location.hash.slice(1);
    if (!hash) return null;
    const [chapterId, sentenceIndex] = hash.split('-');
    return { chapterId, sentenceIndex: sentenceIndex !== undefined ? parseInt(sentenceIndex, 10) : null };
}

function findChapterInfo(chapterId) {
    for (const sec of Object.keys(chapters)) {
        const found = chapters[sec].find(c => c.id === chapterId);
        if (found) return { section: sec, chapter: found };
    }
    return null;
}

function handleHashOnLoad() {
    const parsed = parseHash();
    if (!parsed || !parsed.chapterId) return;
    const info = findChapterInfo(parsed.chapterId);
    if (!info) return;
    const link = document.querySelector(`.chapter-list a[data-chapter="${parsed.chapterId}"]`);
    if (!link) return;
    loadChapter(parsed.chapterId, info.section, link);
    if (parsed.sentenceIndex !== null && !isNaN(parsed.sentenceIndex)) {
        setTimeout(() => scrollToSentence(parsed.sentenceIndex), 150);
    }
}

function handleHashChange() {
    const parsed = parseHash();
    if (!parsed || !parsed.chapterId) {
        goHome();
        return;
    }
    handleHashOnLoad();
}

document.addEventListener('DOMContentLoaded', init);
