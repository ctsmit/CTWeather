import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteLocation, getLocations } from "../services/users-api"
import { Create } from "./Create"

export const Locations = () => {
  // const nav = useNavigate()
  const [locations, setLocations] = useState([])
  
  const fetchData = async () => {
    let res = await getLocations()
    setLocations(res.data)
  }
  
  const deleteLoc = async (id) => {
    await deleteLocation(id)
    fetchData()
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <ul>
        {locations.map((location, i) => {
          let loc = location.locations[0]
          return (
            <li key={i}>
              <Link to={`/${location._id}`} state={location}>
                {loc.city} {loc.state}
              </Link>
              <button onClick={() => deleteLoc(location._id)} className="xbtn">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </li>
          )
        })}
      </ul>
      <Create fetchData={fetchData} />
    </div>
  )
}
