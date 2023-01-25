/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { DataBar } from "../components/DataBar"
import { TodayOverview } from "../components/TodayOverview"
import { auth } from "../services/fire"
import { getLocation, getLocationsArr } from "../services/users-api"
import { getAirPollAPI, getCoordinates, getWeatherAPI } from "../services/weather-api"

export const MainWeather = ({ isLoggedIn, currentUser, setCurrentUser }) => {
  const nav = useNavigate()
  const state = useLocation().state

  const [locations, setLocations] = useState([])
  const [loc, setLocation] = useState()
  const [weatherData, setWeatherData] = useState()
  const [airData, setAirData] = useState()

  const fetchLocations = async () => {
    let res = await getLocationsArr(currentUser.uid)
    res = res.data[0].locations
    // console.log(res)
    setLocations(res)
    console.log(locations)
    setLocation(res[0])
  }

  const getWeatherData = async () => {
      console.log(loc)
      let coor = await getCoordinates(loc)
      coor = coor.data[0]
      let wData = await getWeatherAPI(coor.lat, coor.lon)
      setWeatherData(wData.data)
      let aData = await getAirPollAPI(coor.lat, coor.lon)
      let aqi = aData.data.list[0].main.aqi
      setAirData(aqi)
  }

  // const fetchAllData = async () => {
  //   await fetchLocations()
  //   await getWeatherData()
  // }
  
  useEffect(() => {
    if (isLoggedIn) {
      fetchLocations()
    }
    console.log("empty");

    // auth.onAuthStateChanged((currentUser) => {
    //   if (currentUser) {
    //     setCurrentUser(currentUser)
    //   } else {
    //     nav("/login")
    //   }
    // })
  }, [])
  useEffect(() => {
    if (loc) {
      getWeatherData()
    }
    console.log(loc);
   
    // auth.onAuthStateChanged((currentUser) => {
    //   if (currentUser) {
    //     setCurrentUser(currentUser)
    //   } else {
    //     nav("/login")
    //   }
    // })
  }, [loc])

  return (
    airData && loc && (
      <>
        <section>
          <TodayOverview
            setLocation={setLocation}
            locations={locations}
            currentUser={currentUser}
            weatherData={weatherData}
            airData={airData}
          />
        </section>
        <section>
          <DataBar loc={loc} data={weatherData} />
        </section>
      </>
    )
  )
}
