let noScroll = false;

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 5000); // i love skidding from stack overflow
}

window.onscroll = function () {
  if (window.pageYOffset > ((window.innerHeight / 100) * 25)) {
    document.getElementById("headerScroll").style.right = "0";
    document.getElementById("headerScroll").style.opacity = 1;
  } else {
    document.getElementById("headerScroll").style.right = "100%";
    document.getElementById("headerScroll").style.opacity = 0;
  }

  if (noScroll == false) {

    if (window.pageYOffset > window.innerHeight / 2 && window.pageYOffset < window.innerHeight) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      noScroll = true;
    }

    if (window.pageYOffset < (window.innerHeight / 2) && window.pageYOffset != 0) {
      window.scrollTo({ top: window.innerHeight, left: 0, behavior: 'smooth' });
      noScroll = true;
    }

  } else {
    if (window.pageYOffset == 0 || window.pageYOffset >= window.innerHeight) {
      noScroll = false;
    }
  }
};
