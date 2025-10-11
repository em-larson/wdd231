//responsive menu code//
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("#mainNav");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//footer code//

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

document.getElementById("copyright").innerHTML = `&copy ${year} | Emily Larson | Utah, USA`;
document.getElementById('modified').textContent = `Date Modified: ${month}/${day}/${year}`;

//create group cards//
const groupcard = document.querySelector('#groups');

const fetchGroupData = async () => {
    try {
        const response = await fetch("groups.json");
        const data = await response.json();
        displayGroupCards(data.groups);
    } catch (error) {
        let errormessage = document.createElement('h3');
        errormessage.innerHTML = "Group Data Could Not Be Loaded";
        groupcard.appendChild(errormessage);
    }
}

fetchGroupData();

const displayGroupCards = (dndgroups) => {
    dndgroups.forEach((group) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let often = document.createElement('p');
        let lookingfor = document.createElement('p');
        let description = document.createElement('p');
        let contact = document.createElement('address');
        let modal = document.createElement('dialog');
        let button = document.createElement('button');
        let closebutton = document.createElement('button');
        let picture = document.createElement('img');

        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('src', group.picture);
        picture.setAttribute('alt', 'colored dice');

        button.classList.add('groupModal');
        button.innerHTML = 'Learn More';
        button.setAttribute('type', 'button');
        button.setAttribute('data-modal', `${group.groupName}`);
        modal.id = `${group.groupName}`;

        closebutton.classList.add('closeModal');
        closebutton.innerHTML = 'Close';

        name.innerHTML = `${group.groupName}`;
        often.innerHTML = `${group.howOften}`;
        lookingfor.innerHTML = `${group.lookingFor} <br> ${group.howOften}`;
        description.innerHTML = `${group.description}`;
        contact.innerHTML = `${group.contact}`

        modal.appendChild(name.cloneNode(true));
        modal.appendChild(lookingfor.cloneNode(true));
        // modal.appendChild(often.cloneNode(true));
        modal.appendChild(contact);
        modal.appendChild(description);
        modal.appendChild(closebutton);

        card.appendChild(name);
        card.appendChild(lookingfor);
        // card.appendChild(often);
        card.appendChild(modal);
        card.appendChild(button);
        card.appendChild(picture);

        groupcard.appendChild(card);
    });

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
};

//hidden timestamp code//

window.addEventListener('DOMContentLoaded', () => {
    const tempTimestamp = new Date().toLocaleString();

    localStorage.setItem('timestamp', tempTimestamp);
});


