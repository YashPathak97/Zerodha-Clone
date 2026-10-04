import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL, DASHBOARD_URL } from "../config";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post(
        `${API_URL}/login`,
        form,
        { withCredentials: true }
      );

      // Login successful: open Dashboard
      window.location.assign(DASHBOARD_URL);
    } catch (err) {
      console.error("Login error:", err);

      setError(
        err.response?.data?.message ||
        err.message ||
        "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container"
      style={{ maxWidth: 400, marginTop: 80 }}
    >
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        {error && (
          <p className="text-danger">{error}</p>
        )}

        <button
          className="btn btn-primary w-100"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-3">
        New here? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
}

export default Login;
