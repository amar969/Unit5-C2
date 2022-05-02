async function main(){
    let data = await getData()
    displayData(data);
}


async function getData(){
    let sInput = document.getElementById("search-inp").value;
    
    let API_KEY = "09cfa5ea3bfe583999b646646dc2a656";
    let url = "https://api.openweathermap.org/data/2.5/weather";

    let res = await fetch(`${url}?q=${sInput}&appid=${API_KEY}&units=metric`)
    let data = await res.json()
    console.log(data);
    return data;

}

let searchResult = document.getElementById("search-result");
function displayData(weatherData){
    searchResult.innerHTML = ""; 

    // icon
    let icon = document.createElement("img");
    let weatherIcon = weatherData.weather[0].icon;
    icon.src = `http://openweathermap.org/img/wn/${weatherIcon}.png`

    // temp
    let temp = document.createElement("h1");
    temp.innerHTML = weatherData.main.temp + "°C";

    // City 
    let cityname = document.createElement("h5");
    cityname.innerHTML = weatherData.name + " " + weatherData.sys.country;

    // pressure 
    let pressure = document.createElement("p");
    pressure.innerHTML = "Presure:- " + weatherData.main.pressure;

    //humidity
    let humidity = document.createElement("p");
    humidity.innerHTML = "Humidity:- " + weatherData.main.humidity;

    //sunrise
    let sunrise = document.createElement("p");
    sunrise.innerHTML = "Sunrise at:- " + weatherData.sys.sunrise;

    //sunset
    let sunset = document.createElement("p");
    sunset.innerHTML = "Sunset:- " + weatherData.sys.sunset;

    //windspeed 
    let windspeed = document.createElement("p");
    windspeed.innerHTML = "Wind Speed:- " + weatherData.wind.speed; 

    // weather Description 
    let weatherDescription = document.createElement("p");
    weatherDescription.innerHTML = weatherData.weather[0].description;

    // append
    searchResult.append(icon, temp, cityname, pressure, humidity, sunrise, sunset, windspeed, weatherDescription);
}