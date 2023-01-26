import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AddLocation } from "./pages/AddLocation"
import { Login } from "./pages/Login"
import { MainWeather } from "./pages/MainWeather"
import { SignUp } from "./pages/SignUp"
import "./styles/App.css"

export default function App() {
  const [currentUser, setCurrentUser] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <Router basename="/CTWeather">
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />
              ) : (
                <MainWeather isLoggedIn={isLoggedIn} currentUser={currentUser} />
              )}/>

          <Route path="/:id" element={<MainWeather isLoggedIn={isLoggedIn} currentUser={currentUser} />} />

          <Route
            path="/signup"
            element={<SignUp setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} />}
          />

          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />

          <Route path="/addlocation" element={<AddLocation currentUser={currentUser} />} />
        </Routes>
      </Router>
    </div>
  )
}
