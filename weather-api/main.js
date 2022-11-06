const url =
  " https://api.ambeedata.com/weather/forecast/by-lat-lng?lat=44&lng=20";
const api = "3e7f2bba1efd1111099a46602d3864be6a5048fa5c1783d35d3ceeb07281986e";

async function getWeatherInfo(url = "", data = {}) {
  let response = await fetch(url, data);
  if (response.ok) {
    let json = await response.json();
    return showWeatherInfo(json);
  } else {
    alert("HTTP Error: " + response.status);
  }
}

getWeatherInfo(url, {
  method: "GET",
  headers: {
    "x-api-key": api,
    "Content-type": "application/json",
  },
});

const temperature = document.querySelector("#weather--temperature");
const weatherDetails = document.querySelectorAll("#weather--details span");

function showWeatherInfo(json) {
  const results = json.data.forecast[0];
  return [
    (temperature.innerHTML = results.temperature + "&#8457;"),
    (weatherDetails[0].innerHTML = "Precipitation: " + results.precipIntensity),
    (weatherDetails[1].innerHTML = "Humidity: " + results.humidity),
    (weatherDetails[2].innerHTML = "Wind: " + results.windSpeed + "mph"),
  ];
}