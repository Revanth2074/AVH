// script.js

const carousel = document.querySelector('.feature-grid');
const carouselItems = document.querySelectorAll('.feature-item');
const carouselButtons = document.querySelectorAll('.carousel-button');

let currentSlide = 0;

carouselButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    currentSlide = i;
    updateCarousel();
  });
});

function updateCarousel() {
  carouselItems.forEach((item, i) => {
    item.classList.remove('active');
    if (i === currentSlide) {
      item.classList.add('active');
    }
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % carouselItems.length;
  updateCarousel();
}, 5000);

const featureItems = document.querySelectorAll('.feature-item');

featureItems.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerHTML = e.target.querySelector('h3').textContent;
    item.appendChild(tooltip);
  });

  item.addEventListener('mouseout', (e) => {
    const tooltip = e.target.querySelector('.tooltip');
    if (tooltip) {
      tooltip.remove();
    }
  });
});

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: 'smooth',
    });
  });
});

const darkModeButton = document.querySelector('.dark-mode-button');

darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
