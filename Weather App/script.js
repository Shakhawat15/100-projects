function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const weatherInfo = document.getElementById('weatherInfo');

    const apiKey = '28fd15358cdecbc1a1dfef367e71acef'; // Replace with your own API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                cityName.textContent = 'City not found';
                temperature.textContent = '';
                description.textContent = '';
                weatherInfo.style.display = 'block';
            } else {
                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                description.textContent = `Description: ${data.weather[0].description}`;
                weatherInfo.style.display = 'block';
            }
        })
        .catch(error => {
            console.log('Error:', error);
            cityName.textContent = 'Error fetching weather data';
            temperature.textContent = '';
            description.textContent = '';
            weatherInfo.style.display = 'block';
        });

    cityInput.value = '';
}
