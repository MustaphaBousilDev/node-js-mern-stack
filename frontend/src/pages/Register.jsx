import React,{useState,useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
const Register = () => {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  const onChange=(e)=>{
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name] : e.target.value 
    }))
  }
  const onSubmit=(e)=>{
    e.preventDefault()
  }
  const {name,email,password,password2}=formData
  return (
    <>
      <section className='heading'>
        <h1><fUser/> Register</h1>
        <p>Please create an account</p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
           <div className='form-group'>
                <input type="text" className='form-control' id="name"
                name="name" value={name} placeholder="Enter your Name"
                onChange={onChange}
                />
           </div>
           <div className='form-group'>
                <input type="text" className='form-control' id="email"
                name="email" value={email} placeholder="Enter your Email"
                onChange={onChange}
                />
           </div>
           <div className='form-group'>
                <input type="password" className='form-control' id="password"
                name="password" value={password} placeholder="Enter your password"
                onChange={onChange}
                />
           </div>
           <div className='form-group'>
                <input type="password" className='form-control' id="password2"
                name="password2" value={password2} placeholder="confirm password"
                onChange={onChange}
                />
           </div>
           <div className='form-group'>
            <button type="submit" className='btn btn-block' >Submit</button>
           </div>
        </form>
      </section>
    </>
  )
}

export default Register
