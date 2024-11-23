function searchCity(city) {
let apiKey = "069ec8tb83a25aad423c8d02ebfb0do6 ";
let apiUrl ='https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric"';
  console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);





