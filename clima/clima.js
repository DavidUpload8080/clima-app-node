const axios = require('axios');

const getClima = async(lan, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${lng}&appid=ee42ceb2b13ea5e6f16a5e8a6cd39ebe&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}