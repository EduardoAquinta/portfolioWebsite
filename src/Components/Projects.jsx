import arcade from "../Components/arcade.png"

const Projects = () => {
    return (
        <div class="my-projects">
        <h2>My Projects</h2>        
        <div class="projects">
  <div class="box box1"><img src={arcade} alt="arcade classic"/><div>Space Guardians</div></div>
  <div class="box box2"><div>Front End</div></div>
  <div class="box box3"><div>Back End</div></div>
  <div class="box box4"><div>Latest</div></div>
</div>
</div>
    )
}

export default Projects;