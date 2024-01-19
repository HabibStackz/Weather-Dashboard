# Weather Dashboard

 ## Table of Contents

- [Table Of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Local Storage](#local-storage)
- [License](#license)
- [Credits](#credits)
- [Author](#author)
## Overview

The Weather App is a web application that allows users to check the current weather conditions and a 5-day forecast for a specific city. It leverages the OpenWeatherMap API to retrieve real-time weather data and display it in a user-friendly interface.

## Features

- **Current Weather Data:** Get up-to-date information on temperature, wind speed, and humidity for a chosen city.
- **5-Day Weather Forecast:** View a 5-day forecast, including temperature, wind speed, and humidity, to plan ahead.
- **Search History:** Easily access previously searched cities with the search history feature.

## Usage
1. Enter a city name in the search bar and submit the form.
2. View current weather data and a 5-day forecast.
3. Click on a city in the search history to quickly retrieve weather information.

### Prerequisites

Before running the application, make sure you have the following:

- OpenWeatherMap API Key: Sign up on the [OpenWeatherMap website](https://openweathermap.org/) to obtain an API key.

## Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:HabibStackz/Weather-Dashboard.git
    ```

2. Open `index.html` in your preferred web browser.

### Configuration

Replace the placeholder API key in the `apiKey` variable with your OpenWeatherMap API key:

```javascript
const apiKey = "your-api-key";
```


## Local Storage
The app uses local storage to store and retrieve weather and forecast data for a seamless experience on page reload.

## License
This project is licensed under the MIT License

## Credits
- OpenWeatherMap API
- DayJS Library

## Author
Habib Hakeem
