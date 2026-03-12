import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/authSlice";
import "./Login.css";

const Register = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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

    const { name, email, password, confirmPassword } = formData;

    if(password !== confirmPassword){
      setError("Passwords do not match")
      return
    }

    const user = { name, email, password }

      // check user exist before or not 

      const getUsersData=JSON.parse(localStorage.getItem('users')) || [];

      const userExist=getUsersData.find(u=>u.email ===email)

      if(userExist){
        alert("User already exist")
        return;
      }


    // Redux register action
    dispatch(register(user))

    alert("Registration successful!")

    navigate("/login")

  }

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

        <p className="register-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </form>

    </div>
  )
}

export default Register