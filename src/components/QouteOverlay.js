import React from 'react'
import Pic from "../assets/CEO.jpg";
import "../styles/QouteOverlay.css";
function QouteOverlay() {
  return (
    <div className='quote-container'>
        <img src={Pic} alt='background' className='background-image'/>
        <div className='overlay'>
            <p className='quote-text'> Bank your Bussiness and Manage your Tech aspects with us</p>
            <h2>Higal Ekombe (CEO)</h2>
        </div>
      
    </div>
  )
}

export default QouteOverlay
