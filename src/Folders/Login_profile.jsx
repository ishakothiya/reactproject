
// import { NavLink } from "react-router-dom";

import React, { useEffect, useState } from 'react'
import HOC from './HOC'

function Login_profile() {
    
    // const[getdata , setgetdata] = useState(JSON.parse(localStorage.getItem('getdata')))


    // console.log(props)

//  console.log(getobj)

  return (
    <>
    
    <main className='main-container ' style={{backgroundColor : '#151519' , width:'100%'}}>
        <div className='main-title'>
            <h3>Login Details</h3><br />
            <span></span>
            
        </div>
    </main>


   </>
  )
}

export default HOC(Login_profile)