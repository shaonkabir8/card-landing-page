document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page initialized.');
    
    // Add subtle tilt effect to card
    const card = document.querySelector('.card');
    const container = document.querySelector('.container');

    container.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
        // Popout effect moved to CSS hover or remove simple scale here to avoid conflict
    });

    container.addEventListener('mouseleave', () => {
        card.style.transition = 'all 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});
