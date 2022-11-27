const api = "3e7f2bba1efd1111099a46602d3864be6a5048fa5c1783d35d3ceeb07281986e";
const url =
  " https://api.ambeedata.com/weather/forecast/by-lat-lng?lat=44&lng=20";

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

const weatherWrapper = document.querySelector("div#weather--wrapper--2")

function showWeatherInfo(json) {
  const results = json.data.forecast[0];
  
  let image = new Image(100, 100);
  image.src = "https://assetambee.s3-us-west-2.amazonaws.com/weatherIcons/PNG/"+ results.icon +".png";
  weatherWrapper.appendChild(image);
  
  const temperature = document.createElement("span");
  const temperatureText = document.createTextNode(results.temperature + "\u2109");
  temperature.appendChild(temperatureText);
  weatherWrapper.appendChild(temperature);
  
  const weatherDetails = document.createElement("div");
  weatherDetails.setAttribute('id', 'weather--details');
  weatherWrapper.appendChild(weatherDetails);

  const precipitation = document.createElement("span");
  const precipitationText = document.createTextNode("Precipitation: " + results.precipIntensity);
  precipitation.appendChild(precipitationText);
  weatherDetails.appendChild(precipitation);

  const humidity = document.createElement("span");
  const humidityText = document.createTextNode("Humidity: " + results.humidity);
  humidity.appendChild(humidityText);
  weatherDetails.appendChild(humidity);

  const wind = document.createElement("span");
  const windText = document.createTextNode("Wind: " + results.windSpeed + " mph");
  wind.appendChild(windText);
  weatherDetails.appendChild(wind);
}
