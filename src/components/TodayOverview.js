import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faCaretUp, faCloud, faCloudRain, faSmog, faSun, faWind } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/todayOverview.css"

import { NavLink, useNavigate } from "react-router-dom"

import { auth } from "../services/fire"

import { deleteUser } from "../services/users-api"
import { help } from "../utils"
import { Locations } from "./Locations"

export const TodayOverview = ({ weatherData, airData, currentUser, locations, setLocation, fetchLocations }) => {
  const nav = useNavigate()
  let data = weatherData
  let api = airData

  let windGusts = Math.round(data.daily[0].wind_gust)
  let windSpeed = Math.round(data.daily[0].wind_speed)
  let precChance = Math.round(data.daily[0].pop * 100)
  let cloudPerc = data.daily[0].clouds
  let uvi = data.daily[0].uvi

  const signOut = async () => {
    await auth.signOut()
    nav("/login")
  }
  const deleteAccount = async () => {
    let user = auth.currentUser
    deleteUser(user.uid)
    try {
      user && user.delete()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    currentUser && (
      <div className="overview">
        <div className="flex1">
          <h2 className="titles">Today Overview</h2>
          <div className="btn-container">
            <div className="userbtn-container">
              <button className="userbtn">
                <FontAwesomeIcon icon={faUser} className="fa-xl" />
              </button>
              <div id="myDropdown" className="user-content">
                <NavLink to={"/login"} className="signout-btn" onClick={signOut}>
                  Sign Out
                </NavLink>
                <NavLink to="/signup" className="deleteacc-btn" onClick={deleteAccount}>
                  Delete Account
                </NavLink>
              </div>
            </div>

            <Locations
              currentUser={currentUser}
              setLocation={setLocation}
              locations={locations}
              fetchLocations={fetchLocations}
            />
          </div>
        </div>
        <div className="overview-container">
          <div className="overviews">
            <h4>Wind Speed</h4>
            <div className="flex">
              <FontAwesomeIcon className="fa-xl" icon={faWind} />
              <h1>{windSpeed} m/h</h1>
              <h4>
                {windGusts}
                <FontAwesomeIcon className="purple fa-lg" icon={faCaretUp} />
              </h4>
            </div>
          </div>
          <div className="overviews">
            <h4>Precip Chance</h4>
            <div className="flex">
              <FontAwesomeIcon className="fa-xl" icon={faCloudRain} />
              <h1>{precChance}%</h1>
              <h4>
                {cloudPerc}
                <FontAwesomeIcon className="purple" icon={faCloud} />
              </h4>
            </div>
          </div>
          <div className="overviews">
            <h4>Air Quality</h4>
            <div className="flex">
              <FontAwesomeIcon className="fa-xl" icon={faSmog} />
              <div id="air-quality">
                <h1>{api}</h1>
              </div>
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
  )
}
