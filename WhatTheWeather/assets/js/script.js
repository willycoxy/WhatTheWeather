// below vars give me the api, parameters and api key to get lon and lat from city search

var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var limit = '&limit=5&units=metric&appid='
var apiKey = '0123c040b2d049cc913d5be6dd98652e';

const getWeather = (ev)=>{
    ev.preventDefault();
    let city =  document.getElementById('searchText').value; 
    var final = api + city + limit + apiKey;
    // fetches lon and lat from city search. 
     fetch(final)
     .then(response => response.json())
     .then(data => {
        var oneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&exclude=hourly+minutely&appid=` + apiKey
        document.getElementById('title').textContent = data.name + " " + moment().format('L')
            fetch(oneCall)
            .then(response => response.json())
            .then(data => {
                console.log(oneCall)
                // displays current weather
                var iconcode = data.current.weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    document.getElementById('wicon').src = iconurl;
                    document.getElementById('temp').textContent = `Temp: ${data.current.temp} °C`
                    document.getElementById('wind').textContent = `Wind: ${data.current.wind_speed} MPH`
                    document.getElementById('humid').textContent = `Humidity: ${data.current.humidity} %`
                    document.getElementById('uv').textContent = `UV Index: ${data.current.uvi}`
                    var futureIconCode1 = data.daily[0].weather[0].icon;
                    var futureIconUrl1 = "http://openweathermap.org/img/w/" + futureIconCode1 + ".png";

                    var futureIconCode2 = data.daily[1].weather[0].icon;
                    var futureIconUrl2 = "http://openweathermap.org/img/w/" + futureIconCode2 + ".png";

                    var futureIconCode3 = data.daily[2].weather[0].icon;
                    var futureIconUrl3 = "http://openweathermap.org/img/w/" + futureIconCode3 + ".png";

                    var futureIconCode4 = data.daily[3].weather[0].icon;
                    var futureIconUrl4 = "http://openweathermap.org/img/w/" + futureIconCode4 + ".png";

                    var futureIconCode5 = data.daily[4].weather[0].icon;
                    var futureIconUrl5 = "http://openweathermap.org/img/w/" + futureIconCode5 + ".png";

                    // uploads data into the page 
                    document.getElementById("titleDayOne").textContent = moment().add(1,"d").format("M/D/YYYY");
                    document.getElementById("titleDayTwo").textContent = moment().add(2,"d").format("M/D/YYYY");
                    document.getElementById("titleDayThree").textContent = moment().add(3,"d").format("M/D/YYYY");
                    document.getElementById("titleDayFour").textContent = moment().add(4,"d").format("M/D/YYYY");
                    document.getElementById("titleDayFive").textContent = moment().add(5,"d").format("M/D/YYYY");
                    
                    document.getElementById('temp1').textContent = `Temp: ${data.daily[0].temp.day} °C`
                    document.getElementById('temp2').textContent = `Temp: ${data.daily[1].temp.day} °C`
                    document.getElementById('temp3').textContent = `Temp: ${data.daily[2].temp.day} °C`
                    document.getElementById('temp4').textContent = `Temp: ${data.daily[3].temp.day} °C`
                    document.getElementById('temp5').textContent = `Temp: ${data.daily[4].temp.day} °C`

                    document.getElementById('wind1').textContent = `Wind: ${data.daily[0].wind_speed} MPH`
                    document.getElementById('wind2').textContent = `Wind: ${data.daily[1].wind_speed} MPH`
                    document.getElementById('wind3').textContent = `Wind: ${data.daily[2].wind_speed} MPH`
                    document.getElementById('wind4').textContent = `Wind: ${data.daily[3].wind_speed} MPH`
                    document.getElementById('wind5').textContent = `Wind: ${data.daily[4].wind_speed} MPH`

                    document.getElementById('humid1').textContent = `Humidity: ${data.daily[0].humidity} %`
                    document.getElementById('humid2').textContent = `Humidity: ${data.daily[1].humidity} %`
                    document.getElementById('humid3').textContent = `Humidity: ${data.daily[2].humidity} %`
                    document.getElementById('humid4').textContent = `Humidity: ${data.daily[3].humidity} %`
                    document.getElementById('humid5').textContent = `Humidity: ${data.daily[4].humidity} %`

                    document.getElementById('wicon1').src = futureIconUrl1;
                    document.getElementById('wicon2').src = futureIconUrl2;
                    document.getElementById('wicon3').src = futureIconUrl3;
                    document.getElementById('wicon4').src = futureIconUrl4;
                    document.getElementById('wicon5').src = futureIconUrl5;


                    

            })
     })
}
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('searchBtn').addEventListener('click', getWeather);
});


