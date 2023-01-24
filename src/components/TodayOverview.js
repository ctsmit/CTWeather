import { } from "@fortawesome/free-regular-svg-icons"
import { faCaretUp, faCloud, faCloudRain, faSmog, faSun, faWind } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAirPollAPI } from "../services/weather-api"


import { auth } from "../services/fire"
import "../styles/todayOverview.css"
import { help } from "../utils"
import { Locations } from "./Locations"


export const TodayOverview = (props) => {
  const nav = useNavigate()
  let data = props.weatherData
  let api = props.airData 

  let windGusts = Math.round(data.daily[0].wind_gust)
  let windSpeed = Math.round(data.daily[0].wind_speed)
  let precChance = Math.round(data.daily[0].pop * 100)
  let cloudPerc = data.daily[0].clouds
  let uvi = data.daily[0].uvi
  const signOut = () => {
    auth.signOut()
    nav("/login")
  }
  return (
    <div className="overview">
      <div className="flex1">
        <h2>Today Overview</h2>
        <button onClick={signOut}>Sign Out</button>
        <Locations/>
      </div>
      <div className="overview-container">
        <div className="overviews">
          <h4>Wind Speed</h4>
          <div className="flex">
            <FontAwesomeIcon className="fa-xl" icon={faWind} />
            <h1>{windSpeed} m/h</h1>
            <h4><FontAwesomeIcon className="fa-lg" icon={faCaretUp}/>{windGusts}</h4>
          </div>
        </div>
        <div className="overviews">
          <h4>Precip Chance</h4>
          <div className="flex">
            <FontAwesomeIcon className="fa-xl" icon={faCloudRain} />
            <h1>{precChance}%</h1>
            <h4>{cloudPerc}<FontAwesomeIcon icon={faCloud}/></h4>
          </div>
        </div>
        <div className="overviews">
          <h4>Air Quality</h4>
          <div className="flex">
          <FontAwesomeIcon className="fa-xl" icon={faSmog} />
            <h1>{api}</h1>
            <h4>{help.isAirBad(api)}</h4>
          </div>
        </div>
        <div className="overviews">
          <h4>UVI</h4>
          <div className="flex">
          <FontAwesomeIcon className="fa-xl" icon={faSun} />
            <h1>{uvi}</h1>
            <h4>{help.isUVHigh(uvi)}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
