import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Create } from "../pages/Create"
import { deleteLocation, getLocationsArr } from "../services/users-api"
import "../styles/locationsDrop.css"

export const Locations = ({ currentUser,locations, setLocation }) => {
  const nav = useNavigate()
  // const [locations, setLocations] = useState([])
  // const fetchData = async () => {
  //   let res = await getLocationsArr(currentUser.uid)
  //   setLocations(res.data[0].locations)
  // }

  const deleteLoc = async (location) => {
    await deleteLocation(location._id, currentUser.email)
    // await fetchData()
    // nav(`/`)
  }
// ${locations[0]}
  useEffect(() => {
    // fetchData()

  }, [])

  return (
    currentUser && locations && (
      <div className="dropdown">
        <button className="dropbtn">Locations</button>
        <div className="dropdown-content">
          {locations.map((location, i) => {
            return (
              <div key={i}>
                <Link to={`/${location._id}`} onClick={() =>setLocation(location)} state={location}>
                  {location.city.toUpperCase()} {location.state.toUpperCase()}{" "}
                  <button onClick={() => deleteLoc(location)} className="xbtn">
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </Link>
              </div>
            )
          })}
        </div>
        {/* <Create fetchData={fetchData} /> */}
      </div>
    )
  )
}
