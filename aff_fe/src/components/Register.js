import React from 'react'
import { useState, useEffect } from 'react'


function Register() {
    const register_url = 'http://20.244.56.144/products/register'
  return (
    <div className='registers'>
       
        <h1 class = "text-3xl font-bold m-20 drop-shadow-md bg-inher text-center">Registration Form</h1>
        <h2 class = "text-2xl font-bold m-8">Name : </h2>
        <div className='handleByUser'>

        </div>
        
    </div>
  )
}

export default Register