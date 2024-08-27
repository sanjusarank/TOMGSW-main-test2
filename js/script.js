let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const plus = element.querySelector(".plus");
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        plus.textContent = "-";
    } else {
        answer.style.display = "none";
        plus.textContent = "+";
    }
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
        slide.classList.toggle('active', i === index);
    });
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Initialize slider
showSlide(currentSlide);
