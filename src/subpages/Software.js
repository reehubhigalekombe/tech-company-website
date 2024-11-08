import React from 'react';
import "../styles/software.css";
import { Link } from 'react-router-dom';
import Pec from "../assets/softi.jpg";
import ken from "../assets/Ken.jpg";
import iren from "../assets/ireene.jpg";
import mu from "../assets/msy1.jpg";
import pic from "../assets/shutterstock.jpg"
import ceo from "../assets/CEO.jpg";
function Software() {
  return (
    <div className='software'>
      <div className='top' style={{backgroundImage: `url(${Pec})`}}>
<h1 className='heda'>We Provide Sollutions to Critical  Aspects of Software Development </h1>
<p className='paragraph'>G-SPace has well expireienced proffesionals versed with Full IT Servies to help your Bussiness grow</p>
<div className='button'>

<Link to="/partnerships">
<button>Partners&gt;</button>
</Link>
<Link to="/client">
<button>More &gt;&gt;</button>
</Link>

<Link to="/blog">
<button>Project in Progress&gt;&gt;&gt;</button>
</Link>
</div>
      </div>
      <div className='middle'>
      <div className='col'>
      <img src={ken} alt='ne'/>
      <h1 style= {styles.header}>Ken Gitau</h1>
      <h1 style= {styles.para}>Network Engineer (NE)</h1>
      </div>
      <div  className='col'>
      <img src={ceo} alt='ceo'/>
      <h1 style= {styles.header}>Higal Ekombe</h1>
      <h1 style= {styles.para}>Chief Technology Officer (CTO)</h1>
        </div>
      <div  className='col'>     <img src={mu} alt='ceo'/>
      <h1 style= {styles.header}>Kelvin Musyoki</h1>
      <h1 style= {styles.para}>Sales and Marketing Officer (SMO)</h1>
      </div>
      <div  className='col'>     <img src={iren} alt='ire'/>
      <h1 style= {styles.header}>Irene Mueni</h1>
      <h1 style= {styles.para}>Chief Operations Officer (COO)</h1>
      </div>
      </div>
     
      <div className='bottom'>
        <h1 style={styles.far}>
        Take a look at how we have helped Kenyas' Top Leading Companies to Achieve their Biggest <strong>Goals!!!!</strong>
        </h1>
        <div>
        <Link to="/client">
        <button className='burron'>Customer Stories</button>
        </Link>
        </div>
       
        </div>
      </div>
  )
}
const styles = {
  header: {
    color: "black",
    textAlign: "left",
    marginTop: "0px",
    fontSize: "18px",
    textDecoration: "none",
    lineHieght: "0px"
  },
  para: {
    color: "blue",
    textAlign: "left",
    marginTop: "0px",
    fontSize: "16px",
    textDecoration: "none",
    lineHieght: "0px"
  },
  far: {
    textAlign: "center",
    fontSize: "39px",
    paddingTop: "20px",
    color: "black"
  }
}
export default Software;
