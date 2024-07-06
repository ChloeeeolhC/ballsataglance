document.querySelectorAll('.ball').forEach(ball => {
    ball.addEventListener('click', function() {
        window.location.href = this.dataset.target;
    });
});
