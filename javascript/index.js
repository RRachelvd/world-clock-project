// Los Angeles

function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");

  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "h:mm:ss[<small>]A[</small>]"
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
      "h:mm:ss[<small>]A[</small>]"
    )}`;
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }

  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimezone).format("MMMM Do YYYY");
  let cityTime = moment()
    .tz(cityTimezone)
    .format(`h:mm:ss[<small>]A[</small>]`);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML += ` 
  <div class="city">
    <div>
      <h2 class="city-option">${cityName}</h2>
      <div class="date">${cityDate}</div>
    </div>
    <div>
      <div class="time">${cityTime}</div>
    </div>
          `;
}

updateTime();
setInterval(updateTime, 1000);

let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", updateCity);
