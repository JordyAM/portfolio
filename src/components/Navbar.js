import { Link, Route, Routes } from "react-router-dom";
import Projects from './Projects';
import Languages from './Languages';
import Contact from './Contact';
import About from './About';
import React from 'react'; 
export default function Navbar(){
    return (
        <nav className="textx-2xl font medium">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="Languages"><li> Known Langauges</li></Link>
                <Link to="/Projects"><li>Projects</li></Link>
                <Link to="/Contact"><li>Contact Me</li></Link>

            </ul>
            <Routes>
            <Route path='/' element={<About />}/>
            <Route path='/Languages' element={<Languages />}/>
            <Route path='/Projects' element={<Projects />}/>
            <Route path='/Contact' element={<Contact />}/>
        </Routes>
        </nav>
        
    )
}