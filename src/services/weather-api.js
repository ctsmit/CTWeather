import axios from "axios"
const APIKey = process.env.REACT_APP_OW_API_KEY

export const getCoordinates = async (searchTerm) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=sparta,nc,USA&limit=5&appid=bbc418a4d68c4e0909edc8c1c86103d7`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getWeatherAPI = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
