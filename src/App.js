import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import background from './Components/background.jpg'
import './App.css';
import Header from "./Components/Header"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    {/* <img id="main-back" src={background} alt="trees"/> */}
     <Header />
     <Navbar />
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contacts/>} />


     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
