//all of our endpints
import axios from "axios"
const BaseURL = "http://localhost:3001/locations"
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
export const createLocation = (location) => {
  const URL = BaseURL
  const response = axios.post(URL, location)
  return response
}
//delete 
export const deleteLocation = (id) => {
  const URL = `${BaseURL}/${id}`
  const response = axios.delete(URL)
  return response
}
