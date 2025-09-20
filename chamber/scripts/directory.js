const cards = document.querySelector('#cards');

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


//create business cards//

const fetchBusinessData = async () => {
    try {
        const response = await fetch("members.json");
        const data = await response.json();
        displayBusinesses(data.businesses);
    } catch (error) {
        let errormessage = document.createElement("h3");
        errormessage.innerHTML = "Business information could not be loaded.",
            cards.appendChild(errormessage);
    }
}

fetchBusinessData();

const displayBusinesses = (businesses) => {
    businesses.forEach((business) => {
        let card = document.createElement("section");
        let minipic = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");

        minipic.setAttribute('src', business.image);
        minipic.setAttribute('alt', business.name);
        minipic.setAttribute('loading', 'lazy');

        address.innerHTML = `${business.address}`;
        phone.innerHTML = `${business.phone}`;

        url.setAttribute('src', business.website);
        url.setAttribute('class', 'businessurl');
        url.innerHTML = `${business.website}`;

        card.appendChild(minipic);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        cards.appendChild(card);
    });
}


/* Switch from card to list display */

const cardButton = document.querySelector('#cardDisplay');
const listButton = document.querySelector('#listDisplay');


listButton.addEventListener('click', () => {
    cards.classList.remove('card');
    cards.classList.add('list');
});

cardButton.addEventListener('click', () => {
    cards.classList.remove('list');
    cards.classList.add('card');
})


