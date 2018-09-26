const axios = require('axios');

const getClima = async(lat, lng) => {

    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=48946d81e34870154d71e9839e7f4974`)

    return clima.data.main.tem;
}

module.exports = {
    getClima
}