// let slides = [
// {
//   title: "Discover innovative ways to decorate",
//   paragraph: "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
//   image: "./images/desktop-image-hero-1.jpg",
//   mobileImage: "./images/mobile-image-hero-1.jpg",
//   ctaText: "Shop now",
// },
// {
//   title: "We are available all across the globe",
//   paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
//   image: "./images/desktop-image-hero-2.jpg",
//   mobileImage: "./images/mobile-image-hero-2.jpg",
//   ctaText: "Shop now",
// },
// {
//   title: "Manufactured with the best materials",
//   paragraph: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
//   image: "./images/desktop-image-hero-3.jpg",
//   mobileImage: "./images/mobile-image-hero-3.jpg",
//   ctaText: "Shop now",
// },
// ];
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

// let sliderImg = document.querySelector('#sliderImg img');
// const prevSlideArrow = document.querySelector('#prevSlide');
// const nextSlideArrow = document.querySelector('#nextSlide');


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
    slides[currentSlide].classList.remove('active');
    currentSlide = slides.length - 1;
  }
  //otherwise go back one
  else {
    slides[currentSlide].classList.remove('active');
    currentSlide -= 1;
  }
  slides[currentSlide].classList.add('active');
}

function autoplaySlider() {
  autoplay = setInterval(() => {
    nextSlide();
  }, 6000);
}
function pauseSliderAutoplay() {
  console.log('pausing');
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