import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Knowledges from './pages/Knowledges.jsx';
import NotFound from './pages/NotFound.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  exact="true" element={<Home />} />
          <Route path="/competences" exact="true" element={<Knowledges />} />
          <Route path="/portfolio" exact="true" element={<Portfolio />} />
          <Route path="/contacts" exact="true" element={<Contact />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;