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
          <div>Space Guardians (Aquinta Mix)
            <ProjectButton href="https://github.com/EduardoAquinta/SpaceGuardiansAquintaMix" title="source code" />
          </div>
        </div>
        <div className="box box2">
          <img src={frontend} alt="front-end" />
          <div>Front End</div>
        </div>
        <div className="box box3">
          <img src={backend} alt="back-end" />
          <div>Back End</div>
        </div>
        <div className="box box4">
          <img src={final} alt="arcade classic" />
          <div>Northcoders Final Project</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
