const api = {
  key: "8d4511558bee8e3c9a85f45c72aafa81",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keypress', inputValue);

//Get City
function inputValue(evt) {
  if (evt.keyCode == 13) {
    getResults(searchInput.value);
  }
}

//Get Data From Api
function getResults(city) {
  fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

// Display Weather
const temperature = document.querySelector(".temp");
const weatherStatus = document.querySelector(".weather");
const city = document.querySelector(".city");
function displayResults(weather) {
  console.log(weather);
  temperature.innerText = weather.main.temp + " °C";
  city.innerText = weather.name;
  weatherStatus.innerText = weather.weather[0].main;
  getDate();
}

//Display Date
function getDate() {
  const dateContainer =document.querySelector(".date");

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let now = new Date();

  var day = now.getDate();
  var month = months[now.getMonth()];
  var year = now.getFullYear();

  dateContainer.innerText = `${day} ${month} ${year}`;

}