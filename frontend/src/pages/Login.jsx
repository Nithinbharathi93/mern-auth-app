import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DOMAIN_NAME = import.meta.env.VITE_DOMAIN;

const Login = () => {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`http://localhost:5234/api/auth/login`,
                {username, email, password}, 
                {withCredentials: true}
            )
            alert("Login Successful");
            navigate("/dashboard");
        } catch (error) {
            console.error(error.response.data);
            alert("Login Failed..!");
        }
    }

    return (
        <>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Name" value={username} onChange={(e) => setusername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;