const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
        cursor.style.background = '#b2f0bfea';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = 'transparent';
    });
});