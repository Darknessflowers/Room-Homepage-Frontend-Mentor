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
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const controls = document.querySelector('#controls');
let sliderImg = document.querySelector('#sliderImg img');
// const prevSlideArrow = document.querySelector('#prevSlide');
// const nextSlideArrow = document.querySelector('#nextSlide');


function nextSlide() {
  if(currentSlide < slides.length - 1) {
  slides[currentSlide].classList.remove('active');
  currentSlide += 1;
  console.log(currentSlide);
  } else {
    slides[currentSlide].classList.remove('active');
    currentSlide = 0;
    console.log(currentSlide);
  }
  slides[currentSlide].classList.add('active');
}
function prevSlide() {
  //if the index of the slider is already at 0 go to the end
  if(currentSlide === 0) {
    slides[currentSlide].classList.remove('active');
    currentSlide = slides.length - 1;
    console.log(currentSlide);
  }
  //otherwise go back one
  else {
    slides[currentSlide].classList.remove('active');
    currentSlide -= 1;
    console.log(currentSlide);
  }
  slides[currentSlide].classList.add('active');
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
controls.addEventListener('click', handleArrowClick);
window.addEventListener('keyup', handleKey);