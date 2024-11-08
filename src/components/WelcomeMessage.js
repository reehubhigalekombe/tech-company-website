import React from 'react'
import {useState, useEffect} from "react";
import "../styles/welcomeMessage.css"
function WelcomeMessage() {
  const [showMessage, setShowMessage] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false)
    }, 10000);
    return () => clearTimeout(timer)
  }, []);
  return (
    showMessage && (
      <div className='welcome-message'>
    G-Space Technologies
    </div>
  )
    )
}

export default WelcomeMessage
