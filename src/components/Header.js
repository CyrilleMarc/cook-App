import React from "react";
import '../assets/styles/header.css'

function Header() {
  return (
    <div className="headerContainer">
        <img
          src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="cuillère d'épices"
        />
      <h1>Fun with Cook</h1>
    </div>
  );
}

export default Header;
