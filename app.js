const API_KEY = `9a640d6191481e15e612c52f4cc41439`;

const searchWeather = () => {
  const city_name = document.getElementById("search_city").value;

  console.log(city_name);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => searchTemperature(data));
};


