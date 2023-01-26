import axios from "axios"

const BaseURL = "https://ctweather.onrender.com/users/" // http://localhost:3001/users

//show all
export const getLocations = () => {
  const response = axios.get(BaseURL)
  return response
}

//delete user
export const deleteUser = (user) => {
  const URL = `${BaseURL}/${user}`
  const response = axios.delete(URL)
  return response
}
//update
export const addLocation = (user, newLocation) => {
  const URL = `${BaseURL}/${user}`
  console.log(newLocation)
  const response = axios.put(URL, newLocation)
  return response
}

export const deleteLocation = (userid, locationid) => {
  const URL = `${BaseURL}/${userid}/${locationid}`
  const response = axios.put(URL)
  return response
}

//create
export const createUser = async ({ user }) => {
  let newUser = {
    user: user,
    locations: [{ city: "Chicago", state: "IL" }],
  }
  const response = await axios.post(BaseURL, newUser)
  return response
}

//show one
export const getLocationsArr = (user) => {
  const URL = `${BaseURL}/${user}`
  const response = axios.get(URL)
  return response
}
