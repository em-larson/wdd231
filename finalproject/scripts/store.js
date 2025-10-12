

const scrollAmount = 300;

document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelectorAll('.galleryContainer');

    galleryContainer.forEach(container => {

        const gallery = container.querySelector('.gallery');
        const leftBtn = container.querySelector('.scrollLeft');
        const rightBtn = container.querySelector('.scrollRight');

        leftBtn.addEventListener('click', () => {
            gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    });
});


//header and footer code//

import { responsiveMenu } from "./headerfooter.js";
import { footerCode } from "./headerfooter.js";


window.addEventListener('DOMContentLoaded', () => {
    responsiveMenu();
    footerCode();
})