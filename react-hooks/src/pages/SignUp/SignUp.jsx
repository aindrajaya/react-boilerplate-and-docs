import React, {Fragment} from 'react'
import logo from '../../bootstrap-logo.svg'
import InputForm from '../../component/InputForm'
import {Button} from '../../component/ButtonComponent'
import './SignUp.css'

export default function SignUp() {
  return (
    <Fragment> 
      <div className="body text-center">
        <main className="form-signin">
          <form>
            <img className="mb-4" src={logo} alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Please sign Up</h1>
            <InputForm 
              type={"email"} 
              id={"floatingEmailSignUp"} 
              placeholder={"name@example.com"} 
              htmlFor={"floatingEmailSignUp"}
              konten={"Email Address"}
            />
            <InputForm 
               type={"text"} 
               id={"floatingUsernameSignup"} 
               placeholder={"Username"} 
               htmlFor={"floatingUsernameSignup"}
               konten={"Username"}
            />
            <InputForm 
               type={"password"} 
               id={"floatingPassword"} 
               placeholder={"Password"} 
               htmlFor={"floatingPassword"}
               konten={"Password"}
            />
            <InputForm 
               type={"password"} 
               id={"floatingKonfirmPassword"} 
               placeholder={"Password"} 
               htmlFor={"floatingKonfirmPassword"}
               konten={"Konfirm Password"}
            />
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <Button title={"Sign Up"}/>
          </form>
        </main>
      </div>
    </Fragment>
  )
}
