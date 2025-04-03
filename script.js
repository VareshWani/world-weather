const apiKey = "c43e4f8cdb50d74282ec7df04b381d8c";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox=document.querySelector(".search input");//input box

const searchBtn=document.querySelector(".search button");//search button

const weatherIcon=document.querySelector(".weather-icon");//Weather image

async function checkWeather(city){
    const response=await fetch(apiUrl + city +  `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data= await response.json();
        console.log(data);
    
        //add city name
        document.querySelector(".city").innerHTML=data.name;
    
        //Add Temp
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    
        //Add humidity
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    
        //Add wind
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
    
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Humidity") {
            weatherIcon.src = "images/humidity.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain2.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        } else if (data.weather[0].main == "Wind") {
            weatherIcon.src = "images/wind.png";
        }
        else if(data.weather[0].main =="Haze"){
            weatherIcon.src="images/haze.png";
        }
        else if(data.weather[0].main =="Smoke"){
            weatherIcon.src="images/smoke.png";
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    
        console.log(data.weather[0].main);
       
    }
}
    

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        checkWeather(searchBox.value);
    }
})

