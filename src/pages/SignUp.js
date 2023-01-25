// import "./signUpPage.css"
import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { auth } from "../services/fire"
import { createUser } from "../services/users-api"

export const SignUp = ({setCurrentUser, currentUser}) => {
  const nav = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const createFireUser = async (e) => {
    e.preventDefault()
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password)
      let user = userCred.user.uid
      createUser({ user })
      nav("/")
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("The email address is already in use by another account.")
          break
        case "auth/invalid-email":
          alert("The email address is not valid.")
          break
        case "auth/operation-not-allowed":
          alert("Email/password accounts are not enabled.")
          break
        case "auth/weak-password":
          alert("The password is not strong enough.")
          break
        default:
          alert("An error occurred. Please try again later.")
          console.error(error)
      }
    }
  }

  return (
    <main className="signUpPage page">
      <section>
        <div className="signUpFormContainer">
          <h1> Sign Up </h1>
          <div className="signUpForm">
            <form>
              <div className="signUpFormInput">
                <div className="signUpFormFields">
                  <div>
                    <label htmlFor="email-address">Email address</label>
                    <input
                      type="email"
                      label="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      label="Create password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>

              <div className="signUpFormButtons">
                <button type="submit" onClick={createFireUser}>
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <p>
            Already have an account? <NavLink to="/login">Sign in</NavLink>
          </p>
        </div>
      </section>
    </main>
  )
}
