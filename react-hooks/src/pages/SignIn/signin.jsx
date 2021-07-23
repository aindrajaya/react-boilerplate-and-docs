import React, {Fragment} from "react"

//styling
import './signin.css'
import logo from '../../bootstrap-logo.svg'
import { Button } from "../../component/ButtonComponent" //hasil auto import
import InputForm from "../../component/InputForm"

// create a signin component
export const SignIn = () => {
  return(
    // Catatan dari html ke JSX
    /**
     * 1. class jadi className
     * 2. beberapa element membutuhkan closing tag (img, input, br, hr)
     * 3. jsx tidak bisa membaca 2 baris html element sekaligus, harus dibungkus satu parent JSX tag element
     * 4. for diganti htmlFor
     */
    <Fragment>
      <div className="body text-center">
        <main className="form-signin">
          <form>
            <img className="mb-4" src={logo} alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            {/*Ubah Komponen inputForm menjadi Reusable */}
            {/**
             * Exercise
             * 1. Buat komponent form sesuai dengan props yg disebutkan dibawah
             * 
             * Props yang diperlukan
             * 1. props type (email, password)
             * 2. props id (floatingInput, floatingPassword)
             * 3. props placeholder (name@example.com, Password)
             * 4. props htmlFor (floatingInput, floatingPassword)
             * 5. props konten (Email Address, Password)
             */}

            <InputForm 
              type={"email"} 
              id={"floatingInput"} 
              placeholder={"name@example.com"} 
              htmlFor={"floatingInput"}
              konten={"Email Address"}
              />
            <InputForm 
              type={"password"} 
              id={"floatingPassword"} 
              placeholder={"Password"} 
              htmlFor={"floatingPassword"}
              konten={"Password"}
              />
          

            {/* <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label htmlFor="floatingPassword">Password</label>
            </div> */}


            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>

            {/* Komponen Button */}
            <Button title={"Submit"}/> {/*data dari parent*/}
            {/*<Button title={"Klik"}/> komponent button menjadi children komponen dari Page Sign In*/}
            {/* <button className="w-100 btn btn-lg btn-primary" type="submit">Klik</button>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button> */}
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
          </form>
        </main>
      </div>
    </Fragment>
  )
}