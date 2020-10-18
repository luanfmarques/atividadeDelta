const track = document.querySelector('.carousel-divs');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const trackImages = document.querySelector('.carousel-imgs');
const imageSlides = Array.from(trackImages.children);
const divsNavs = document.querySelector('.carousel-indicator-container');
const divs = Array.from(divsNavs.children);
const currentSlide = track.querySelector('.current-slide');


const moveToSlide = (currentSlide, targetSlide, currentImage, targetImage, currentDiv, targetDiv) => {
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    currentImage.classList.remove('current-slide');
    targetImage.classList.add('current-slide');
    currentDiv.classList.remove('current-slide-bar');
    targetDiv.classList.add('current-slide-bar');
};


const disableButton = () => {
    const currentSlide = track.querySelector('.current-slide');
    slides.forEach(element => {
        if (currentSlide === slides[0]) {
            prevButton.classList.add('car-limit');
        } else {
            prevButton.classList.remove('car-limit');
        }

        if(currentSlide === slides[slides.length -2]) {
            nextButton.classList.add('car-limit');
        } else {
            nextButton.classList.remove('car-limit');
        }
    });
}

disableButton(currentSlide);

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentImage = trackImages.querySelector('.current-slide');
    const prevImage = currentImage.previousElementSibling;
    const currentDiv = divsNavs.querySelector('.current-slide-bar')
    const prevDiv = currentDiv.previousElementSibling;

    moveToSlide(currentSlide, prevSlide, currentImage, prevImage, currentDiv, prevDiv);
    disableButton(currentSlide);
})

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentImage = trackImages.querySelector('.current-slide');
    const nextImage = currentImage.nextElementSibling;
    const currentDiv = divsNavs.querySelector('.current-slide-bar')
    const nextDiv = currentDiv.nextElementSibling;

    moveToSlide(currentSlide, nextSlide, currentImage, nextImage, currentDiv, nextDiv);
    disableButton(currentSlide);
});
