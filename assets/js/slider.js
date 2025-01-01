let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    document.querySelector('.slides').style.transform = `translateX(${-currentSlide * 100}%)`;
    updateDots();
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) dot.classList.add('active');
    });
}

setInterval(() => {
    changeSlide(1);
}, 5000);