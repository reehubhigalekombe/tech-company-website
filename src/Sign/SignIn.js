import React, { useState } from 'react'

function SignIn() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === "admin" && password === "password") {
            setMessage("Sign In Successful")
        }
        else {
            setMessage("Invalid Username or Password")
        }
    }
    setUsername("")
    setPassword("")
    return (
        <div id='sign-in-bar' style={styles.signInBar}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label style={styles.label}>Username:
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)
                    } placeholder='username' required
                        style={styles.input}
                    />
                </label>
                <label> Password:
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}
                        required style={styles.input}
                    />
                </label>
                <button type='submit' style={styles.button}>Sign In</button>

            </form>
            <p>{message}</p>
        </div>
    )
}
const styles = {
    input: {
        width: "93%",
        padding: "5px",
        margin: "5px 0",



    },
    label: {
        textAlign: "justify",
        fontWeight: "bold",

    },
    signInBar: {
        width: "250px",
        margin: "40px auto",
        padding: "10px",
        border: "1px solid-black",
        textAlign: "justify"
    },
    button: {
        width: "93%",
        padding: "5px",
        alignItems: "center",
        justifyContent: "center",
    },

}
export default SignIn
