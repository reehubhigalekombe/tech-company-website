import React, {useState} from 'react'
import "../styles/Auth.css"
function Login() {
     const [formData, setFormData] = useState({
        email: "",
        password: ""
     });
     const handleChange = (e) => {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value
        })
     }
     const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData)
     }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
<label>
    Email
</label>
<input type='email' name='email' value={FormData.email} onChange={handleChange} required />
        </div>
<div className='form-group'>
    <label>Password</label>
    <input type='password' value={formData.password} onChange={handleChange}  required />
</div>
<button type='submit' className='auth-button'>Login</button>
      </form>
    </div>
  )
}

export default Login
