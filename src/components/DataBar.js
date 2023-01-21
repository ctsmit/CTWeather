import { faCloudRain, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import "../styles/dataBar.css"
import { help } from "../utils"

export const DataBar = ({ data }) => {
  const loc = useLocation().state.locations[0]

  let sunrise = data.current.sunrise
  let rise = help.getSunrise(sunrise)
  let sunset = data.current.sunset
  let set = help.getSunset(sunset)
  return (
    <div>
      <div className="location">
        <div>
          <h3>{help.capitalize(loc.city)}</h3>
          <h5>{loc.state.toUpperCase()}, USA</h5>
        </div>
        <div>
          <h3>{help.getDayAndTime()}</h3>
        </div>
      </div>
      <br />
      <div className="current">
        <div><FontAwesomeIcon className="fa-xl"icon={faCloudRain} /></div>
        <div className="flex"><h1>20 F</h1><h5>Cloudy</h5></div>
      </div>
      <hr />
      <br />
      <div className="chanceHour">
        <h3>9 pm 44%</h3>
        <h3>9 pm 44%</h3>
        <h3>9 pm 44%</h3>
        <h3>9 pm 44%</h3>
        <h3>9 pm 44%</h3>
        <h3>9 pm 44%</h3>
      </div>
      <br />
      <div className="sunsets-container">
        <p>Sunrise & Sunset</p>
        <div className="sunsets"><h4>Sunrise</h4>
        <div className="flex">
            <FontAwesomeIcon className="fa-xl" icon={faSun} />
            <h1>{rise.time}</h1>
            <h4>{rise.diff}hr</h4>
        </div></div>
        <div className="sunsets"><h4>Sunset</h4>
        <div className="flex">
            <FontAwesomeIcon className="fa-xl" icon={faMoon} />
            <h1>{set.time}</h1>
            <h4>{set.diff}hr</h4>
          </div></div>
        
      </div>
    </div>
  )
}
