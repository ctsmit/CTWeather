import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { getLocation } from "../services/users-api"
import { getCoordinates, getWeatherAPI } from "../services/weather-api"
import { DataBar } from "./DataBar"
import { TodayOverview } from "./TodayOverview"

export const Location = () => {
  const loc = useLocation().state.locations[0]
  const id = useLocation().state._id

  const [localData, setLocalData] = useState([])
  // useEffect(() => {
  //   getCoordinates(loc)
  //     .then(([res]) => getWeatherAPI(res.lat, res.lon))
  //     .then((res) => setLocalData(res))
  // }, [])
  // useEffect(() => {
  //   async function data() {
  //     let res = await getCoordinates(loc)
  //     res = await getWeatherAPI(res.lat, res.lon)
  //     setLocalData(res)
  //   }
  //   data()
  // }, [])

  // function loaded() {
  return (
    <>
      <section>
        <TodayOverview data={localData} />
      </section>
      <section>
        <DataBar data={localData} />
      </section>
    </>
  )
  // }
}
