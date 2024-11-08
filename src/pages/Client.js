import React from 'react';
import  "../styles/client.css";
import { Link } from 'react-router-dom';
import allan from "../assets/newceo.jpg";
import ken from "../assets/Ken.jpg";
import flo from "../assets/ireene.jpg";
import jack from "../assets/kevo.jpg"
function Client() {
  return (
    <div className='client'>
  <div className='client-pg up ' >
    <p>
<Link to="/" style={styles.underline}>Home</Link> / Client Feedback
    </p>
    <hr></hr>
    <div><h3 style={{textAlign: "center"}}>Get Quick directions to our branches across the country to acces our various services</h3>
    </div>
   
   <Link to="/partnerships">
<button>All&gt;</button>
</Link>
<Link to="/client">
<button>Online &gt;&gt;</button>
</Link>

<Link to="/blog">
<button>Care Desks&gt;&gt;&gt;</button>
</Link>
   </div>
  <div className='client-pg down'>
    <ul>
      <li>  <img src={allan} alt='allan'/>
      <h1 style={{fontSize: "12px"}}>Simon Makokha</h1>
      <p>I have had a longterm and a tremendously good expirince of G-Space Technologies Software Application, They are the Best in Africa at large</p>
      </li> 
      <li>   <img src={ken} alt='jack'/>
      <h1 style={{fontSize: "12px"}}>Benjamin Uhuru</h1>
      <p>I have had a longterm and a tremendously good expirince of G-Space Technologies Software Application, They are the Best in Africa at large</p>
      </li>
      <li>  <img src={jack} alt='paul'/>
      <h1 style={{fontSize: "12px"}}>Ian Ateya</h1>
      <p>I have had a longterm and a tremendously good expirince of G-Space Technologies Software Application, They are the Best in Africa at large</p>
      </li>
      <li><img src={flo} alt='flo'/>
      <h1 style={{fontSize: "12px"}}>Mary Andewa</h1>
      <p>I have had a longterm and a tremendously good expirince of G-Space Technologies Software Application, They are the Best in Africa at large</p>
      </li>
    </ul>
    <ul>
      <li>  <img src={allan} alt='allan'/>
      <h1 style={{fontSize: "12px"}}>Aggrey MAnguya</h1>
      <p>I have had a longterm and a tremendously good expirince of G-Space Technologies Software Application, They are the Best in Africa at large</p>
      </li> 
      <li>   <img src={ken} alt='jack'/>
      <h1 style={{fontSize: "12px"}}>Kasim Khabana</h1>
      <p>I have had a longterm and a tremendously good expirince of G-Space Technologies Software Application, They are the Best in Africa at large</p>
      </li>
      <li>  <img src={jack} alt='paul'/>
      <h1 style={{fontSize: "12px"}}>Peter Manguya</h1>
      <p>I have had a longterm and a tremendously good expirince of G-Space Technologies Software Application, They are the Best in Africa at large</p>
      </li>
      <li><img src={flo} alt='flo'/>
      <h1 style={{fontSize: "12px"}}>Jackline Muya</h1>
      <p>I have had a longterm and a tremendously good expirince of G-Space Technologies Software Application, They are the Best in Africa at large</p>
      </li>
    </ul>
  </div>
    </div>
  )
}
const styles ={
  underline: {
    textDecoration: "none",
    color: "blue",
    fontWeight: "bold"
  }
}

export default Client
