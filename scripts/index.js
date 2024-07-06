// scripts/index.js
document.addEventListener('DOMContentLoaded', function() {
    var balls = document.querySelectorAll('.ball');
    balls.forEach(function(ball) {
        ball.addEventListener('click', function() {
            var target = ball.getAttribute('data-target');
            window.location.href = target;
        });
    });
});
