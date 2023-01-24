import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faCloudRain, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import "../styles/dataBar.css"
import { help } from "../utils"
import { HourlyPrecip } from "./HourlyPrecip"

export const DataBar = ({ data }) => {
  const loc = useLocation().state

  let iconCode = data.current.weather[0].icon
  let iconURL = `http://openweathermap.org/img/w/${iconCode}.png`


  let sunrise = data.current.sunrise
  let rise = help.getSunrise(sunrise)
  let sunset = data.current.sunset
  let set = help.getSunset(sunset)

  let currentTemp = Math.round(data.current.temp)
  let currentRF = Math.round(data.current.feels_like)
  
  console.log(data)
  
  return (
    <div>
      <div className="location">
        <div>
          <h3>{help.capitalize(loc.city)}</h3>
          <h5>{loc.state.toUpperCase()}, USA</h5>
        </div>
        <div>
          <h5>{help.getDayAndTime()}</h5>
        </div>
      </div>
      <br />
      <div className="current">
          <img className="icon" src={iconURL} alt="oops" />
        <div className="flex1">
          <h1>{currentTemp}<span className="small"><FontAwesomeIcon className="fa-2xs degree" icon={faCircle} /></span><span className="xsmall"> feels like {currentRF}<FontAwesomeIcon icon={faCircle} className="degree1"/></span></h1>
          <h5 className="description">{data.current.weather[0].main} <br/><span className="small">{data.current.weather[0].description}</span></h5>
        </div>
      </div>
      <hr />
      <br />
      <HourlyPrecip hourly={data.hourly} />
      
      <br />
      <div className="sunsets-container">
        <p>Sunrise & Sunset</p>
        <div className="sunsets">
          <h4>Sunrise</h4>
          <div className="flex">
            <FontAwesomeIcon className="fa-xl" icon={faSun} />
            <h1>{rise.time}</h1>
            <h4>{rise.diff}hr</h4>
          </div>
        </div>
        <div className="sunsets">
          <h4>Sunset</h4>
          <div className="flex">
            <FontAwesomeIcon className="fa-xl" icon={faMoon} />
            <h1>{set.time}</h1>
            <h4>{set.diff}hr</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
