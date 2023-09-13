"use strict";

<!--Maps API-->
mapboxgl.accessToken = mapbox_api_token;
const map = new mapboxgl.Map({
    container: 'map', // container 
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-158.07723575059174, 21.332496909270986], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

// Weather API Current
const BASE_CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/3.0/onecall?`

console.log(BASE_CURRENT_WEATHER_URL + `lat=${21.332496909270986}&lon=${-158.07723575059174}&appid=${WEATHER_MAP_KEY}&units=imperial`);

$.get(BASE_CURRENT_WEATHER_URL + `lat=${21.332496909270986}&lon=${-158.07723575059174}&exclude=hourly,current&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => console.log(data))
//
$.get(BASE_CURRENT_WEATHER_URL + `lat=${21.332496909270986}&lon=${-158.07723575059174}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {
    // Day temp:
    console.log("temp day: " + data.daily[0].temp.day.toFixed(0));
    // Night temp:
    console.log("temp night: " + data.daily[0].temp.night.toFixed(0));
    // Description of weather [e.g., 'overcast']
    console.log("description: " + data.daily[0].summary);
    // Day Humidity
    console.log("Humidity: " + data.daily[0].humidity);
    // Day wind spped:
    console.log("wind speed: " + data.daily[0].wind_speed);
    // UV Index:
    console.log("UV Index: " + data.daily[0].uvi);
    // Date
    console.log("Date: " + data.daily[0].dt.toString);



    let html = " "
    // let stopingPoint = 4



    for (let i =0; i < data.daily.length; i++)
    {
     html += ` 

   
        
    <div style="border: 1px solid black">
    <div>${data.daily[i].dt} </div>
    <div>Day/Night Temp: ${data.daily[i].temp.day.toFixed(0)}/${data.daily[i].temp.night.toFixed(0)}</div>
    <div>Today's conditions: ${data.daily[i].summary}</div>
    <div>Today's Humidity: ${data.daily[i].humidity}</div>
    <div>Today's Wind Speed: ${data.daily[i].wind_speed}</div>
    <div>Today's UV Index: ${data.daily[i].uvi}</div>
    </div> `

        $("#weather").html(html);

     if (i === 4) {
         break;
     }
    }

})