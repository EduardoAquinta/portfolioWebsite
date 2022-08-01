import rune from '../assets/rune.png';

//easter egg link to my netlabel

function Runebutton({href}) {
    return <a className="rune-button" href={href} target="_blank" rel="noopener noreferrer"> <img className="rune-button" src={rune} alt="rune"/></a>
}

export default Runebutton;