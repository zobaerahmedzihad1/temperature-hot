// weather api key
const API_KEY = `9a640d6191481e15e612c52f4cc41439`;
// search city by name
const search_city = document.getElementById("search_city");
// error handling
const error = document.getElementById("error");
// content
const content = document.getElementById("content");

const searchWeather = () => {
  // search city by name
  const city_name = search_city.value;
  search_city.value = "";

  if (city_name == "") {
    error.style.display = "block";
    content.style.display = "none";
  } else {
    error.style.display = "none";
    content.style.display = "block";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => searchTemperature(data));
  }
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

// set data from api to website
const searchTemperature = (temperature) => {
  // if(temperature == )

  setInnerText("city_name", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("clouds", temperature.weather[0].main);

  //   dynamically set weather icon
  const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const icon = document.getElementById("icon");
  icon.setAttribute("src", url);
};
