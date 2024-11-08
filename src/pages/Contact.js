import React from 'react';
import "../styles/contact.css";
import { Link } from 'react-router-dom';
import Po from "../assets/shutterstock.jpg";
import Facebook  from '@mui/icons-material/Facebook';
import X from "@mui/icons-material/X";
import YouTube from '@mui/icons-material/YouTube';
import  WhatsApp from '@mui/icons-material/WhatsApp';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
function Contact() {
  return (
    <div className='contact'>
      
      <div className='col-op top' style={{backgroundImage: `url(${Po})`}}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p > <Link to="/" className='link'> 
      Home&gt;&gt;
        </Link></p>
      </div>
      <div className='col-op botto'>
      <div className='row11'>
        <form action='mailto: elonreaganp@gmail.com' id='contact-form' method='post'>
<h1>Hey be Free to Chat!!</h1>
<label htmlFor='name'>Full Name: <span className='required'>*</span>
<input type="text" name="name"  placeholder="full name" />
</label><br/>
<label htmlFor='email'>Email Address: <span className='required'>*</span>
<input type='email' name='email' placeholder='emailadress' />
</label><br/>
<label htmlFor='number'>Phone No.:<span className='required'>*</span>
<input type='tel'  name='tell' placeholder='+2542410---'/><br/>
</label>
<label htmlFor='textarea'>Enter Text:
  <textarea rows="4" cols="61">-write your message-</textarea>
</label><br/>

<label htmlForfile="file">Upload Domument: 
<input type='file' name='file'/>
</label><br/>
<button type='submit' >Submit</button>

        </form>
      </div>
      <div className='row12'>
<h1 style={styles.socialMedia}>Our Social Media Platforms</h1>
<p>gspace@instagramtechnologies</p>
<p><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' className='instagram'><Instagram/> </a></p>
<p >gspace@facebook</p>
<p><a href='https://m.facebook.com/higal.ekombe.3/' target='_blank' rel='noopener noreferrer' className='facebook'><Facebook/></a></p>
<p >gpaceo@X</p>
<p><a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' className='x'><X/></a></p>
<p >youtube@gspace</p>
<p><a href='https://youtube.com/@reagan3938?si=lgaVMxmyg7eJ_gBs' target='_blank' rel='noopener noreferrer' className='youtube'><YouTube/> </a></p>
<p >gspace @linkedInspace</p>
 <p><a href='https://www.linkedin.com/in/higal-ekombe-83172b278/' target='_blank' rel='noopener noreferrer' className='linkedin'><LinkedIn/></a></p>
 <p>Gpsace@whatsapp</p>
 <p > <a href='https://wa.me/+254742106109' target='_blank' rel='noopener noreferer' className='whatsapp'><WhatsApp/>  </a>
        </p>
      </div>
      </div>
    </div>
  )
}
const styles = {
  heading: {
    color: "white",
    fontSize: "55px"
  },
  socialMedia: {
    color: "blue",
    textAlign: "center"
    
}
}
export default Contact
