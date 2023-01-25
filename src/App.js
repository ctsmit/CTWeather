import { useEffect, useState } from "react"
import { auth } from "./services/fire"
// import { Link } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Locations } from "./components/Locations"
import { Create } from "./pages/Create"
import { Login } from "./pages/Login"
import { MainWeather } from "./pages/MainWeather"
import { SignUp } from "./pages/SignUp"
import "./styles/App.css"

// import { getLocations } from "./services/users-api"
export default function App() {
  const [currentUser, setCurrentUser] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // if (isLoggedIn){}

  auth.onAuthStateChanged((user) => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false)
  })

  const signOut = () => {
    auth.signOut()
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainWeather isLoggedIn={isLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          <Route path="/:id" element={<MainWeather isLoggedIn={isLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
          
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} />}></Route>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />}></Route>
          <Route path="/create" element={<Create currentUser={currentUser} />} />
        </Routes>
      </Router>
    </div>
  )
}

//   return (
//     <div className="App">
//       <Router>
//         <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/view-message/:id" element={<ViewMessagePage />} />
//           <Route path="/create-message" element={<CreateMessagePage />} />
//           <Route path="/edit-message/:id" element={<EditMessagePage />} />
//           <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/signup" element={<SignUpPage setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/profile" element={<ProfilePage isLoggedIn={isLoggedIn} currentUser={currentUser} />} />
//           <Route path="*" element={<h1>404 Not Found</h1>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
