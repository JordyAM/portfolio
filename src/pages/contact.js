import { motion as m } from "framer-motion";
import { container, item } from "animation";

export default function Contact(){
    return (
        <m.main
        initial={{ y: "100%" }} 
        animate={{ y: "0%" }}
        transition= {{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }} 
        className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16">
            <div className="my-72 p-1 overflow-hidden">
                <m.h1 
                animate={{ y: 0 }}
                initial={{ y: "100%" }} 
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-6xl text-center lg:text-right lg:text-6xl">Lets' Talk</m.h1>
            </div>
            <div className="flex gap-20">
                <div className="lg:text-2xl text-base">
                    <h4>Find Me Here:</h4>
                </div>
                <div className="lg:text-1xl text-1xl">
                    <m.ul className='flex gap-10' variants={container} initial='hidden' animate='show'>
                        <div className="overflow-hidden">
                            <m.li variants={item} className="pb-2"> 
                                <a href="https://www.linkedin.com/in/jmclean115/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />LinkedIn </a></m.li>
                        </div>
                        <div className="overflow-hidden">
                            <m.li variants={item}className="pb-2"><a  href="https://github.com/JordyAM"><img className= 'git-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" /></a></m.li>
                        </div>
                    </m.ul>
                </div>
            </div>
        </m.main>
    );
}