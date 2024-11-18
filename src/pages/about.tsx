import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {

    const navigate = useNavigate();
    const handelclick = ()=>{
        navigate('/contact_us')
    }


  return (
    <div>
        <h1>About</h1>
        <button onClick={handelclick} >Click Me</button>
    </div>
  )
}
