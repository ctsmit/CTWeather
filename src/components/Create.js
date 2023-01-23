import { useNavigate } from "react-router-dom"
import { createLocation } from "../services/users-api"

export const Create = ({ fetchData }) => {
  const createTheLocation = async (e) => {
    e.preventDefault()
    const locations = [{ city: e.target.city.value, state: e.target.state.value }]
    await createLocation({ locations })
    fetchData()
  }

  return (
    <div>
      <form onSubmit={createTheLocation}>
        <input type="text" defaultValue="city" name="city" />
        <br />
        <input type="text" defaultValue="State Abriviation" name="state" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
