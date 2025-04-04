// const apiKey = '417ca834024b7549f55104385598fc2d'; // Replace with your OpenWeatherMap API key
const apiKey = '417ca834024b7549f55104385598fc2d'; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city');

// Event listener for search button
searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeatherData(city);
    }
});

// Fetch weather data from OpenWeatherMap API
async function getWeatherData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.cod === '404') {
            alert("City not found!");
        } else {
            displayWeatherData(data);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Display the weather data in the dashboard
function displayWeatherData(data) {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    // City name and country code
    cityName.innerText = `${data.name}, ${data.sys.country}`;
    // Temperature
    temperature.innerText = `${data.main.temp}°C`;
    // Weather description
    description.innerText = `Condition: ${data.weather[0].description}`;
    // Humidity
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    // Wind speed
    wind.innerText = `Wind Speed: ${data.wind.speed} m/s`;
}
