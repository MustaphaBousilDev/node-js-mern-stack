import React,{useState,useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
const Login = () => {
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
  const {email,password}=formData
  return (
    <>
      <section className='heading'>
        <h1><FaSignInAlt/> lOGIN</h1>
        <p>Login and start setting goals</p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
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
            <button type="submit" className='btn btn-block' >Submit</button>
           </div>
        </form>
      </section>
    </>
  )
}

export default Login 
