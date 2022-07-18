const getWeather = (ev)=>{
    ev.preventDefault();
    let city =  document.getElementById('searchText').value; 
    var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
    var limit = '&limit=5&appid='
    var apiKey = '0123c040b2d049cc913d5be6dd98652e';
    var final = api + city + limit + apiKey;
     fetch(final)
     .then(response => response.json())
     .then(data => {
        console.log(data);
        console.log(final);
     })
}
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('searchBtn').addEventListener('click', getWeather);
});