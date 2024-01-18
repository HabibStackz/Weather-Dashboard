const cityInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const currentWeatherDiv = document.getElementById("today");
const fiveDaysForecastDiv = document.getElementById("forecast");

const API = "304e8679bbd07511b4fef6a70463c0f8";

const createWeatherCard = (cityName, weatherItem, index) => {
  if (index === 0) {
    return `<div class="mt-3 d-flex justify-content-between">
                  <div>
                      <h3 class="fw-bold">${cityName} (${
      weatherItem.dt_txt.split(" ")[0]
    })</h3>
                      <h6 class="my-3 mt-3">Temperature: ${(
                        weatherItem.main.temp - 273.15
                      ).toFixed(2)}°C</h6>
                      <h6 class="my-3">Wind: ${weatherItem.wind.speed} M/S</h6>
                      <h6 class="my-3">Humidity: ${
                        weatherItem.main.humidity
                      }%</h6>
                  </div>
                  <div class="text-center me-lg-5">
                      <img src="https://openweathermap.org/img/wn/${
                        weatherItem.weather[0].icon
                      }@4x.png" alt="weather icon">
                      <h6>${weatherItem.weather[0].description}</h6>
                  </div>
              </div>`;
  } else {
    return `<div class="col mb-3">
                  <div class="card border-0 bg-secondary text-white">
                      <div class="card-body p-3 text-white">
                          <h5 class="card-title fw-semibold">(${
                            weatherItem.dt_txt.split(" ")[0]
                          })</h5>
                          <img src="https://openweathermap.org/img/wn/${
                            weatherItem.weather[0].icon
                          }.png" alt="weather icon">
                          <h6 class="card-text my-3 mt-3">Temp: ${(
                            weatherItem.main.temp - 273.15
                          ).toFixed(2)}°C</h6>
                          <h6 class="card-text my-3">Wind: ${
                            weatherItem.wind.speed
                          } M/S</h6>
                          <h6 class="card-text my-3">Humidity: ${
                            weatherItem.main.humidity
                          }%</h6>
                      </div>
                  </div>
              </div>`;
  }
};

const getWeatherDetails = (cityName, latitude, longitude) => {
  const WeatherAPIurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API}`;

  fetch(WeatherAPIurl)
  .then((response) => {response.json()})
  .then((data) => {
    const forecastArray = data.list;
    const uniqueForecastDays = new Set();

    const fiveDaysForecast = forecastArray.filter(forecast => {
      const forecastDate = new Date(forecast.dt_txt).getDate();
      if (!uniqueForecastDays.has(forecastDate) && uniqueForecastDays.size < 6) {
          uniqueForecastDays.add(forecastDate);
          return true;
      }
      return false;
  });

  cityInput.value = "";
  
}















const query = function test() {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=51.509865&lon=-0.118092&appid=304e8679bbd07511b4fef6a70463c0f8",
    {
      method: "GET",
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
};

test();
