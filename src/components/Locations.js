import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { deleteLocation } from "../services/users-api"
import "../styles/locationsDrop.css"

export const Locations = ({ currentUser, locations, setLocation, setLocations, fetchLocations }) => {
  const deleteLoc = async (location) => {
    await deleteLocation(currentUser.uid, location._id)
    await fetchLocations()
  }

  return (
    currentUser &&
    locations && (
      <div className="dropdown">
        <button className="dropbtn">Locations</button>
        <div className="dropdown-content">
          {locations.map((location, i) => {
            return (
              <div className="flex1" key={i}>
                <Link to={`/${location._id}`} onClick={() => setLocation(location)} state={location}>
                  {location.city.toUpperCase()} {location.state.toUpperCase()}{" "}
                </Link>
                {locations.length > 1 && (
                  <button onClick={() => deleteLoc(location)} className="xbtn">
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                )}
              </div>
            )
          })}
          <Link id="add-link" to={`/addlocation`}>
            Add
          </Link>
        </div>
      </div>
    )
  )
}
