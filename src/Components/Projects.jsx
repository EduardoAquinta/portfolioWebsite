import arcade from "../assets/arcade.png"
import frontend from "../assets/frontend.png"
import backend from "../assets/backend.png"
import final from "../assets/final.png"

const Projects = () => {
    return (
        <div class="my-projects">
        <h2>My Projects</h2>        
        <div class="projects">
  <div class="box box1"><img src={arcade} alt="arcade classic"/><div>Space Guardians</div></div>
  <div class="box box2"><img src={frontend} alt="front-end"/><div>Front End</div></div>
  <div class="box box3"><img src={backend} alt="back-end"/><div>Back End</div></div>
  <div class="box box4"><img src={final} alt="arcade classic"/><div>Northcoders Final Project</div></div>
</div>
</div>
    )
}

export default Projects;