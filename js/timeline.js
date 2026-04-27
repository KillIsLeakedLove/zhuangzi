// 时间线拖拽 + tooltip（position: fixed）

function setupTimelineDrag(navEl) {
    const track = navEl.querySelector('.timeline-track');
    if (!track) return;

    let isDown = false;
    let startX;
    let scrollLeftStart;

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        navEl.classList.add('dragging');
        startX = e.pageX - track.getBoundingClientRect().left;
        scrollLeftStart = track.scrollLeft;
    });

    track.addEventListener('mouseleave', () => {
        isDown = false;
        navEl.classList.remove('dragging');
    });

    track.addEventListener('mouseup', () => {
        isDown = false;
        navEl.classList.remove('dragging');
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.getBoundingClientRect().left;
        track.scrollLeft = scrollLeftStart - (x - startX) * 1.5;
    });
}

function setupTimelineTooltips(navEl, previews) {
    let tooltip = document.getElementById('timeline-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'timeline-tooltip';
        tooltip.className = 'timeline-tooltip';
        document.body.appendChild(tooltip);
    }

    navEl.querySelectorAll('.timeline-node').forEach((node, index) => {
        const preview = previews[index];
        if (!preview) return;

        node.addEventListener('mouseenter', () => {
            tooltip.textContent = preview;
            tooltip.style.display = 'block';
            positionTooltip(node, tooltip);
        });

        node.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
}

function positionTooltip(node, tooltip) {
    const rect = node.getBoundingClientRect();
    const ttRect = tooltip.getBoundingClientRect();
    let left = rect.left + rect.width / 2 - ttRect.width / 2;
    let top = rect.top - ttRect.height - 8;

    if (left < 4) left = 4;
    if (left + ttRect.width > window.innerWidth - 4) {
        left = window.innerWidth - ttRect.width - 4;
    }
    if (top < 4) top = rect.bottom + 8;

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
}
