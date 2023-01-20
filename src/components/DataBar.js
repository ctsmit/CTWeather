import { faCloudRain, faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/dataBar.css"

export const DataBar = ({ data }) => {
  const date = new Date()
  let newTime = date.toLocaleString([], { timeStyle: "short" })
  let newDay = date.toLocaleDateString([], { weekday: "long" })
  return (
    <div>
      <div className="location">
        <div>
          <h3>Sparta</h3>
          <h5>NC, USA</h5>
        </div>
        <div>
          <h3>{newDay} {newTime}</h3>
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
            <h1>4:20 am</h1>
            <h4>-4hr</h4>
        </div></div>
        <div className="sunsets"><h4>Sunset</h4>
        <div className="flex">
            <FontAwesomeIcon className="fa-xl" icon={faMoon} />
            <h1>12MPH</h1>
            <h4>22</h4>
          </div></div>
        
      </div>
    </div>
  )
}
