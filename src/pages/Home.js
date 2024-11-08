import React from 'react';
import "../styles/home.css";
import Pic from "../assets/hc.jpeg"
import WelcomeMessage from '../component/WelcomeMessage';
import pic from  "../assets/newceo.jpg";
import ken from "../assets/Ken.jpg"
import iren from "../assets/luni.jpg";
import mu from "../assets/kevo.jpg"
function Home() {
  return (
    <div className='home' >
    <WelcomeMessage/>
    <div className='home-row top' style={{backgroundImage: `url(${Pic})`}}>
      <h1 style={styles.headr}>Welcome to G-Space Technologies</h1>
      <p style={styles.pa}>We Built Healthy digital Systems that Thrive on Change </p>
      <button className='butin'>Book A meeting&gt;&gt;&gt;</button>
    </div>
    <div className='home-row bot'>
   <div><img src={pic} alt='photo'/>
   <h1 style={styles.hd}>Higal Ekombe</h1>
   <p style={styles.pa}>(CP)</p>
   </div>
   <div>  <img src={ken} alt='photo'/>
   <h1 style={styles.hd}>Ken Gitatu</h1>
   <p style={styles.pa}>(NE)</p>
   </div>
   <div style={styles.hd}> <img src={iren} alt='photo'/>
   <h1 style={styles.hd}>Irene Luni</h1>
   <p style={styles.pa}> (CFO)</p>
   
   </div>
   <div> <img src={mu} alt='photo'/>
   <h1 style={styles.hd}>Kelvin Musyoki</h1>
   <p style={styles.pa}>(COO)</p>
   </div>
    </div>
    </div>
  )
}
const styles =  {
  pa: {
    color: "white",
    textAlign: "Center",
    lineHeight: "0px",
    fontWeight: "bold",
    fontSize: "45px"
  },
  hd: {
    fontSize: "18px"
  },
  headr: {
    color: "blue",
    fontSize: "60px"

  }

}


export default Home;
