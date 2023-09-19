"use strict";

import keys from "./keys.js";

//// Maps API
mapboxgl.accessToken = keys.mapbox_api_token;
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map',

    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-98.64798, 29.53525],
    zoom: 8
});

const geocoder = new MapboxGeocoder({
    accessToken: keys.mapbox_api_token,
    // mapboxgl: mapboxgl

});

const marker = new mapboxgl.Marker({ color: 'blue', rotation: 235,
    draggable: true
})
    .setLngLat([-98.64798, 29.53525])
    .addTo(map);

marker.on('dragend', onDragEnd);

map.addControl(
    geocoder.on(`result`,  (results) => {
        marker.setLngLat(results.result.center)
        marker.addTo(map)
        onDragEnd()
    })
)

window.addEventListener("load", (event) => {
    onDragEnd()
});


// Weather API Current
const BASE_CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/3.0/onecall?`

//Date Converter
const epochConverter = (epoch)=>{
    return  new Date(epoch * 1000).toString().substring(4, 15)
}

//Location Conv

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';

    let lat = (`${lngLat.lat}`)

    let lng = (`${lngLat.lng}`)

    let location = lat + " " + lng

    console.log(lat, lng)

    $.get(BASE_CURRENT_WEATHER_URL + `lat=` + lat + `&lon=` + lng + `&appid=${keys.WEATHER_MAP_KEY}&units=imperial`).done((data) => {
        console.log(data);
    })

    $.get(BASE_CURRENT_WEATHER_URL + `lat=` + lat + `&lon=` + lng + `&appid=${keys.WEATHER_MAP_KEY}&units=imperial`).done((data) => {

        let html = " "
        // let stopingPoint = 4

        for (let i = 0; i < data.daily.length; i++) {
            html += `
    
    <div style="border: 2px solid black">
    <div>${epochConverter(data.daily[i].dt)} </div>
    <hr>
    <div>Day/Night Temp: ${data.daily[i].temp.day.toFixed(0)}<span>&#8457;</span>/${data.daily[i].temp.night.toFixed(0)}<span>&#8457;</span></div>
    <hr>
    <div>Today's conditions: ${data.daily[i].weather[0].description}</div>
    <img src="${cloudCoverage(data.daily[i].weather[0].description)}">
    <hr>
    <div>Today's Humidity: ${data.daily[i].humidity}</div>
    <hr>
    <div>Today's Wind Speed: ${data.daily[i].wind_speed}</div>
    <hr>
    <div>Today's UV Index: ${data.daily[i].uvi}</div>
    </div> `
            $("#weather").html(html);

            if (i === 4) {
                break;
            }
        }
    })

    function reverseGeocode(coordinates, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
            })
            // to get all the data from the request, comment out the following three lines...
            .then(function(data) {
                return data.features[0].place_name;
            });
    }
    reverseGeocode({lat, lng}, keys.mapbox_api_token).then(function(results) {
        console.log(results)

    $("#h").html("Current Location: " + results);
})
}

// Icons

let clearsky = `https://openweathermap.org/img/wn/01d.png`
let fewclouds = `https://openweathermap.org/img/wn/02d.png`
let scatteredclouds = `https://openweathermap.org/img/wn/03d.png`
let brokenclouds = `https://openweathermap.org/img/wn/04d.png`
let showerrain = `https://openweathermap.org/img/wn/09d.png`
let rain = `https://openweathermap.org/img/wn/10d.png`
let thunderstorm = `https://openweathermap.org/img/wn/11d.png`
let snow = `https://openweathermap.org/img/wn/13d.png`
let mist = `https://openweathermap.org/img/wn/50d.png`

function cloudCoverage(x) {
    if (x === `clear sky`)
    {
        return  clearsky
    }
    else if (x === `scattered clouds`)
    {
        return scatteredclouds
    }
    else if (x === `few clouds`)
    {
        return fewclouds
    }
    else if (x === `broken clouds`)
    {
        return brokenclouds
    }
    else if (x === `shower rain` || `light rain`)
    {
        return showerrain
    }
    else if (x === `rain`)
    {
        return rain
    }
    else if (x === `thunderstorm`)
    {
        return thunderstorm
    }
    else if (x === `snow`)
    {
        return snow
    }
    else if (x === `mist`)
    {
        return mist
    }
}










