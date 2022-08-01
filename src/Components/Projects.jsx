import arcade from '../assets/arcade.png';
import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';
import final from '../assets/final.png';
import ProjectButton from './ProjectButton';


//Main project page creation, incluing seperate cards/boxes for each project
const Projects = () => {
  return (
    <div className="my-projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects">
        <div className="box box1">
          <img src={arcade} alt="arcade classic" />
          <div className='project-text'>
            <strong>Space Guardians (Aquinta Mix)</strong>
            <div>A version of Space Guardians, taken out of the React frontend,  that has a local high score table.</div>
            </div>

            <p>
              <ProjectButton href="" title="live app" />
              <ProjectButton
                href="https://github.com/EduardoAquinta/SpaceGuardiansAquintaMix"
                title="source code"
              />
            </p>
        </div>
        <div className="box box2">
          <img src={frontend} alt="front-end" />
          <div className='project-text'><strong>Front End</strong><div>My Front-end project for Northcoders, using React, HTML, and CSS.</div></div>
          <p>
            <ProjectButton href="https://edenv2.netlify.app" title="live app"/>
            <ProjectButton
              href="https://github.com/EduardoAquinta/nc-games"
              title="source code"
            />
          </p>
        </div>
        <div className="box box3">
          <img src={backend} alt="back-end" />
          <div className='project-text'><strong>Back End</strong><div>My Back-end project for Northcoders, using JS, Node, Express, Axios, and postGreSQL.</div></div>
          <p>
            <ProjectButton href="https://edenv1.herokuapp.com/api" title="live app" />
            <ProjectButton href="https://github.com/EduardoAquinta/backendAppV1" title="source code"/>
          </p>
        </div>
        <div className="box box4">
          <img src={final} alt="arcade classic" />
          <div className='project-text'><strong>Northcoders Final Project</strong><div>My Final Project with Northcoders, in a team of 5, using React, Firebase, Phaser, HTML, CSS and Axios. I focused mainly on the Phaser coding and game logic.</div></div>
          <p>
            <ProjectButton href="https://spaceguardians-d5924.web.app/" title="live app" />
            <ProjectButton href="https://github.com/EduardoAquinta/spaceguardians" title="source code"/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
