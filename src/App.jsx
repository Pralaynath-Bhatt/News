import React, { useState } from 'react';
import Navbar from "./Components/Navbar.jsx";
import Content from "./Components/Content.jsx";
 
 const App = () => {
  const [country,setSelectedCountry] = useState("us")
  const [category,setCategory] = useState("general")
  return (  
    <div>
    <Navbar setCategory = {setCategory} setSelectedCountry={setSelectedCountry}/>
    <Content category = {category} country ={country}/>
    </div>

  )
}
export default App;