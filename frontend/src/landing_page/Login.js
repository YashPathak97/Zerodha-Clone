import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = "http://localhost:3002";
const DASHBOARD_URL = "http://localhost:3001";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post(`${API}/login`, form, { withCredentials: true });
      window.location.href = DASHBOARD_URL;
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container" style={{ maxWidth: 400, marginTop: 80 }}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        {error && <p className="text-danger">{error}</p>}
        <button className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3">New here? <Link to="/signup">Create an account</Link></p>
    </div>
  );
}

export default Login;