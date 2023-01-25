import { useNavigate } from "react-router-dom"
import { addLocation, getLocationsArr } from "../services/users-api"

export const Create = ({ fetchData, currentUser}) => {


  const createTheLocation = async (e) => {
    e.preventDefault()
    console.log(currentUser);
    const location = [{ city: e.target.city.value, state: e.target.state.value }]
    try {
      let res = await addLocation(currentUser, location)
      
      console.log(res.data[0].locations);
    } catch (error) {
      console.log(error)
    }
    // fetchData()
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
