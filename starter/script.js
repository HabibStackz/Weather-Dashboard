// const cityInput = document.querySelector(".form-input");
// const searchButton = document.querySelector(".search-button");

// const getCityCoordinates = () => {
//     const cityName = cityInput.value.trim();
//     event.preventDefault()
//     if(!cityName) return;

//     console.log(cityName);
// }


// searchButton.addEventListener("click", getCityCoordinates);

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

