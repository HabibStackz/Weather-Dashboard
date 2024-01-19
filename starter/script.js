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
  }
}