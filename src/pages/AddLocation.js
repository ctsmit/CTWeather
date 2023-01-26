import { useNavigate } from "react-router-dom"
import { addLocation } from "../services/users-api"

export const AddLocation = ({ currentUser }) => {
  const nav = useNavigate()

  const createTheLocation = async (e) => {
    e.preventDefault()
    const location = { city: e.target.city.value, state: e.target.state.value }
    try {
      let res = await addLocation(currentUser.uid, location)
    } catch (error) {
      console.log(error)
    }
    nav("/")
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
