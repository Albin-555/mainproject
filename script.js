//const API_KEY="a3255748ed52c6a0dae7ca1a5709107d";
// const url='https://api.openweathermap.org/data/2.5/weather?&units=metric&q='+city+'&appid=b0331a3f5093dd7ae55d070efc58f018';
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".wthr-img");
const forecast = document.querySelector(".forecast-container");

async function checkWeather(city){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q='+city+'&appid=b0331a3f5093dd7ae55d070efc58f018');
    var data = await response.json();

    console.log(data);

   // Date convertion
    function convertTimestampToDate(timestamp) {
        
        const timestampValue = parseInt(timestamp.split(':')[1]);        
        const date = new Date(timestampValue * 1000); 
       
        const formattedDate = date.toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
      
        return {
          formattedDate,
        };
      }      
       const timestamp = "dt:"+data.dt;
      const { formattedDate } = convertTimestampToDate(timestamp);
    // End of date convertion


    document.querySelector(".date").innerHTML=formattedDate;
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".hum").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/hr";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    } 

  
 }
 searchBtn.addEventListener("click",()=>{
 checkWeather(searchBox.value);
 })