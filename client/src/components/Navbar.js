import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="nav nav-black">
      <div className="nav-left">
        <h2 className="logo">NETFLIX</h2>
      </div>

      <div className="nav-right">
        <button
          className="signout-btn"
          onClick={() => navigate("/")}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Navbar;