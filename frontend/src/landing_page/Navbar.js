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
        });

        if (active) {
          setIsLoggedIn(response.ok);
        }
      } catch (error) {
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
      await fetch(`${API_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      setIsLoggedIn(false);
      navigate("/signup");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top" style={{ backgroundColor: "#ffff" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="/media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!checkingAuth && !isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">Support</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href={DASHBOARD_URL}>
                  <img src="/media/images/kiteLogo.png" alt="Kite" style={{ width: "28px" }} />
                </a>
              </li>
              {!checkingAuth && isLoggedIn && (
                <li className="nav-item">
                  <button type="button" className="nav-link active" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;