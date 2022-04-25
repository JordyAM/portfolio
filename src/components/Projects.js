import React from 'react';
import { Animated } from 'react-animated-css';
import './Projects.css'

// const [visible, setVisible] = useState(null);


function Projects(props) {
    return (
        <div>
           <Animated
           unmountOnExit
           animationIn="fadeInDown" 
           animationOut='fadeOutDown' 
           isVisible={true}> <h1>Here are a few projects I've worked on!</h1></Animated>
           <div className="site-container"><h1>A Final Fantasy XIV Character Viewer</h1>
           <img className='project-image' src="images/FFXIVViewer.png"></img>
           <a className="project-url" href="https://github.com/JordyAM/ffxiv-viewer"><h3>Code & Docs</h3></a>
           <a className="project-url" href="https://peaceful-williams-d162bf.netlify.app/"><h3>App</h3></a></div>
           <div className="site-container"><h1>Collectus API</h1>
           <img className='project-image' src="images/Collectus.png"></img>
           <a className="project-url" href="https://github.com/Team-This-Is-Fine/collectus-frontend"><h3>Code & Docs</h3></a>
           <a className="project-url" href="https://animated-pony-a34044.netlify.app/"><h3>App</h3></a></div>
        </div>
    );
}

export default Projects;