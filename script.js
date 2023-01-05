let apiKey = "52d344b3c988f92cb6194dd17403a6c8"
var textBox = document.getElementById('inputBox');
var temp, ww, feel, hum, pres, wind;

async function requestData() {
    if (textBox.value != '') {
        shoudlRender=true;
        var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textBox.value}&appid=${apiKey}`);
        var ans = await response.json();
        if (response.ok) {
            temp = ans.main.temp;
            ww = ans.weather['0'].main;
            feel = ans.main.feels_like;
            hum = ans.main.humidity;
            pres = ans.main.pressure;
            wind = ans.wind.speed;

            temp = Math.round((temp - 274.15) * 100) / 100;
            feel = Math.round((feel - 274.15) * 100) / 100;

            document.querySelector('.weather_word').innerText = ww;
            document.querySelector('.city_name').innerText = textBox.value;
            document.querySelector('.weather_temp').innerText = `${temp}` + "°C";
            document.querySelector('#fLTemp').innerText = `${feel}` + "°C";
            document.querySelector('#humid').innerText = `${hum}%`;
            document.querySelector('#pres').innerText = `${pres} hPa`;
            document.querySelector('#wind').innerText = `${wind} m/s`;
        }
        else{
            alert("We do not have data on this city.");
        }
    }
    else {
        alert("Please Choose a City");
    }
}