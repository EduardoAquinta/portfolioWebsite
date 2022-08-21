import YoutubeEmbed from "./YoutubeEmbed";

const Home = () => {

    //text for the Home page
    return (
        <>
        <div className="home">
            <h2>Software Engineer in the making</h2>
            <p className="about-me">I am a creative, articulate, and passionate junior software engineer. I have worked on a wide variety of projects in my life, from running Music Festivals to coding a Retro Arcade game.<br></br> Currently I am running self-generated projects after my time at a coding bootcamp, looking to land my first tech role. </p>
            <p className="extra">Please feel free to have a look around my portfolio, and then contact me to dicuss whatever you would like!</p>
        </div>
        <div>
         <p className="extra">This is a video of my talk at the Lightening Talk fest at NorthCoders Bootcamp, where I describe my take on the evolution of AI.<br></br> 
         I include this to shopw my capacity to break complex ideas into digestable chunks, and also because I think it is a wonderful topic to discuss!</p>
         <YoutubeEmbed embedId="y3B_RGxM4Nk?t=3710" />
       </div>
       </>
    )
}

export default Home;