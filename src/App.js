// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Locations } from "./components/Locations"
import { getWeatherData, MainWeather } from "./pages/MainWeather"
import "./styles/App.css"

// import { getLocations } from "./services/users-api"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Locations />} />
      <Route path="/:id" element={<MainWeather />} loader={getWeatherData} />
    </Route>
  )
)
export default function App() {
  return <RouterProvider router={router} />
}
