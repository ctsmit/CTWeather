import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getLocations } from "../services/users-api"

export const Locations = () => {
  const [locations, setLocations] = useState([])
  useEffect(() => {
    getLocations().then((res) => {
      setLocations(res.data)
    })
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
            </li>
          )
        })}
      </ul>
    </div>
  )
}
