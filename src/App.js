// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Location } from "./components/Location"
import { Locations } from "./components/Locations"
import "./styles/App.css"

// import { getLocations } from "./services/users-api"
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Locations />} />
          <Route path="/:id" element={<Location />} />
        </Routes>
      </Router>
    </div>
  )
}
