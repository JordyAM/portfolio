import React from 'react';
import './Languages.css'

function Languages(props) {
    return (
        <div className='skills'>
            <div><img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></div>
            <div><img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" /></div>
            <div><img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" /></div>
            <div><img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" /></div>
            <div><img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" /></div>
            <div><img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></div>
            <div><img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" /></div>
            <div><img className="skill-image" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" /></div>
        </div>
    );
}

export default Languages;