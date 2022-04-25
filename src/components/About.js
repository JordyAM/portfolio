import React from 'react';
import './About.css'
import 'animate.css'
import {Animated} from "react-animated-css"

function About(props) {
    return (
        <div className='about'>
            
            <div className='text'>
            <h2>About Me</h2>
                <h3>
                    Hi, I'm Jordan McLean, a full stack software engineer! I'm New York based, highly motivated, and striving to
                    exceed expectations. With 10+ years in retail and customer relations. I feel that team building, and collaboration is key and my main focus.
                    
                </h3>
                </div>
        
        <div className='image'>
        <img className="profile" src='images/profilephoto.jpg' />
        </div>
        </div>
    );
}

export default About;