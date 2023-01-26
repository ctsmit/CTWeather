import { useEffect, useState } from "react"
import { DataBar } from "../components/DataBar"
import { TodayOverview } from "../components/TodayOverview"
import { auth } from "../services/fire"
import { getLocationsArr } from "../services/users-api"
import { getAirPollAPI, getCoordinates, getWeatherAPI } from "../services/weather-api"
import "../styles/main.css"

export const MainWeather = ({ isLoggedIn, currentUser, setCurrentUser, isNewUser }) => {
  const [locations, setLocations] = useState([])
  const [loc, setLocation] = useState()
  const [weatherData, setWeatherData] = useState()
  const [airData, setAirData] = useState()

  const fetchLocations = async () => {
    let user = await auth.currentUser.uid
    let res = await getLocationsArr(user)
    res = res.data[0].locations
    setLocations(res)
    setLocation(res[0])
  }

  const getWeatherData = async () => {
    let coor = await getCoordinates(loc)
    coor = coor.data[0]
    let wData = await getWeatherAPI(coor.lat, coor.lon)
    setWeatherData(wData.data)
    let aData = await getAirPollAPI(coor.lat, coor.lon)
    let aqi = aData.data.list[0].main.aqi
    setAirData(aqi)
  }

  useEffect(() => {
    if (isLoggedIn) {
      console.log("islogged")
      fetchLocations()
    }
  }, [])

  useEffect(() => {
    if (loc) {
      console.log("getting weather")
      getWeatherData()
    }
  }, [loc])

  return (
    airData &&
    loc && (
      <div className="main-container">
        <section className="section1">
          <TodayOverview
            setLocation={setLocation}
            setLocations={setLocations}
            locations={locations}
            currentUser={currentUser}
            weatherData={weatherData}
            airData={airData}
            fetchLocations={fetchLocations}
          />
        </section>
        <section className="section2">
          <DataBar loc={loc} data={weatherData} />
        </section>
      </div>
    )
  )
}
