const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "510b280478msh71dc44f323f25edp143877jsn4f528e9c3ac6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
    const capitalizedCity = city.replace(/\b\w/g, function(match) {
        return match.toUpperCase();
      });
      cityName.innerHTML = capitalizedCity;
  document.getElementById('weather-card-container').style.display = 'block';
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to fetch weather data. Please try again.");
      }
      return response.json();
    })
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      cloud_pct2.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      temp3.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = formatTime(response.sunrise);
      sunset.innerHTML = formatTime(response.sunset);
    })
    .catch((err) => {
      console.error(err);
      alert("An error occurred while fetching weather data. Please try again.");
    });
};

function formatTime(timestamp) {
  const time = new Date(timestamp * 1000);
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  return hours + ":" + minutes;
}

const submit = document.getElementById("submit");
const city = document.getElementById("city");
const cityName = document.getElementById("cityName");
const cloud_pct = document.getElementById("cloud_pct");
const cloud_pct2 = document.getElementById("cloud_pct2");
const temp = document.getElementById("temp");
const temp2 = document.getElementById("temp2");
const temp3 = document.getElementById("temp3");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const wind_speed = document.getElementById("wind_speed");
const wind_speed2 = document.getElementById("wind_speed2");
const wind_degrees = document.getElementById("wind_degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const searchCity = city.value;
  getWeather(searchCity);
});

// const defaultCity = "Delhi";
// getWeather(defaultCity);

const cities = ["Delhi", "Bangalore", "Pune", "Mumbai", "Jaipur", "Chennai"];
getCitiesWeather(cities);

function getCitiesWeather(cities) {
  cities.forEach((city) => {
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to fetch weather data for ${city}. Please try again.`);
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
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
        alert(`An error occurred while fetching weather data for ${city}. Please try again.`);
      });
  });
}

function searchCity() {
    var cityInput = document.getElementById('city').value;
    getWeather(cityInput);
  }

  
  


  const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.querySelector('.dark-mode-icon i');

darkModeToggle.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
  } else {
    document.body.classList.remove('dark-mode');
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
  }
});