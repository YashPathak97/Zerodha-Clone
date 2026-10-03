import { DASHBOARD_URL } from "./config";
import React, { useEffect } from "react";

function KiteRedirect() {
  useEffect(() => {
    window.location.replace(`${DASHBOARD_URL}/`);
  }, []);

  return <p>Opening Kite...</p>;
}

export default KiteRedirect;