import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { API_URL, DASHBOARD_URL } from "../config";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    let active = true;

    async function checkAuth() {
      setCheckingAuth(true);

      try {
        const response = await fetch(`${API_URL}/me`, {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        if (!response.ok) {
          if (active) {
            setIsLoggedIn(false);
          }
          return;
        }

        const data = await response.json();

        if (active) {
          setIsLoggedIn(Boolean(data.user));
        }
      } catch (error) {
        console.error("Auth check failed:", error);

        if (active) {
          setIsLoggedIn(false);
        }
      } finally {
        if (active) {
          setCheckingAuth(false);
        }
      }
    }

    checkAuth();

    return () => {
      active = false;
    };
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        console.error("Logout request failed:", response.status);
      }
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      setIsLoggedIn(false);
      navigate("/signup");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-white border-bottom sticky-top"
      style={{ height: "70px" }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            alt="Logo"
            style={{ width: "130px" }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">

            {/* Signup: show when user is logged out */}
            {!checkingAuth && !isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            )}

            {/* Login: show when user is logged out */}
            {!checkingAuth && !isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

            {/* Dashboard / Kite */}
            <li className="nav-item">
              <a
                className="nav-link"
                href={DASHBOARD_URL}
                aria-label="Open Dashboard"
              >
                <img
                  src="/media/images/kiteLogo.png"
                  alt="Kite"
                  style={{ width: "28px" }}
                />
              </a>
            </li>

            {/* Logout: show only when logged in */}
            {!checkingAuth && isLoggedIn && (
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link active"
                  onClick={handleLogout}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
