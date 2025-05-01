const track = document.querySelector('.carousel-track');
const items = Array.from(document.querySelectorAll('.carousel-item'));
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);