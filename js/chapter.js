// 章节加载与内容渲染

const sectionNames = { neipian: '内篇', waipian: '外篇', zapian: '杂篇' };

function loadChapter(chapterId, section, linkElement) {
    document.querySelectorAll('.chapter-list a').forEach(a => a.classList.remove('active'));
    linkElement.classList.add('active');

    document.getElementById('welcome').style.display = 'none';
    document.getElementById('chapter-content').style.display = '';

    const chapter = chapters[section].find(c => c.id === chapterId);
    const data = chapterData[chapterId];

    if (!data) {
        renderContent({
            title: chapter.title,
            sentences: [{ original: '此章节内容正在整理中...', translation: 'This chapter content is being organized...' }],
            interpretation: '<p>此章节内容正在整理中，敬请期待。</p>',
            insight: '<p>更多内容即将上线。</p>'
        }, chapter, sectionNames[section]);
        return;
    }

    renderContent(data, chapter, sectionNames[section]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderContent(data, chapter, sectionName) {
    document.getElementById('chapter-tag').textContent = sectionName;
    document.getElementById('chapter-title').textContent = data.title;
    renderOriginalText(data);
    document.getElementById('interpretation-content').innerHTML = (data.interpretation || '<p>暂无解读</p>') + '<p>&nbsp;</p>';
    document.getElementById('insight-content').innerHTML = (data.insight || '<p>暂无启示</p>') + '<p>&nbsp;</p>';
    document.getElementById('example-content').innerHTML = data.example || '<p>暂无用例</p>';
}

function renderOriginalText(data) {
    const container = document.getElementById('original-text');
    const quickNav = document.getElementById('quick-nav');

    if (quickNav && data.sentences && data.sentences.length > 0) {
        const nodes = data.sentences.map((_, index) => `
            <div class="timeline-node" data-timeline-index="${index}" onclick="scrollToSentence(${index})">
                <span class="timeline-dot"></span>
                <span class="timeline-label">${index + 1}</span>
            </div>
        `).join('');
        quickNav.innerHTML = `<div class="timeline-track"><div class="timeline-track-inner">${nodes}</div></div>`;
        quickNav.style.display = 'block';
        setupTimelineDrag(quickNav);
        const previews = data.sentences.map(s => s.original.substring(0, 16) + (s.original.length > 16 ? '…' : ''));
        setupTimelineTooltips(quickNav, previews);
    } else if (quickNav) {
        quickNav.style.display = 'none';
    }

    container.innerHTML = data.sentences.map((s, index) => `
        <div class="sentence" data-index="${index}" onclick="toggleSentenceTranslation(${index})">
            <p class="original">${s.original}</p>
            <p class="translation" style="display: none;">${s.translation}</p>
        </div>
    `).join('');
}
