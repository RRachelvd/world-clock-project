function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");

  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "hh:mm:ss[<small>]A[</small>]"
    )}`;
  }

  // Paris

  let parisElement = document.querySelector("#paris");

  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = `${parisTime.format(
      "hh:mm:ss[<small>]A[</small>]"
    )}`;
  }

  // Sydney

  let sydneyElement = document.querySelector("#sydney");

  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = `${sydneyTime.format(
      "hh:mm:ss[<small>]A[</small>]"
    )}`;
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }

  let cityName = cityTimezone.replace("_", " ").split("/")[1];

  if (cityName === "Argentina") {
    cityName = "Buenos Aires";
  }
  let cityDate = moment().tz(cityTimezone).format("MMMM Do YYYY");
  let cityTime = moment()
    .tz(cityTimezone)
    .format(`hh:mm:ss[<small>]A[</small>]`);
  let selectedCityElement = document.querySelector("#selected-city");

  selectedCityElement.innerHTML = ` 
  <div class="city">
    <div>
      <h2 class="city-option">${cityName}</h2>
      <div class="date">${cityDate}</div>
    </div>
    <div>
      <div class="time">${cityTime}</div>
    </div>
          `;
  setTimeout(() => {
    updateCity(event);
  }, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", updateCity);
