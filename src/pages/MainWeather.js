/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { DataBar } from "../components/DataBar"
import { TodayOverview } from "../components/TodayOverview"
import { auth } from "../services/fire"
import { getLocation } from "../services/users-api"
import { getAirPollAPI, getCoordinates, getWeatherAPI } from "../services/weather-api"

export const MainWeather = ({ isLoggedIn, currentUser }) => {
  const loc = useLocation().state
  console.log(loc);
  const [user, setUser] = useState()

  console.log(isLoggedIn, currentUser)

  useEffect(() => {
    const loggedIn = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        // redirect to login if not logged in
      }
    })
    return () => loggedIn()
  }, [])

  const [weatherData, setWeatherData] = useState()
  const [airData, setAirData] = useState()

  const getWeatherData = async () => {
    let coor = await getCoordinates(loc)
    console.log(coor);
    coor = coor.data[0]
    let wData = await getWeatherAPI(coor.lat, coor.lon)
    setWeatherData(wData.data)
    let aData = await getAirPollAPI(coor.lat, coor.lon)
    let aqi = aData.data.list[0].main.aqi
    setAirData(aqi)
  }
 

  useEffect(() => {
    getWeatherData()
  }, [loc])

  return (
    airData && (
      <>
        <section>
          <TodayOverview weatherData={weatherData} airData={airData} />
        </section>
        <section>
          <DataBar data={weatherData} />
        </section>
      </>
    )
  )
}
