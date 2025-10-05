const discovercards = document.querySelector('#discoverCards')

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

//create discover cards//

const fetchDiscoverData = async () => {
    try {
        const response = await fetch("discover.json");
        const data = await response.json();
        displayDiscoverCard(data.discover);
    } catch (error) {
        let errormessage = document.createElement("h3");
        errormessage.innerHTML = "Information could not be loaded.",
            discovercards.appendChild(errormessage);
    }
}

fetchDiscoverData();

const displayDiscoverCard = (discover) => {
    discover.forEach((item) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let pic = document.createElement("img");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let learn = document.createElement("button");

        name.innerHTML = `${item.name}`

        pic.setAttribute('src', item.picture);
        pic.setAttribute('alt', item.name);
        pic.setAttribute('loading', 'lazy');

        address.innerHTML = `${item.address}`;
        description.innerHTML = `${item.description}`;
        learn.innerHTML = "Learn More";

        card.appendChild(name);
        card.appendChild(pic);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(learn);

        discovercards.appendChild(card);
    });
}

//last visited code//

const lastvisited = document.querySelector('#lastvisited');
const msToDays = 86400000;

window.addEventListener('DOMContentLoaded', () => {

    let visits = Number (localStorage.getItem('visits')) || 0;

    if (visits === 0) {
        const firstvisited = Date.now();
        localStorage.setItem('firstvisit', firstvisited);

        let statement = document.createElement('p');
        statement.innerHTML = "Welcome! Let us know if you have any questions."
        lastvisited.appendChild(statement);

    }

    else {
        let recentvisit = Date.now();
        let firstvisited = localStorage.getItem('firstvisit')

        let dayssince = (recentvisit - firstvisited) / msToDays;

        if (dayssince > 2) {
            let statement = document.createElement("p");
            statement.innerHTML = `You last visted ${dayssince} days ago.`;
                    lastvisited.appendChild(statement);

        }

        else if (dayssince > 1) {
            let statement = document.createElement('p');
            statement.innerHTML = `You last visited ${dayssince} day ago`;
                    lastvisited.appendChild(statement);

        }

        else if (dayssince < 1) {
            let statement = document.createElement('p');
            statement.innerHTML = "Back so soon! Awesome!"
                    lastvisited.appendChild(statement);

        }

    }
    visits +=1;
    localStorage.setItem('visits', visits);
});

