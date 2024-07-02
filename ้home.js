let slides = document.querySelector('.slides');
let slideIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const navBtns = document.querySelectorAll('.nav-btn');

function showSlide(index) {
    slideIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    navBtns.forEach(btn => btn.classList.remove('active'));
    navBtns[index].classList.add('active');
}

navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => showSlide(index));
});

showSlide(slideIndex);
