let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let interval; // Variable para almacenar el intervalo de tiempo

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  updateDots(index);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function goToSlide(index) {
  clearInterval(interval); // Detiene el intervalo cuando se pulsa un punto
  currentIndex = index;
  showSlide(currentIndex);
}

function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Inicia el slider y cambia cada 4 segundos
interval = setInterval(nextSlide, 4000);