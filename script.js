const apiKey = "304e8679bbd07511b4fef6a70463c0f8";

// fetch weather data based on city name
async function getWeatherData(city){
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("error fetching weather data: ", error);
    return null;
  }
}

// Function to fetch 5-day weather forecast based on latitude and longitude
async function getWeatherForecast(lat, lon) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    return null;
  }
}

// Function to update html with current weather data
function updateWeatherUI(weatherData){
  const cityElement = document.getElementById('today').querySelector('h2');
  const tempElement = document.getElementById('temp');
  const windElement = document.getElementById('wind');
  const humidityElement = document.getElementById('humidity');
  const iconElement = document.getElementById('weather-icon');

  if (weatherData) {
    // update html with today's weather data
    cityElement.textContent = weatherData.name;
    tempElement.textContent = `Temp: ${weatherData.main.temp} °C`;
    windElement.textContent = `Wind: ${weatherData.wind.speed} M/S`;
    humidityElement.textContent = `Humidity: ${weatherData.main.humidity} %`

    if (weatherData.weather && weatherData.weather[0] && weatherData.weather[0].icon) {
      const iconUrl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
      iconElement.src = iconUrl;
      iconElement.alt = 'Weather Icon';
    }

    // Store today's weather data in local storage
    localStorage.setItem('weatherData', JSON.stringify(weatherData));
  } else{
    // Display an error message or clear the content if data is not available
    cityElement.textContent = 'City not found';
    tempElement.textContent = '';
    windElement.textContent = '';
    humidityElement.textContent = '';
    iconElement.src = ''; // Clear the weather icon
    iconElement.alt = '';

    // Clear today's weather data from local storage
    localStorage.removeItem('weatherData');
  }
}

// Function to update the HTML with the 5-day weather forecast data
function updateForecastUI(forecastData) {
  const forecastSection = document.getElementById('forecast');
  forecastSection.innerHTML = ''; // Clear existing content

  if (forecastData && forecastData.list) {
    // Iterate over the forecast data and create cards
    for (let i = 0; i < 5; i++) {
      const forecast = forecastData.list[i * 8]; // Retrieve forecast data for a specific day (every 8th item in the list)

      const card = document.createElement('div');
      card.className = 'col mb-3';
      card.innerHTML = `
        <div class="card border-0 bg-secondary text-white">
          <div class="card-body p-3 text-white">
            <h5 class="card-title fw-semibold">${dayjs(forecast.dt_txt).format('dddd, MMM D')}</h5>
            <img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="Weather Icon" />
            <h6 class="card-text my-3 mt-3">Temp: ${forecast.main.temp} °C</h6>
            <h6 class="card-text my-3">Wind: ${forecast.wind.speed} M/S</h6>
            <h6 class="card-text my-3">Humidity: ${forecast.main.humidity}%</h6>
          </div>
        </div>
      `;
      forecastSection.appendChild(card);
    }

    // Store forecast data in local storage
    localStorage.setItem('forecastData', JSON.stringify(forecastData));
  } else {
    // Display an error message or clear the content if data is not available
    forecastSection.innerHTML = '<p>Error fetching forecast data</p>';

    // Clear forecast data from local storage
    localStorage.removeItem('forecastData');
  }
}

// Function to update the search history
function updateSearchHistory(city) {
  const historyDiv = document.getElementById('history');
  const button = document.createElement('button');
  button.textContent = city;
  button.className = 'btn btn-secondary btn-sm m-1';
  button.addEventListener('click', async function () {
    const weatherData = await getWeatherData(city);
    const forecastData = await getWeatherForecast(weatherData.coord.lat, weatherData.coord.lon);
    updateWeatherUI(weatherData);
    updateForecastUI(forecastData);
  });
  historyDiv.appendChild(button);
}

// Event listener for the search form
document.getElementById('search-form').addEventListener('submit', async function (event) {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');
  const city = searchInput.value.trim();

  if (city !== '') {
    const weatherData = await getWeatherData(city);

    if (weatherData && weatherData.coord) {
      const forecastData = await getWeatherForecast(weatherData.coord.lat, weatherData.coord.lon);
      updateWeatherUI(weatherData);
      updateForecastUI(forecastData);
      updateSearchHistory(city);
    } else {
      // Handle case when weather data is not available
      updateWeatherUI(null);
      updateForecastUI(null);
    }
  }
});

// Function to load saved data from local storage on page load
window.onload = function () {
  const savedWeatherData = JSON.parse(localStorage.getItem('weatherData'));
  const savedForecastData = JSON.parse(localStorage.getItem('forecastData'));

  if (savedWeatherData) {
    updateWeatherUI(savedWeatherData);
  }

  if (savedForecastData) {
    updateForecastUI(savedForecastData);
  }
};