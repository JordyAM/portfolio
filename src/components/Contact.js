import React from 'react';
import './Contact.css'

function Contact(props) {
    return (
        <div className="contact-info">
            <h2>Contact me here:<br></br>
                <a className="email" href = "mailto:Jalexandemclean@Gmail.com">Jalexandermclean@Gmail.com
                </a>
            </h2>
            <h2>Or add me on LinkedIn and Github </h2>
            <a href="https://www.linkedin.com/in/jmclean115/"><img className='linked-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /> </a>
            <a  href="https://github.com/JordyAM"><img className= 'git-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" /></a>
           
        </div>
    );
}

export default Contact;