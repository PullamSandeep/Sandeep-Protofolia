//http://api.weatherapi.com/v1/current.json?key=9c76de5c57344e41ac143811262603&q=Mumbai&aqi=no
const temperatureField = document.querySelector(".Temp p");
const timeLocation = document.querySelector(".time_location");
const conditionField = document.querySelector(".could p:last-child");
const searchField = document.querySelector(".search_arae");
const form = document.querySelector("form");

form.addEventListener("submit", searchForLocation); 

async function fetchResults(location) {
    let url = `https://api.weatherapi.com/v1/current.json?key=9c76de5c57344e41ac143811262603&q=${location}&aqi=no`;

    const res = await fetch(url);
    const data = await res.json();

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    temperatureField.innerText = `${temp}°C`;
    timeLocation.innerHTML = `<p>${locationName}</p><p>${time}</p>`;
    conditionField.innerText = condition;
}

function searchForLocation(e) {
    e.preventDefault(); 
    let target = searchField.value; 
    fetchResults(target);
}


fetchResults("Mumbai");