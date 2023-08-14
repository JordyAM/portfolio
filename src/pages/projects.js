import { motion as m } from "framer-motion";
import { Container, item } from "postcss";

export default function projects() {
  return (
    <m.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16"
    >
      <div className="mt-48 p-1 overflow-hidden">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl text-center lg:text-right lg:text-6xl"
        >
          My Projects
        </m.h1>
      </div>
      <div>
        <h1>Here are a few projects I've worked on!</h1>
        <div className="site-container">
          <h1>A Final Fantasy XIV Character Viewer</h1>
          <img className="object-contain h-96 w-96" src="FFXIVViewer.png"></img>
          <a
            className="project-url"
            href="https://github.com/JordyAM/ffxiv-viewer"
          >
            <h3>Code & Docs</h3>
          </a>
          <a className="project-url" href="https://ffxiv-viewer.netlify.app/">
            <h3>App</h3>
          </a>
        </div>
        <div className="site-container">
          <h1>Collectus API</h1>
          <img className="object-contain h-96 w-96" src="Collectus.png"></img>
          <a
            className="project-url"
            href="https://github.com/Team-This-Is-Fine/collectus-frontend"
          >
            <h3>Code & Docs</h3>
          </a>
          <a
            className="project-url"
            href="https://animated-pony-a34044.netlify.app/"
          >
            <h3>App</h3>
          </a>
        </div>
      </div>
    </m.main>
  );
}
