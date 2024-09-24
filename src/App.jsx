import React, { useState } from 'react';
import Navbar from "./Components/Navbar.jsx";
import Content from "./Components/Content.jsx";
 
 const App = () => {
  const [category,setCategory] = useState("general")
  return (  
    <div>
    <Navbar setCategory = {setCategory}/>
    <Content category = {category}/>
    </div>

  )
}
export default App;