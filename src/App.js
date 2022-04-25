import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Contact from './components/Contact';
import About from './components/About';
import React from 'react';

function App() {
  return (
    <div className="App">
      <nav className='nav-bar'>
        <h1><Link to="/">Home</Link></h1>
        <h1><Link to="/Languages">Known Languages</Link></h1>
        <h1><Link to="/Projects">My Projects</Link></h1>
        <h1><Link to="/Contact">Contact Me</Link></h1>

      </nav>

      <div className="main-container">
        
      </div>
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/Languages' element={<Languages />}/>
        <Route path='/Projects' element={<Projects />}/> 
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
