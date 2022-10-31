import React, { Fragment } from 'react'
import '../Pages/style.scss'
import { useFormik } from 'formik'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'


const baseurl = process.env.REACT_APP_BASE_URL;

const Login = () => {
const [user,setUser] = useState()
const [forlogin,setForlogin] = useState()
const Navigate = useNavigate()

console.log(forlogin)
useEffect(() => {
    axios.post(`${baseurl}/auth/login`,
      {
        email: "user@gmail.com",
        password: "test1234"
      })
      .then((res) => {
        localStorage.setItem("token",res.data.token)
        setUser(res.data.data.email)})
      .catch((err) => console.log(err))
  }, [])


  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: ""
    },
    onSubmit: values => {
      setForlogin(values)
if(user==values.Email )
{

  Navigate('/dashboard')
}
else{
  alert("please enter valid Email and password")
}


    },
    validate: values => {

      let errors = {}


      if (!values.Email) {
        errors.Email = "Required"
      }
      if (!values.Password) {
        errors.Password = "Password Required"
      }
      return errors
    }

  })








  return (
    <Fragment>
      <div className='formContainer'>
  
        <form className='form' onSubmit={formik.handleSubmit} >
        <Typography variant="h5" >Login here</Typography>

          <div className='inputContainer'>
            <label htmlFor="Email">Email</label>

            <input
              type="Email"
              name="Email"
              id="Email"
              onChange={formik.handleChange}
              value={formik.values.Email}

            />
            {formik.errors.Email ? <span className='error'>{formik.errors.Email}</span> : null}
          </div>

          <div className='inputContainer'>
            <label htmlFor="Password">Password</label>

            <input
              type="Password"
              name="Password"
              id="Password"
              onChange={formik.handleChange}
              value={formik.values.Password}
            />
            {formik.errors.Password ? <span className='error'>{formik.errors.Password}</span> : null}

          </div>
          <button className='btn btn-primary'>Submit</button><button className='btn btn-primary signup' onClick={()=>Navigate("/signup")}>Sign up</button>

        </form>
      </div>
    </Fragment>
  )
}

export default Login