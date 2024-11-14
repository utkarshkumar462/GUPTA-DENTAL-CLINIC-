let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');
const totalImages = images.length;

function scrollLeft() {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updateImageGallery();
}

function scrollRight() {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updateImageGallery();
}

function updateImageGallery() {
    const offset = -currentIndex * 100; // Adjust the width based on the number of images
    document.querySelector('.image-container').style.transform = `translateX(${offset}%)`;
}

// Auto-scrolling every 2 seconds (2000 milliseconds)
setInterval(() => {
    scrollRight();
}, 2000);

// Add event listeners to the scroll buttons
document.querySelector('.left').addEventListener('click', scrollLeft);
document.querySelector('.right').addEventListener('click', scrollRight);
