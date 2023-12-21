import axios from "axios"

const API_KEY = "059add6d6d6b483da32151454231512"
const CITY = "Almaty"
const BASE_URL = "http://api.weatherapi.com/v1/current.json"

export default {
  getWeather() {
    const url = `${BASE_URL}?key=${API_KEY}&q=${CITY}&aqi=no`
    return axios.get(url)
  }
}

