document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow-image');

function showSlide(n) {
    slides.forEach(slide => slide.style.display = "none");
    slides[n].style.display = "block";
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto rotate the slideshow every 5 seconds
setInterval(nextSlide, 5000);

// "Click to Enroll" button action
function enroll() {
    window.open("https://ioi.dk/hitman", "_blank");
}