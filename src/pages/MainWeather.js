import { useEffect, useState } from "react"
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom"
import { DataBar } from "../components/DataBar"
import { TodayOverview } from "../components/TodayOverview"
import { getLocation } from "../services/users-api"
import { getAirPollAPI, getCoordinates, getWeatherAPI } from "../services/weather-api"

let location 
export const getWeatherData = async () => {
    let coor = await getCoordinates(location)
    coor = coor.data[0]
    let wData = await getWeatherAPI(coor.lat, coor.lon)
    // setWeatherData(wData.data)
    let aData = await getAirPollAPI(coor.lat,coor.lon)
    let aqi = aData.data.list[0].main.aqi
    // setAirData(aqi)
  return { wData, aqi }
}
  
export const MainWeather = () => {
  const loc = useLocation().state.locations[0]
  location = loc
  const data = useLoaderData()
  console.log(data);

  // const [weatherData, setWeatherData] = useState()
  // const [airData, setAirData] = useState()

  
  

  // useEffect(() => {
  //   getWeatherData()
  // }, [])

  return (
    <>
      {/* {(weatherData && airData) && ( */}
        <>
          <section>
            <TodayOverview /* weatherData={weatherData} airData={airData}  *//>
          </section>
          <section>
            <DataBar /* data={weatherData}  *//>
          </section>
        </>
      )
    </>
  )
}
