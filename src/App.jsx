import React, { useState } from 'react';
import Navbar from "./Components/Navbar.jsx";
import Content from "./Components/Content.jsx";
 
 const App = () => {
  const [country,setSelectedCountry] = useState("us")
  const [category,setCategory] = useState("general")
  let [search,setSearch] = useState()
  return (  
    <div>
    <Navbar setCategory = {setCategory} setSelectedCountry={setSelectedCountry} setSearch={setSearch}/>
    <Content category = {category} country ={country} search={search}/>
    </div>

  )
}
export default App;