import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev)=>({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || []

    const foundUser = users.find(
      (user)=> user.email === formData.email && user.password === formData.password
    )

    if(!foundUser){
      setError("Invalid email or password")
      return
    }

    // Redux login action
    dispatch(login(foundUser))

    navigate("/")

  }

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p className="register-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>

      </form>

    </div>
  )
}

export default Login