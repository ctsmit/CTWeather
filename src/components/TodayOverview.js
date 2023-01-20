import { } from "@fortawesome/free-regular-svg-icons"
import { faCloudRain, faSmog, faSun, faWind } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/overview.css"

export const TodayOverview = ({ data }) => {
  console.log(data.current)
  // let wind = data.current.wind_speed
  // console.log(wind);
  return (
    <div className="overview">
      <h2>Today Overview</h2>
      <div className="overview-container">
        <div className="overviews">
          <h4>Wind Speed</h4>
          <div className="flex">
            <FontAwesomeIcon className="fa-xl" icon={faWind} />
            <h1>12MPH</h1>
            <h4>22</h4>
          </div>
        </div>
        <div className="overviews">
          <h4>Precip Chance</h4>
          <div className="flex">
            <FontAwesomeIcon className="fa-xl" icon={faCloudRain} />
            <h1>24%</h1>
            <h4>22</h4>
          </div>
        </div>
        <div className="overviews">
          <h4>Air Quality</h4>
          <div className="flex">
          <FontAwesomeIcon className="fa-xl" icon={faSmog} />
            <h1>26</h1>
            <h4>Good</h4>
          </div>
        </div>
        <div className="overviews">
          <h4>UV Index</h4>
          <div className="flex">
          <FontAwesomeIcon className="fa-xl" icon={faSun} />
            <h1>2.3</h1>
            <h4>.3</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
