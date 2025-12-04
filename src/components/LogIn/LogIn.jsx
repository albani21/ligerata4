import React, { useState } from "react";

function LogIn() {
  const [status, setStatus] = useState(false);

  function toggleLogin() {
    if (status == false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }

  return <h2 onClick={toggleLogin}>{status ? "Logout" : "LogIn"}</h2>;
}

export default LogIn;
