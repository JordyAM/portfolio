import './App.css';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import React from 'react'; 
import Navbar from './components/Navbar';
function App() {
  
  return (
    <div>
    <Navbar /> 
    </div>
    // <div className="App">
    //   <nav className='nav-bar'>
    //     <h1><Link to="/">Home</Link></h1>
    //     <h1><Link to="/Languages">Known Languages</Link></h1>
    //     <h1><Link to="/Projects">My Projects</Link></h1>
    //     <h1><Link to="/Contact">Contact Me</Link></h1>
        
    //   </nav>

    //   <main className="main-container">
    //   <Routes>
    //     <Route path='/' element={<About />}/>
    //     <Route path='/Languages' element={<Languages />}/>
    //     <Route path='/Projects' element={<Projects />}/> 
    //     <Route path='/Contact' element={<Contact />}/>
    //     {/* <Redirect to="/" /> */}
    //   </Routes>
    //   </main>
    // </div>
  )
}

export default App;
