const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "510b280478msh71dc44f323f25edp143877jsn4f528e9c3ac6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

// Function to get weather data for a specific city

const getWeather = (city) => {
  const capitalizedCity = city.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
  cityName.innerHTML = capitalizedCity;

  document.getElementById("weather-card-container").style.display = "block";
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to fetch weather data. Please try again.");
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      // Update weather data in the HTML elements

      cloud_pct.innerHTML = response.cloud_pct;
      cloud_pct2.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      feels_like2.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = formatTime(response.sunrise);
      sunset.innerHTML = formatTime(response.sunset);

      // Update the theme based on the temperature
      const temperature = parseFloat(response.temp);
      const cloudPercentage = parseInt(response.cloud_pct);
      if (temperature > 27 && cloudPercentage <= 90) {
        document.body.style.backgroundImage = "url('summer.jpg')";
      } else if (temperature < 15 && temperature > 0 && cloudPercentage <= 90) {
        document.body.style.backgroundImage = "url('winter.jpg')";
      } else if (temperature <= 0) {
        document.body.style.backgroundImage = "url('winter.jpg')";
      } else if (
        temperature >= 15 &&
        temperature <= 35 &&
        cloudPercentage <= 90
      ) {
        document.body.style.backgroundImage = "url('spring.jpg')";
      } else if (cloudPercentage > 90) {
        document.body.style.backgroundImage = "url('rain.jpg')";
      }
    })
    .catch((err) => {
      console.error(err);
      alert("An error occurred while fetching weather data. Please try again.");
    });
};
// Function to format a timestamp into a time string

function formatTime(timestamp) {
  const time = new Date(timestamp * 1000);
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  return hours + ":" + minutes;
}

const cityName = document.getElementById("cityName");

// Event listener for the submit button

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const searchCity = city.value;
  getWeather(searchCity);
});
// Default city and initial weather display

const defaultCity = "Delhi";
getWeather(defaultCity);
// Array of cities to fetch weather data for

const cities = ["Delhi", "Bangalore", "Pune", "Mumbai", "Jaipur", "Chennai"];
// Fetch weather data for each city in the array
getCitiesWeather(cities);
// Function to fetch weather data for multiple cities

function getCitiesWeather(cities) {
  cities.forEach((city) => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Unable to fetch weather data for ${city}. Please try again.`
          );
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        // Update weather data in the corresponding HTML row

        const row = document.getElementById(city);
        if (row) {
          row.innerHTML = `
            <th scope="row" class="text-start">${city}</th>
            <td>${response.temp}°C</td>
            <td>${response.min_temp}°C</td>
            <td>${response.max_temp}°C</td>
            <td>${response.feels_like}°C</td>
            <td>${response.humidity}%</td>
            <td>${response.cloud_pct}%</td>
            <td>${formatTime(response.sunrise)} IST</td>
            <td>${formatTime(response.sunset)} IST</td>
            <td>${response.wind_degrees}°</td>
            <td>${response.wind_speed} m/s</td>
          `;
        }
      })
      .catch((err) => {
        console.error(err);
        alert(
          `An error occurred while fetching weather data for ${city}. Please try again.`
        );
      });
  });
}

// Function to search for a specific city

function searchCity() {
  var cityInput = document.getElementById("city").value;
  getWeather(cityInput);
}

// Dark mode toggle

const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeIcon = document.querySelector(".dark-mode-icon i");

darkModeToggle.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark-mode");
    darkModeIcon.classList.remove("fa-moon");
    darkModeIcon.classList.add("fa-sun");
  } else {
    document.body.classList.remove("dark-mode");
    darkModeIcon.classList.remove("fa-sun");
    darkModeIcon.classList.add("fa-moon");
  }
});
