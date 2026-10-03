
import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import { FRONTEND_URL } from "../config";


function RequireAuth({ children }) {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/me`, {
      credentials: "include",
    })
      .then((response) => {
        setAuthorized(response.ok);
      })
      .catch(() => {
        setAuthorized(false);
      });
  }, []);

  if (authorized === null) {
    return <p>Checking login...</p>;
  }

  if (!authorized) {
    return (
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ minHeight: "80vh", textAlign: "center" }}
          >
            <h2>Login to see the Dashboard</h2>

            <button
              className="btn btn-primary mt-3"
              style={{ borderRadius: "10%" }}
              onClick={() => {
                window.location.href = `${FRONTEND_URL}/login`;
              }}
            >
              Go to Login
            </button>
          </div>
    );
  }

  return children;
}

export default RequireAuth;