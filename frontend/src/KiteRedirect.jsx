
import React, { useEffect } from "react";

function KiteRedirect() {
  useEffect(() => {
    window.location.replace("http://localhost:3001/");
  }, []);

  return <p>Opening Kite...</p>;
}

export default KiteRedirect;