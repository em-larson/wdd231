

const scrollAmount = 300;

document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector('.gallery');
    const leftBtn = document.querySelector('.scrollLeft');
    const rightBtn = document.querySelector('.scrollRight');

    leftBtn.addEventListener('click', () => {
        galleryContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    })

    rightBtn.addEventListener('click', () => {
        galleryContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        console.log('its working');
    })

});

