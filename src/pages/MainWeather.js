import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { DataBar } from "../components/DataBar"
import { TodayOverview } from "../components/TodayOverview"
import { getLocation } from "../services/users-api"
import { getCoordinates, getWeatherAPI } from "../services/weather-api"

export const MainWeather = () => {
  const loc = useLocation().state.locations[0]
  const id = useLocation().state._id
  const [localData, setLocalData] = useState(null)
  // useEffect(() => {
  //   getCoordinates(loc)
  //     .then(([res]) => getWeatherAPI(res.lat, res.lon))
  //     .then((res) => setLocalData(res))
  // }, [])
  useEffect(() => {
    async function fetchData() {
      let res = await getCoordinates(loc)
      res = await res.data[0]
      res = await getWeatherAPI(res.lat, res.lon)
      setLocalData(res.data)
    }
    fetchData()
  }, [])

  return (
    <>
      {localData && (
        <>
          <section>
            <TodayOverview data={localData} />
          </section>
          <section>
            <DataBar data={localData} />
          </section>
        </>
      )}
    </>
  )
  // }
}
