const axios = require("axios");
require('dotenv').config();
const apikey = process.env.WEATHER_API
const zip = "60659";
const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${zip}`

const getWeather = async () => {
    console.log(apikey)
    try {
        let res = await axios.get(url);
        let data = res.data;
        let returnString;
        if (data) returnString = `Location: ${data.location.name}, ${data.location.region}, ${data.location.country} \n
        Time: ${data.location.localtime}

        ====Current Temperature==== \n

         ==>${data.current.condition.text}<==

             Celcius: ${data.current.temp_c} \n
             Farenheit: ${data.current.temp_f} \n
            `
        ;
        console.clear();
        if (returnString) console.log(returnString);

    } catch (err) {
        console.error(err);
    }
}


getWeather();