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
export const getLocationsArr = (user) => {
  const URL = `${BaseURL}/${user}`
  const response = axios.get(URL)
  return response
}
//edit
export const addLocation = (email, newLocation) => {
  const URL = `${BaseURL}/${email}`
  console.log(newLocation[0]);
  const response = axios.put(URL, newLocation[0])
  return response
}
//create
export const createUser = async (user) => {
  // const header = await createToken()
  console.log(user);
  try {
    const response = await axios.post(BaseURL, user)
    return response
  } catch (e) {
    console.error(e)
  }
}
//delete
export const deleteLocation = (location, email) => {
  console.log({ email });
  const URL = `${BaseURL}/${location}`
  const response = axios.delete(URL, {data: {email}})
  return response
}
