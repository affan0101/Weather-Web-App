const apiKey="fbcf0d08d86c6bf68e005bfa38720387";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".button2");
const weatherIcon=document.querySelector(".weather img");

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".col1 h3").innerHTML = data.main.humidity + "%  Humidity";
    document.querySelector(".col2 h3").innerHTML = data.wind.speed + " km/hr  Wind Speed";
    document.querySelector(".col3 h3").innerHTML = data.main.pressure + " atm Pressure";
    document.querySelector(".col4 h3").innerHTML = data.main.grnd_level + " hPa Sea level";



    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }

    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }

    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png";
    }



    
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})