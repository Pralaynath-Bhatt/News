import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Bookmarks from './Components/bookmarks';

const App = () => {
  const [category, setCategory] = React.useState('general');
  const [search, setSearch] = React.useState('');

  return (
    <Router>
      <Navbar setCategory={setCategory} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Content category={category} search={search} />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </Router>
  );
};

export default App;
