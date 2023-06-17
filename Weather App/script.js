const cityInput = document.querySelector('#cityInput');
const btn = document.querySelector('.btn');
const city = document.querySelector('#cityName');
const date = document.querySelector('#date');
const temperature = document.querySelector('#temperature');
const weather = document.querySelector('#weather');
const tempRange = document.querySelector('#temp-range');
const weatherInfo = document.querySelector('#weatherInfo');
const error = document.querySelector('#error');

/**
 * Create getDate() function for showing date
 * @returns {`${string}, ${number}, ${string}, ${number}`}
 */
const getDate = () => {
    // Declare some variable
    const d = new Date(); // Current date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // Days Array
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // Months Array
    const day = days[d.getDay()]; // Get day name
    const date = d.getDate(); // Get date
    const month = months[d.getMonth()]; // Get month name
    const year = d.getFullYear(); // Get year
    // Return the day, date, month and year
    return `${day}, ${date}, ${month}, ${year}`;
};

const getData = () => {
    const api = {
        key: "28fd15358cdecbc1a1dfef367e71acef",
        base: "https://api.openweathermap.org/data/2.5/"
    };
    fetch(`${api.base}weather?q=${cityInput.value}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(displayData)
        .catch(error => {
            console.log('Error:', error);
            error.textContent = 'An error occurred while fetching the weather data.';
            error.style.display = 'block';
        });
};

btn.addEventListener('click', getData);

const displayData = (res) => {
    console.log(res)
    if (res.cod === '404') {
        error.textContent = 'Please enter a valid city name!';
        error.style.display = 'block';
        weatherInfo.style.display = 'none';
    }
    city.innerHTML = `${res.name}, ${res.sys.country}`;
    date.innerHTML = getDate();
    temperature.innerHTML = `Temp: ${res.main.temp}°C`;
    weather.innerHTML = `Weather: ${res.weather[0].main}`;
    tempRange.innerHTML = `Temp Range: ${res.main.temp_min}°C / ${res.main.temp_max}°C`;
    weatherInfo.style.display = 'block';
    error.style.display = 'none';
}