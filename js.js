document.addEventListener("DOMContentLoaded", function () {
    // Set the initial slide index
    let currentSlide = 1;

    // Function to show the next slide
    function showNextSlide() {
        currentSlide = (currentSlide % 6) + 1; // number after percentage must be the no. of slides
        location.hash = "#slide-" + currentSlide;
    }

    // Set an interval to call the showNextSlide function every 2 seconds
    let intervalId = setInterval(showNextSlide, 5000);

    // Stop the interval when the user interacts with the slider
    document.querySelector('.slider').addEventListener('mouseenter', function () {
        clearInterval(intervalId);
    });

    // Restart the interval when the user leaves the slider
    document.querySelector('.slider').addEventListener('mouseleave', function () {
        intervalId = setInterval(showNextSlide, 5000);
    });
});
