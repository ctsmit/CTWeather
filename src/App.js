import { useEffect, useState } from "react"
import { auth } from "./services/fire"
// import { Link } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AddLocation } from "./pages/AddLocation"
import { Login } from "./pages/Login"
import { MainWeather } from "./pages/MainWeather"
import { SignUp } from "./pages/SignUp"
import "./styles/App.css"

// import { getLocations } from "./services/users-api"
export default function App() {
  const [currentUser, setCurrentUser] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isNewUser, setIsNewUser] = useState(false)
  const test = "test"
  auth.onAuthStateChanged((user) => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false)
  })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainWeather
                test={test}
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                isNewUser={isNewUser ? true : false}
              />
            }
          />

          <Route
            path="/:id"
            element={<MainWeather isLoggedIn={isLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route
            path="/signup"
            element={
              <SignUp
                setIsloggedIn={setIsLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
                setIsNewUser={setIsNewUser}
              />
            }></Route>

          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />}></Route>

          <Route path="/addlocation" element={<AddLocation currentUser={currentUser} />} />
        </Routes>
      </Router>
    </div>
  )
}
