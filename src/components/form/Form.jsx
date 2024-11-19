import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { userLogin, userSignUp } from '../../features/userActions'
import toast from 'react-hot-toast'
import { resetState } from '../../features/userSlice'

function Form({component}) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] =  useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {message,error} = useSelector((state)=>state?.user)
    const handleSignup = (e)=>{
      e.preventDefault()
      const form = new FormData()
      form.append('uname',name)
      form.append('email',email)
      form.append('password',password)
      form.append('confirmPwd',confirmPassword)
      dispatch(userSignUp(form))
    }
    const handleLogin = (e)=>{
      e.preventDefault()
      const form = new FormData()
      form.append('email',email)
      form.append('password',password)
      dispatch(userLogin(form))
    }
    useEffect(()=>{
      console.log('messgae',message);
      
      if(message == "user created success"){
        toast.success(message)
        dispatch(resetState())
        navigate('/login')
        return
      }
      if(message == "login success"){
        toast.success(message)
        navigate('/')
      }
      if(error){
        toast.error(error)
        return
      }

    },[message])
  return (
    <form action="" className="flex flex-col space-y-4"  onSubmit={component === "signup" ? handleSignup : handleLogin}>
          {component === "signup" && <><label htmlFor="" className="text-sm font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name=""
            id=""
            value={name}
            className="border-2 border-black w-[20rem] h-[2.5rem] p-1 rounded-md drop-shadow-sm focus:outline-none focus:border-blue-500 "
            onChange={(e)=>setName(e.target.value)}
          /></>}
          <label htmlFor="" className="text-sm font-medium">
            Email <span className="text-red-500">*</span>{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-black w-[20rem] h-[2.5rem] p-1 rounded-md drop-shadow-sm focus:outline-none focus:border-blue-500 "
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <label htmlFor="" className="text-sm font-medium">
            Password <span className="text-red-500">*</span>{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-black w-[20rem] h-[2.5rem] p-1 rounded-md drop-shadow-sm focus:outline-none focus:border-blue-500 "
            value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          {component === "signup" && <><label htmlFor="" className="text-sm font-medium">
            Confirm Password <span className="text-red-500">*</span>{" "}
          </label>
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-black w-[20rem] h-[2.5rem] p-1 rounded-md drop-shadow-sm focus:outline-none focus:border-blue-500 "
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          /></>}
          <button className="bg-gray-800 text-white p-2 rounded-md hover:bg-black " >
           { component === "signup" ?  'Sign up' : 'Login'}
          </button>
          <div className='flex items-center gap-2'>
   {component === "signup"?  <span>Already have an account ?</span> : <span>Don't have an account</span>}
    <NavLink className={'underline text-green-500 tracking-tight'} to={component === "signup" ? '/login' : '/signup'}>{component === "signup" ? 'Login' : 'signup'}</NavLink>
          </div>
        </form>
  )
}

export default Form
