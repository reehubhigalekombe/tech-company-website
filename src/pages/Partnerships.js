import React from 'react';
import google from "../assets/gug.png"
import KCB from "../assets/KCB.png";
import alibaba from "../assets/ali.png"
import equity from "../assets/images.png";
import host from "../assets/host.jpg"
import cop from "../assets/cop.jpeg";
import amazon from "../assets/ama.jpg";
import CBK from "../assets/cbk.jpeg";
import nbk from "../assets/nbk.jpeg";
import baroda from "../assets/baro.png"
import meta from "../assets/met.png";
import  micro from"../assets/micr.png";
import "../styles/partnership.css"
function Partnerships() {
  return (
    <div className='partnership'>
      <div className='partner-pat top'>
        <h1>Partnership</h1>
        <p>G-Space Technologies has partnered with quite a number of reknown Companies in the the African Continent and Globally.
        his has been attributed by Its better Service Delivery and Innonation aspects thatnare inline with Technology
       </p>
       <ul className='list'>
        <li className='lists'>Microsoft</li>
        <li className='lists'>Google</li>
        <li className='lists'>HostAfriCA</li>
        <li className='lists'>Meta</li>
        <li className='lists'>Alibaba</li>
        <li className='lists'>Amazon</li>
       </ul>
       <p>G-Space has also signed MoU with Financial Institutions in Kenya, the key aspects of the MoU was 
        to share resources, expertise, and solutions to enhance their technological capabilities ror them to remain competitive in the Industry</p>
        <p>They Include: - </p>
        <ul className='list'>
        <li className='lists'>Central Bank of Kenya (CBK)</li>
        <li className='lists'>Kenya Commercial Bank (KCB)</li>
        <li className='lists'>Equity Bank Group</li>
        <li className='lists'>National Bank of Kenya (NBK)</li>
        <li className='lists'>Coopertative Bank of Kenya (CBK)</li>
        <li className='lists'>Bank of Baroda</li>
      </ul>
      </div>

      <div className='partner-pat bottom'>
        <div className='bota'>
        <h1 style={{color: "blue" ,textAlign: "center"}}>G-Space Partners</h1>
           <ul >
          <li><a href= 'https://www.google.com'><img src={google} alt='google' style={styles.image}/></a>
          </li>
          <li><a href='https://www.amazon.com'><img src={amazon} alt='amazon' style={styles.image}/></a></li>
          <li><a href='https://www.alibaba.com'><img src={alibaba} alt='alibaba' style={styles.image}/></a></li>
          <li><a  href='https://www.hostafrica.ke'><img src={host} alt='alibaba' style={styles.image}/></a></li>
          <li><a href='https://www.meta.com'><img src={meta} alt='meta' style={styles.image}/></a></li>
          <li><a href= 'https://www.microsoft.com' ><img src={micro} alt='micro' style={styles.image}/></a></li>
        </ul>
        </div>
        <div className='bott'>
        <ul>
        <li><a href='https://www.centralbank.go.ke/'><img src={CBK} alt='kcb' style={styles.image}/></a></li>
          <li> <a href='https://ke.kcbgroup.com' target='_blank' rel='noopener noreferrer'><img src={KCB} alt='kcb' style={styles.image}/></a></li>
          <li> <a href='https://equitygroupholdings.com/'><img src={equity} alt='kcb' style={styles.image}/></a></li>
          <li><a href='https://www.nationalbank.co.ke/'><img src={nbk} alt='kcb' style={styles.image}/></a></li>
          <li><a href='https://www.co-opbank.co.ke/'><img src={cop} alt='kcb' style={styles.image}/></a></li>
          <li><a href='https://www.bankofbarodakenya.co.ke/'><img src={baroda} alt='kcb' style={styles.image}/></a></li>
        </ul>
        <h1>Partner With Us  Via</h1>
        <button className='buttoni'>Partner with US!!!</button>
        </div>
      </div>
    </div>
  )
}
const styles ={ 
  image: {
    width: "100px",
    borderRadius: "50px",
  },
  }

export default Partnerships
