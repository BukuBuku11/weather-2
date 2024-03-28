const APIkey = "dc3e48303089780f3493857871de307c";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

// Weather terms
const Location = document.querySelector(".location");
const Week = document.querySelector(".week");
const Temperature = document.querySelector(".temp");
const maxTemp = document.querySelector(".max-temp");
const minTemp = document.querySelector(".min-temp");
const Humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const Pressure = document.querySelector(".pressure");
const Visibility = document.querySelector(".visibility");

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const weatherImage = document.querySelector(".weather-img");
const weatherCont = document.querySelector("#weather-container");

async function checkWeather(city) {
  const res = await fetch(APIurl + `&q=${city}` + `&appid=${APIkey}`);
  const data = await res.json();
  console.log(data);

  if (res.status === 404) {
    alert("Enter valid city name!");
  }

  Temperature.innerHTML = Math.round(data.main.temp) + "℃";
  maxTemp.innerHTML = "Max: " + data.main.temp_max + ", ";
  minTemp.innerHTML = "Min: " + data.main.temp_min;
  Humidity.innerHTML = data.main.humidity;
  windSpeed.innerHTML = data.wind.speed + " Kmph";
  Pressure.innerHTML = data.main.pressure + " atm";
  Visibility.innerHTML = data.visibility + " metres";

  switch (data.weather[0].main) {
    case "Clear":
      weatherImage.src = "/animated/day.svg";
      break;
    case "Clouds":
      weatherImage.src = "/animated/cloudy.svg";
      break;
    case "Snowy":
      weatherImage.src = "/animated/snowy-1.svg";
      break;
    case "Rain":
      weatherImage.src = "/animated/rainy-6.svg";
      break;
    case "Haze":
      weatherImage.src = "/animated/cloudy-night-2.svg";
      break;
    case "Thunderstorm":
      weatherImage.src = "/animated/thunder.svg";
      break;
  }

  const date = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayOfWeek = daysOfWeek[date.getDay()];
  Week.innerHTML = currentDayOfWeek;
}

// Event Listeners
searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
