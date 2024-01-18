const cityInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")
const currentWeatherDiv = document.getElementById("today")
const fiveDaysForecastDiv= document.getElementById("forecast")


const API = "304e8679bbd07511b4fef6a70463c0f8"



const query = 

function test () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=51.509865&lon=-0.118092&appid=304e8679bbd07511b4fef6a70463c0f8", {
        "method": "GET",
        })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
}

test()

