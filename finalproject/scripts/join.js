// //responsive menu code//
// const hamButton = document.querySelector("#menu");
// const navigation = document.querySelector("#mainNav");

// hamButton.addEventListener('click', () => {
//     navigation.classList.toggle('open');
//     hamButton.classList.toggle('open');
// });

// //footer code//

// const year = new Date().getFullYear();
// const month = new Date().getMonth() + 1;
// const day = new Date().getDate();

// document.getElementById("copyright").innerHTML = `&copy ${year} | Emily Larson | Utah, USA`;
// document.getElementById('modified').textContent = `Date Modified: ${month}/${day}/${year}`;

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
        groupcard.appendchild(errormessage);
    }
}

fetchGroupData();

const displayGroupCards = (dndgroups) => {
    dndgroups.forEach((group) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let often = document.createElement('h4');
        let lookingfor = document.createElement('p');
        let description = document.createElement('p');

        name.innerHTML = `${group.groupName}`;
        often.innerHTML = `${group.howOften}`;
        lookingfor.innerHTML = `${group.lookingFor}`;
        description.innerHTML = `${group.description}`;

        card.appendChild(name);
        card.appendChild(lookingfor);
        card.appendChild(often);
        card.appendChild(description);

        groupcard.appendChild(card);
    });
};