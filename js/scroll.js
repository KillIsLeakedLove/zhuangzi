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
        scrollContainer.dataset.programScroll = '1';
        const offset = target.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top + scrollContainer.scrollTop - 20;
        scrollContainer.scrollTo({ top: offset, behavior: 'smooth' });
        setTimeout(() => delete scrollContainer.dataset.programScroll, 600);
    } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

let timelineScrollHandler = null;

function setupTimelineScrollSync() {
    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) return;

    if (timelineScrollHandler) {
        scrollContainer.removeEventListener('scroll', timelineScrollHandler);
    }

    const sentences = document.querySelectorAll('.sentence');
    if (!sentences.length) return;

    timelineScrollHandler = () => {
        if (scrollContainer.dataset.programScroll) return;

        const containerRect = scrollContainer.getBoundingClientRect();
        const threshold = containerRect.top + 60;

        let activeIndex = 0;
        for (let i = 0; i < sentences.length; i++) {
            const rect = sentences[i].getBoundingClientRect();
            if (rect.top <= threshold) {
                activeIndex = i;
            } else {
                break;
            }
        }

        const currentActive = document.querySelector('.timeline-node.active');
        const currentIndex = currentActive ? parseInt(currentActive.dataset.timelineIndex, 10) : -1;
        if (activeIndex === currentIndex) return;

        document.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
        const node = document.querySelector(`.timeline-node[data-timeline-index="${activeIndex}"]`);
        if (node) {
            node.classList.add('active');
            node.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    scrollContainer.addEventListener('scroll', timelineScrollHandler);
    timelineScrollHandler();
}

function toggleSentenceTranslation(index) {
    const sentences = document.querySelectorAll('.sentence');
    if (!sentences[index]) return;
    const translation = sentences[index].querySelector('.translation');
    if (translation) {
        translation.style.display = translation.style.display === 'none' ? 'block' : 'none';
    }
}
