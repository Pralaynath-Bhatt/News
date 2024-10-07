import React, { useState } from 'react'
import "./nav.css"
import img from "./logo.png"
 const Navbar = ({setCategory,setSelectedCountry,setSearch}) => {
  let [query,setQuery]= useState("");
  return (
    
    <nav className="navbar navbar-expand-lg bg-dark" style={{ position: "fixed", zIndex: "3", width: "100%", padding: "10px 20px" }}>
    <div className="container-fluid">
      <img className="logo" src={img} alt='logo' style={{ height: "50px", width: "100px", marginRight: "20px",borderRadius:"15px" }} />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {["general", "technology", "business", "health", "science", "sports", "entertainment"].map((category) => (
            <li className="nav-item" key={category}>
              <a className="nav-link" onClick={() => setCategory(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</a>
            </li>
          ))}
        </ul>
      </div>
  
      <div className="search-container" style={{ borderRadius: "20px", display: "flex", alignItems: "center", backgroundColor: '#ffffff', padding: "5px 10px" }}>
        <input
          type="search"
          placeholder='Search'
          onChange={(e) => setQuery(e.target.value)}
          style={{
            color: "black",
            borderRadius: "10px",
            border: "1px solid #ccc",
            backgroundColor: "white",
            height: "40px",
            padding: "0 10px",
            outline: "none"
          }}
        />
        <button
          onClick={() => setSearch(query)}
          style={{
            borderRadius: "10px",
            backgroundColor: "#e6e6e6",
            border: "none",
            height: "40px",
            padding: "0 15px",
            cursor: "pointer",
            marginLeft: "5px",
          }}
        >
          🔍
        </button>
      </div>
    </div>
  </nav>
  
  )
}
export default Navbar;