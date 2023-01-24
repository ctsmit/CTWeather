import axios from "axios"
// import { auth } from "./fire"

// const createToken = async () => {
//   const user = auth.currentUser
//   const token = user && (await user.getIdToken())
//   const payloadHeader = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   }
//   return payloadHeader
// }

//all of our endpints
const BaseURL = "http://localhost:3001/users"
// https://ctweather.onrender.com/users
//show all
export const getLocations = () => {
  const response = axios.get(BaseURL)
  return response
}
//show one
export const getLocation = (id) => {
  const URL = `${BaseURL}/${id}`
  const response = axios.get(URL)
  return response
}
//edit
export const editLocation = (id, updatedLocation) => {
  const URL = `${BaseURL}/${id}`
  const response = axios.put(URL, updatedLocation)
  return response
}
//create
export const createLocation = async (location) => {
  // const header = await createToken()

  try {
    const response = await axios.post(BaseURL, location)
    return response
  } catch (e) {
    console.error(e)
  }
}
//delete
export const deleteLocation = (id) => {
  const URL = `${BaseURL}/${id}`
  const response = axios.delete(URL)
  return response
}
