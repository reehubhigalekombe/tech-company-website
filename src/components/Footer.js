import React from 'react';
import "../styles/footer.css"
import Ekombe from "../assets/G-Space.png";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
    <div className='footer-row tops'>
      <div className='leff'>
        <img src={Ekombe} alt='higal'/>
        <h1>G-Space Technologies</h1>
        <h2 style={{lineHeight: "0px", fontSize: "20px", color: "blue"}}>Higal Ekombe Company President</h2>
      </div>
      <div className='reff'><h1><strong>ADDRESS</strong></h1>
      <p>P.O. Box 618-00515 </p>
      <p>Nairobi, Kenya</p>
      <p>Tel.: +254742106109</p>
      <p><strong>Email:</strong>info@gspace.co.ke</p>
      </div>
      <div className='beff'>
        <h1><strong>QUIK LINKS</strong></h1>
        <ul>
          <li><Link to="/contact">Our Services</Link></li>
          <li>  <a href='https://www.orbitech.co.ke'>Obitech technologies</a></li>
          <li> <a href='https://www.safaricom.co.ke/'>Safaricom</a></li>
          <li><a href= 'https://www.microsoft.com'>Mircosoft</a></li>
          <li><a href='https://www.hostafrica.ke'>Host Africa</a></li>
          <li > <Link to="/" className='homeup'>Home&gt;&gt;</Link></li>
        </ul>
      </div>
    </div>
    <div className=' footer-row bots'>
    <h1 className='fot'>The G-Space Technologies Official Website ||&copy;2024. All Rights Reserved</h1>
    </div>
    </div>
  )
}

export default Footer
