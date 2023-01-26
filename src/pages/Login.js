import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { auth } from "../services/fire"

export const Login = ({ setIsLoggedIn, setCurrentUser }) => {
  const nav = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onLogin = async (e) => {
    e.preventDefault()
    try {
      let userCredential = await signInWithEmailAndPassword(auth, email, password)
      let user = userCredential.user
      setCurrentUser(user)
      setIsLoggedIn(true)
      nav("/")
    } catch (error) {
      console.log(error.code, error.message)
    }
  }

  return (
    <main className="loginPage page">
      <section>
        <div className="loginFormContainer">
          <h1> Login </h1>
          <div className="loginForm">
            <form>
              <div className="loginFormInput">
                <div className="loginFormFields">
                  <div>
                    <label htmlFor="email-address">Email address</label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="loginFormButtons">
                  <button onClick={onLogin}>Login</button>
                </div>
              </div>
            </form>

            <p className="text-sm text-white text-center">
              No account yet? <NavLink to="/signup">Sign up</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
