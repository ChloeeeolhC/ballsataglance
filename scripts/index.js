document.querySelectorAll('.ball').forEach(ball => {
    ball.addEventListener('click', () => {
        const target = ball.getAttribute('data-target');
        window.location.href = target;
    });
});
