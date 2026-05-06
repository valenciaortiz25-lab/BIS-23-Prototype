let currentIndex = 0;

const slides = document.getElementsByClassName("slide");

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    let slider = document.getElementById("slider");
    slider.style.transform = "translateX(" + (-currentIndex * 100) + "%)";
}

function changeSlide(step) {
    showSlide(currentIndex + step);
}

// AUTO PLAY
setInterval(() => {
    changeSlide(1);
}, 3000);

// start
showSlide(currentIndex);