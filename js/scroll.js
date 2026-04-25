// 返回顶部 + 段落滚动 + 译文切换

function setupBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;

    const scrollContainer = document.querySelector('.scroll-container');

    function checkScroll() {
        const scrollTop = scrollContainer ? scrollContainer.scrollTop : (window.scrollY || document.documentElement.scrollTop);
        backToTop.classList.toggle('visible', scrollTop > 300);
    }

    if (scrollContainer) scrollContainer.addEventListener('scroll', checkScroll);
    window.addEventListener('scroll', checkScroll);

    backToTop.addEventListener('click', () => {
        if (scrollContainer) scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function scrollToSentence(index) {
    const sentences = document.querySelectorAll('.sentence');
    const target = sentences[index];
    if (!target) return;

    document.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
    const activeNode = document.querySelector(`.timeline-node[data-timeline-index="${index}"]`);
    if (activeNode) activeNode.classList.add('active');

    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
        const offset = target.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top + scrollContainer.scrollTop - 20;
        scrollContainer.scrollTo({ top: offset, behavior: 'smooth' });
    } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const hash = location.hash.slice(1);
    const chapterId = hash.split('-')[0];
    if (chapterId) {
        history.replaceState(null, '', `#${chapterId}-${index}`);
    }
}

function toggleSentenceTranslation(index) {
    const sentences = document.querySelectorAll('.sentence');
    if (!sentences[index]) return;
    const translation = sentences[index].querySelector('.translation');
    if (translation) {
        translation.style.display = translation.style.display === 'none' ? 'block' : 'none';
    }
}
