import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteLocation, getLocations } from "../services/users-api"
import "../styles/locationsDrop.css"
import { Create } from "./Create"

export const Locations = () => {
  // const nav = useNavigate()
  const [locations, setLocations] = useState([])

  const fetchData = async () => {
    let res = await getLocations()
    setLocations(res.data[0].locations)
  }

  const deleteLoc = async (id) => {
    await deleteLocation(id)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log(locations);
  return (
    <div className="dropdown">
      <button className="dropbtn">Locations</button>
      <div className="dropdown-content">
        {locations.map((location,i) => {
          // let loc = location.locations[0]
          return (
            <div key={i}>
              <Link to={`/${location._id}`} state={location} >
                {location.city.toUpperCase()} {location.state.toUpperCase()}  <button onClick={() => deleteLoc(location._id)} className="xbtn">
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
}
