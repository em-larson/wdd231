/*footer info */

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

document.getElementById("copyright").innerHTML = `&copy ${year} | Emily Larson | Utah, USA`;
document.getElementById('modified').textContent = `Date Modified: ${month}/${day}/${year}`;


//responsive menu code//
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("#mainNav");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//Modal buttons for membership levels//

const modalbutton = document.querySelectorAll('button[data-modal]');

modalbutton.forEach(button => {
    button.addEventListener('click', () => {
        const modalID = button.getAttribute('data-modal');
        const modal = document.getElementById(modalID);
        modal.showModal();
    });
});

document.querySelectorAll('.closeModal').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        e.target.closest('dialog').close();
    });
});


//js for the transition on the side//

window.addEventListener('DOMContentLoaded', () => {
    const levels = document.querySelectorAll('#levels section');
    levels.forEach(section => {
        section.classList.add('show');
    });
});

//hidden timestamp code//

window.addEventListener('DOMContentLoaded', () => {
    const tempTimestamp = new Date().toLocaleString();

    localStorage.setItem('timestamp', tempTimestamp);
    //window.location.href = "thankyou.html";
});





