const wrapper = document.querySelector(".wrapper");
const slides = document.querySelectorAll(".slide");
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
    nextSlide();
    frontImgUpdate();
    backImgUpdate();
})

leftBtn.addEventListener('click', () => {
    prevSlide();
    frontImgUpdate();
    backImgUpdate();
})

// auto change slides
// let interval = setInterval(() => {
//     nextSlide();
//     frontImgUpdate();
//     backImgUpdate();
// }, 3000);

function nextSlide() {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
}

function prevSlide() {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
}

function frontImgUpdate() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[activeSlide].classList.add("active");
}

function backImgUpdate() {
    wrapper.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}