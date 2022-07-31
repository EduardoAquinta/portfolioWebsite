import arcade from '../assets/arcade.png';
import frontend from '../assets/frontend.png';
import backend from '../assets/backend.png';
import final from '../assets/final.png';
import ProjectButton from './ProjectButton';

const Projects = () => {
  return (
    <div className="my-projects">
      <h2>My Projects</h2>
      <div className="projects">
        <div className="box box1">
          <img src={arcade} alt="arcade classic" />
          <div className='project-text'>
            Space Guardians (Aquinta Mix)          </div>

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
          <div className='project-text'>Front End</div>
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
          <div className='project-text'>Back End</div>
          <p>
            <ProjectButton href="https://edenv1.herokuapp.com/api" title="live app" />
            <ProjectButton href="https://github.com/EduardoAquinta/backendAppV1" title="source code"/>
          </p>
        </div>
        <div className="box box4">
          <img src={final} alt="arcade classic" />
          <div className='project-text'>Northcoders Final Project</div>
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
