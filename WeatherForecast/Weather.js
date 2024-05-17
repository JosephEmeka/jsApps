const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('city');
const locationValue = document.getElementById('locationValue');
const temperatureValue = document.getElementById('temperatureValue');
const descriptionValue = document.getElementById('descriptionValue');


const city = cityInput.value;
// const API_KEY = '25d5c98ef1fbe0bd26ca6b50867de042';
// const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`;
const api_key = '0bce5e040fff4e54a0332658241705'
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`


searchBtn.addEventListener('click', () => {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            locationValue.textContent = data.name;
            temperatureValue.textContent = data.alert;
            descriptionValue.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error(error);
            locationValue.textContent = 'City not found';
            temperatureValue.textContent = '';
            descriptionValue.textContent = '';
        });
});