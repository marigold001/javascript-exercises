const ul = document.createElement("ul");
document.body.appendChild(ul);

const input = document.querySelector("#search--results");
const key = "3154fa4f";
input.addEventListener("change", getResults);
const type = document.querySelector("#search--type");
type.addEventListener("change", getResults);


async function getResults() {
  const url = "http://www.omdbapi.com/?s=" + input.value + "&type=" + type.value + "&apikey=" + key;
  await fetch(url)
  .then(response => response.json())
  .then(data => showResults(data))
  .catch(error => console.log(error));
}

function showResults(data) {
  ul.innerHTML = "";
  const results = data.Search;
  for(const item in results) {
    const result = results[item];
    const poster = document.createElement("img");
    poster.src = result.Poster;
    const title = document.createElement("li");
    const titleText = document.createTextNode("Title: " + result.Title);
    const year = document.createElement("li");
    const yearText = document.createTextNode("Year: " + result.Year);
    title.setAttribute("class", "results--title");
    year.setAttribute("class", "results--year");
    title.appendChild(titleText);
    title.appendChild(document.createElement("br"));
    year.appendChild(yearText);
    ul.appendChild(poster);
    ul.appendChild(title);
    ul.appendChild(year);
  }
}
