const imagePaths = [
  "assets/carousel-images/carousel-image-1.png",
  "assets/carousel-images/carousel-image-2.png",
  "assets/carousel-images/carousel-image-3.png",
  "assets/carousel-images/carousel-image-4.png",
  "assets/carousel-images/carousel-image-5.png",
  "assets/carousel-images/carousel-image-6.png",
];

const wrapper = document.querySelector(".carousel-wrapper");
const prevButton = document.querySelector(".carousel-btn.prev");
const nextButton = document.querySelector(".carousel-btn.next");

let index = 0;
const totalSlides = imagePaths.length;

function createSlides() {
  imagePaths.forEach((path) => {
    const slide = document.createElement("div");
    slide.classList.add("carousel-slide");

    const img = document.createElement("img");
    img.src = path;
    img.alt = `Logo ${imagePaths.indexOf(path) + 1}`;

    slide.appendChild(img);
    wrapper.appendChild(slide);
  });
}

createSlides();

const slides = document.querySelectorAll(".carousel-slide");

function moveSlide(direction) {
  index += direction;
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }
  updateSlide();
}

function updateSlide() {
  wrapper.style.transform = `translateX(-${index * 100}%)`;
}

function autoSlide() {
  moveSlide(1);
}

setInterval(autoSlide, 3000);

prevButton.addEventListener("click", () => moveSlide(-1));
nextButton.addEventListener("click", () => moveSlide(1));
