const temp = document.querySelector('#current-temp');
const pic = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');
const forecast = document.querySelector('#forecast-tomorrow');
const captionTomorrow = document.querySelector('#tomorrow');

const mykey = "6e92dcdf2581d5e01b09280ce47a6de8 ";
const lat = "41.220";
const lon = "-111.97";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${mykey}`;
const urltwo = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${mykey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayresults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function forecastFetch() {
    try {
        const responsetwo = await fetch(urltwo);
        if (responsetwo.ok) {
            const datatwo = await responsetwo.json();
            console.log(datatwo);
            displayforecast(datatwo);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
forecastFetch();

function displayresults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;
    pic.setAttribute('src', iconsrc);
    pic.setAttribute('alt', desc);
    caption.textContent = `${desc}`;
}



function displayforecast(datatwo) {
    let tempera = `${datatwo.list[4].main.temp}&deg;F`;
    const iconTomorrowSrc = `https://openweathermap.org/img/w/${datatwo.list[4].weather[0].icon}.png`;
    let descript = datatwo.list[4].weather[0].description;
    forecast.setAttribute('src', iconTomorrowSrc);
    forecast.setAttribute('alt', descript);
    captionTomorrow.innerHTML = `${tempera} | ${descript}`;
}

/* Member CardDisplay */
const meetMembers = document.querySelector('#membership');

const fetchBusinessData = async () => {
    try {
        const response = await fetch("members.json");
        const data = await response.json();

        const shuffled = data.businesses.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        displayBusinesses(selected);
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
        let level = document.createElement("p");

        minipic.setAttribute('src', business.image);
        minipic.setAttribute('alt', business.name);
        minipic.setAttribute('loading', 'lazy');

        address.innerHTML = `${business.address}`;
        phone.innerHTML = `${business.phone}`;

        url.setAttribute('href', business.website);
        url.setAttribute('class', 'businessurl');
        url.innerHTML = `${business.website}`;

        level.textContent = `${business.membership} Member`

        card.appendChild(minipic);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(level);
        card.setAttribute('class', 'event');

        meetMembers.appendChild(card);
    });
}

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