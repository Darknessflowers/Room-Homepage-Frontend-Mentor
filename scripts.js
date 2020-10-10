let slider = document.querySelector('#slider');
let slides = document.querySelectorAll('.slide');
let images = document.querySelectorAll('#imageContainer img');
let newImages;
let captions = document.querySelectorAll('#captionContainer .caption');
let currentSlide = 0;
let autoplay;
const controls = document.querySelector('#controls');
let menuBtn = document.querySelector('.openMenu');
let header = document.querySelector('header');
let switchImgBreakpoint = window.matchMedia('(max-width: 800px)');

function nextSlide() {
  if(currentSlide < images.length - 1) {
  images[currentSlide].classList.remove('active');
  captions[currentSlide].classList.remove('active');
  currentSlide += 1;
  } else {
    images[currentSlide].classList.remove('active');
    captions[currentSlide].classList.remove('active');
    currentSlide = 0;
  }
  images[currentSlide].classList.add('active');
  captions[currentSlide].classList.add('active');
}
function prevSlide() {
  //if the index of the slider is already at 0 go to the end
  if(currentSlide === 0) {
    images[currentSlide].classList.remove('active');
    captions[currentSlide].classList.remove('active');
    currentSlide = slides.length - 1;
  }
  //otherwise go back one
  else {
    images[currentSlide].classList.remove('active');
    captions[currentSlide].classList.remove('active');
    currentSlide -= 1;
  }
  images[currentSlide].classList.add('active');
  captions[currentSlide].classList.add('active');

}

function autoplaySlider() {
  autoplay = setInterval(() => {
    nextSlide();
  }, 6000);
}
function pauseSliderAutoplay() {
  clearInterval(autoplay);
  slider.addEventListener('mouseout', autoplaySlider, true);
}
function handleArrowClick(e) {
 if(e.target.className === "arrowRight") {
  //  e.preventDefault();
   nextSlide();
 } else if(e.target.className === "arrowLeft"){
    prevSlide();
 }
}

function handleKey(e) {
  if(e.key === 'ArrowLeft') {
    e.preventDefault();
    prevSlide();
  } else if(e.key === 'ArrowRight') {
    e.preventDefault();
    nextSlide();
  }
}
function openMenu() {
header.classList.toggle('open');
  if(header.classList.contains('open')) {
    menuBtn.src = './images/icon-close.svg';
  } else {
    menuBtn.src = './images/icon-hamburger.svg';
  }
}
function replaceImages(formatFrom, formatTo) {
  newImages = [...images]; //always have a full array before starting
  newImages = newImages.map(image => image.src.replace(formatFrom, formatTo));
  images.forEach((image, index) => {
    //replace display array with correct values
    image.src = newImages[index];
  });
}
function checkBreakpoint() {
  if(switchImgBreakpoint.matches) {
    replaceImages('desktop', 'mobile');
  } else {
    replaceImages('mobile', 'desktop');
  }
}

autoplaySlider();
checkBreakpoint();
switchImgBreakpoint.addListener(checkBreakpoint);
controls.addEventListener('click', handleArrowClick);
window.addEventListener('keyup', handleKey);
slider.addEventListener('mouseover', pauseSliderAutoplay);
menuBtn.addEventListener('click', openMenu);