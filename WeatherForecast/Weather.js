const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('city');
const locationValue = document.getElementById('locationValue');
const temperatureValue = document.getElementById('temperatureValue');
const descriptionValue = document.getElementById('descriptionValue');


const city = cityInput.value;
const API_KEY = 'fadf992ea974d68bda689019dba3cc29';
const GoeApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`;
// const api_key = '0bce5e040fff4e54a0332658241705'
// const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`


searchBtn.addEventListener('click', () => {
    fetch(GoeApiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const cityData = data.find(city => city.name === city);
            if (cityData) {
                const {lat, lon} = cityData;
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

                fetch(apiUrl)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('City not found');
                        }
                        return response.json();
                    })
                    .then(weatherData => {
                        locationValue.textContent = cityData.name;
                        temperatureValue.textContent = `${weatherData.main.temp}°C`;
                        descriptionValue.textContent = weatherData.weather[0].description;
                    })
                    .catch(error => {
                        console.error(error);
                        locationValue.textContent = 'City not found';
                        temperatureValue.textContent = 'Temperature not Found';
                        descriptionValue.textContent = 'Description Not found';
                    });
            }
        })
        .catch(error => {
            console.error(error);
            locationValue.textContent = 'City not found';
            temperatureValue.textContent = 'Temperature not Found';
            descriptionValue.textContent = 'Description Not found';
        });
});