import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { DataBar } from "../components/DataBar"
import { TodayOverview } from "../components/TodayOverview"
import { getLocation } from "../services/users-api"
import { getAirPollAPI, getCoordinates, getWeatherAPI } from "../services/weather-api"

export const MainWeather = () => {
  const loc = useLocation().state.locations[0]

  const [weatherData, setWeatherData] = useState()
  const [airData, setAirData] = useState()

  const getWeatherData = async () => {
    let coor = await getCoordinates(loc)
    coor = coor.data[0]
    let wData = await getWeatherAPI(coor.lat, coor.lon)
    setWeatherData(wData.data)
    let aData = await getAirPollAPI(coor.lat,coor.lon)
    let aqi = aData.data.list[0].main.aqi
    setAirData(aqi)
  }
  

  useEffect(() => {
    getWeatherData()
  }, [])

  return (
    <>
      {(weatherData && airData) && (
        <>
          <section>
            <TodayOverview weatherData={weatherData} airData={airData} />
          </section>
          <section>
            <DataBar data={weatherData} />
          </section>
        </>
      )}
    </>
  )
}
