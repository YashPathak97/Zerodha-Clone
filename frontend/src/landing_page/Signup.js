import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { API_URL, DASHBOARD_URL } from "../config";  // the port your dashboard runs on

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post(`${API_URL}/signup`, form, { withCredentials: true });
      window.location.href = DASHBOARD_URL;     // cookie is set, go to the dashboard
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container" style={{ maxWidth: 400, marginTop: 80 }}>
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Password (6+ characters)"
          minLength={6}
          onChange={handleChange}
          required
        />
        {error && <p className="text-danger">{error}</p>}
        <button className="btn btn-primary w-100">Create account</button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;