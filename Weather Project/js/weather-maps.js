"use strict";

<!--Maps API-->
mapboxgl.accessToken = mapbox_api_token;
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map',

    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-98.64798, 29.53525],
    zoom: 10
});

const geocoder = new MapboxGeocoder({
    accessToken: mapbox_api_token,
    mapboxgl: mapboxgl
});
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

const marker = new mapboxgl.Marker({ color: 'blue', rotation: 235,
    draggable: true
})
    .setLngLat([-98.64798, 29.53525])
    .addTo(map);

marker.on('dragend', onDragEnd);

// Add geolocate control to the map.

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
// When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
    })
);


// Weather API Current
const BASE_CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/3.0/onecall?`


//Date Converter
const epochConverter = (epoch)=>{
    return  new Date(epoch * 1000).toString().substring(4, 15)
}

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    // coordinates.innerHTML = `Longitude: ${lngLat.lng}<br/>Latitude: ${lngLat.lat}`;
    // $("#L1").html(`Longitude: ${lngLat.lng}<br/>Latitude: ${lngLat.lat}`);
    // console.log(lngLat);

    let lat = (`${lngLat.lat}`)

    let lng = (`${lngLat.lng}`)

    let location = lat + " " + lng


    console.log(lat, lng)


    $.get(BASE_CURRENT_WEATHER_URL + `lat=` + lat + `&lon=` + lng + `&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {
        console.log(data);
    })


    $.get(BASE_CURRENT_WEATHER_URL + `lat=` + lat + `&lon=` + lng + `&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {
        // // Day temp:
        // console.log("temp day: " + data.daily[0].temp.day.toFixed(0));
        // // Night temp:
        // console.log("temp night: " + data.daily[0].temp.night.toFixed(0));
        // // Description of weather [e.g., 'overcast']
        // console.log("description: " + data.daily[0].weather[0].description);
        // // Day Humidity
        // console.log("Humidity: " + data.daily[0].humidity);
        // // Day wind spped:
        // console.log("wind speed: " + data.daily[0].wind_speed);
        // // UV Index:
        // console.log("UV Index: " + data.daily[0].uvi);
        // // Date
        // // console.log("Date: " + data.daily[0].dt.toString);
        // console.log("name: " + data.alerts[0].sender_name);

        // let name1 = data.alerts[0].sender_name


        let html = " "
        // let stopingPoint = 4

        for (let i = 0; i < data.daily.length; i++) {
            html += `

    <div style="border: 1px solid black">
    <div>${epochConverter(data.daily[i].dt)} </div>
    <hr>
    <div>Day/Night Temp: ${data.daily[i].temp.day.toFixed(0)}/${data.daily[i].temp.night.toFixed(0)}</div>
    <hr>
    <div>Today's conditions: ${data.daily[i].weather[0].description}</div>
    <hr>
    <div>Today's Humidity: ${data.daily[i].humidity}</div>
    <hr>
    <div>Today's Wind Speed: ${data.daily[i].wind_speed}</div>
    <hr>
    <div>Today's UV Index: ${data.daily[i].uvi}</div>
    </div> `

            $("#weather").html(html);


            $("#h").html("Current Location: " + location);

            if (i === 4) {
                break;
            }
        }

    })
}









