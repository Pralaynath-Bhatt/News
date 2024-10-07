import React, { useState } from 'react'
import "./nav.css"
import img from "./logo.png"
 const Navbar = ({setCategory,setSelectedCountry,setSearch}) => {
  let [query,setQuery]= useState("");
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{position:"fixed",zIndex:"3", width:"100%"}}>
  <div className="container-fluid">
    <img className="logo" src={img} alt='logo' style={{height:"50px",width:"100px"}}></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("general")} >General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("technology")}>Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("business")}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("health")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("science")}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</a>
        </li>    
      </ul>
    </div>
    
                <div style={{borderRadius:"20px",height:"40px",display:"flex",backgroundColor:'white'}}>
                <input type="search" placeholder='Search'
                onChange={(e)=>{setQuery(e.target.value)}}
                style={{color:"black",textSizeAdjust:"auto",borderRadius:"10px",borderStyle:"hidden",backgroundColor:"white",height:"40px"}}/>
                <button onClick={()=>{setSearch(query)}} style={{borderRadius:"50%",backgroundColor:"#e6e6e6"}}>🔍</button>
                </div>
  </div>
  </nav>
  )
}
export default Navbar;