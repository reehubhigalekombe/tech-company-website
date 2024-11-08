import React, {useState} from 'react';
import "../styles/Auth.css"
function SignIn() {
const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
});
const handleChange = (e) => {
    setFormData({
        ...formData, [e.target.name]: e.target.value
    })
}
const handleSubmit = (e) => {
    e.preventDefault();
        console.log("Sign In Data:", formData)

}
  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>
                Username
            </label>
            <input type='text' value={formData.username} onChange={handleChange} required/>
        </div>
        <div className='form-goup'>
            <label>Email</label>
            <input type='email' value={formData.email} onChange={handleChange} reguired />
        </div>
<div className='form-group'>
    <label>Password</label>
    <input type='password' value={formData.password} onChange={handleSubmit} required />
</div>
<button type="submit" className='auth-button'>Sign In</button>
      </form>
    </div>
  )
}

export default SignIn;
