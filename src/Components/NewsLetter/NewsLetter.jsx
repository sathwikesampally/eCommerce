import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>get Exclusive offers on Your Email </h1>
      <p>Subscribe to newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id'></input>
        <button>Subsribe</button>
        </div>
    </div>
   
    
  )
}

export default NewsLetter
