import axios from "axios"
const APIKey = process.env.REACT_APP_OW_API_KEY

export const getCoordinates = (searchTerm) => {
  let response = axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm.city},${searchTerm.state},USA&limit=1&appid=bbc418a4d68c4e0909edc8c1c86103d7`
  )
  return response
}

export const getWeatherAPI = (lat, lon) => {
  const response = axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`
  )
  return response
}

export const getAirPollAPI = (lat, lon) => {
  const response = axios.get(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APIKey}`
  )
  return response
}


