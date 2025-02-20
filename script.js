
document.addEventListener("DOMContentLoaded", function() {
    animation();
});

function animation() {
    const card = document.querySelector('.logoFinal');
    card.style.height = '100px';
    card.style.width = '100px';
    card.style.transition = 'all 1s ease-in-out';
}

document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector('.card');
    card.classList.add('zoomInDown');
});