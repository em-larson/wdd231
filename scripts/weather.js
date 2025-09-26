const temp = document.querySelector('#current-temp');
const pic = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

const mykey = "6e92dcdf2581d5e01b09280ce47a6de8 ";
const lat = "49.75";
const lon = "6.638";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${mykey}`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayresults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayresults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;
    pic.setAttribute('src', iconsrc);
    pic.setAttribute('alt', desc);
    caption.textContent = `${desc}`;
}