import Skill from './Skill'
import Phaser from "../assets/Phaser.png"

function Skills() {
    return (
        <div className="skills">
                <h2>These are some of the technologies I have experience with...</h2>
            <div className="skillsGrid">
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                <Skill source="https://upload.wikimedia.org/wikipedia/commons/1/1d/Cubase_logo.svg"alt="The logo icon for Cubase" title="Cubase"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
                <Skill source={Phaser} alt="The logo icon for Cubase" title="Cubase"/>
            </div>
            <p>I also have extensive experience as an IT engineer, able to configure and run Linux/Windows, and MacOS systems. </p>            
        </div>
    )
}
export default Skills