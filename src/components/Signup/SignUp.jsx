import React from 'react'
import { Fragment } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Typography } from '@mui/material'
import { useEffect } from 'react'
import axios from 'axios'
import '../Pages/style.scss'

const baseurl = process.env.REACT_APP_BASE_URL;

const SignUp = () => {
    const [user,setUser] = useState()
    const Navigate = useNavigate()
    
    const RegisterUser =(user)=>{
      useEffect(() => {
        axios.post(`${baseurl}/auth/register`,
          {
            firstName:user.firstname,
            lastName:user.lastname,
            email:user.Email,
            countryCode:user.countryCode,
            phone:user.Phone,
            password:user.password
          })
          .then((res) => {
            localStorage.setItem("token",res.data.token)
            console.log("yehh its")
            })
          .catch((err) => console.log(err))
      }, [])
    }

  





    const formik = useFormik({
        initialValues: {
          firstname: "",
          lastname: "",
          Email: "",
          countryCode: "",
          Phone: "",
          password:""
        },
        onSubmit: values => {
    // if(user==values.Email )
   if(values)
    {
      setUser(values)
      
        console.log(values.firstname)
      Navigate('/')
    }
    // else{
    //   alert("please enter valid Email and password")
    // }
    
    
        },
        validate: values => {
    
          let errors = {}
          if (!values.firstname) {
            errors.firstname = "First name is Required"
          }
          if (!values.lastname) {
            errors.lastname = "Last name is Required"
          }
          if (!values.Email) {
            errors.Email = "Email Required"
          }
          if (!values.countryCode) {
            errors.countryCode = "countryCode is Required"
          }
          if (!values.Phone) {
            errors.Phone = "Phone is Required"
          }
          if (!values.password) {
            errors.password = "password is Required"
          }
          return errors
        }
    
      })







  return (
    <Fragment>

    <div className='formContainer'>
        
      <form className='form' type="submit" onSubmit={formik.handleSubmit} >
      <Typography variant="h5">SignUp here</Typography>
        <div className='inputContainer mt-5'>

          <label htmlFor="firstname">FirstName</label>

          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={formik.handleChange}
            value={formik.values.firstname}

          />
          {formik.errors.firstname ? <span className='error'>{formik.errors.firstname}</span> : null}
        </div>
        <div className='inputContainer'>
          <label htmlFor="lastname">LastName</label>

          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          {formik.errors.lastname ? <span className='error'>{formik.errors.lastname}</span> : null}

        </div>
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
          <label htmlFor="CountryCode">Country Code</label>

          <input
            type="tel"
            name="countryCode"
            id="countryCode"
            onChange={formik.handleChange}
            value={formik.values.countryCode}
          />
          {formik.errors.countryCode ? <span className='error'>{formik.errors.countryCode}</span> : null}

        </div>
        <div className='inputContainer'>
          <label htmlFor="Phone">Phone</label>

          <input
            type="tel"
            name="Phone"
            id="Phone"
            onChange={formik.handleChange}
            value={formik.values.Phone}
          />
          {formik.errors.Phone ? <span className='error'>{formik.errors.Phone}</span> : null}

        </div>
        <div className='inputContainer'>
          <label htmlFor="password">password</label>

          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <span className='error'>{formik.errors.password}</span> : null}

        </div>
        <button className='btn btn-primary'  
        onClick={formik.handleSubmit} 
    type="submit"
    >Register</button> <button className='btn btn-primary signup' onClick={()=>Navigate('/')} >Back</button>

      </form>
    </div>
  </Fragment>
  )
}

export default SignUp