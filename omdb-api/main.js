let search = "blade";
const key = "3154fa4f";
const url = "http://www.omdbapi.com/?s=" + search + "&apikey=" + key;

fetch(url)
  .then((response) => console.log(response.json()))
  .catch((error) => console.log(error));
