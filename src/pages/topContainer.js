import React from 'react'
import "../styles/topContainer.css"
import VideoSrc from "../assets/higal.mp4";
function topContainer() {
  return (
    <div className='top-conatiner'>
      <video autoPlay loop muted className='backgroundVideo'>
<source src={VideoSrc} type='video/mp4' />
Your Browser does not support the video tag
      </video>
      <div className='overlay-content'>
        <h1>Welcome to G-Space Tchnologies</h1>
        <p>The  best Tech Compamy In Africa 024</p>
      </div>
    </div>
  )
}

export default topContainer
