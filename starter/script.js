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

