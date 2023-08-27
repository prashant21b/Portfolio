
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Screen/Home';
import { About } from './Screen/About';
import { Contact } from './Screen/Contact';
import { Project } from './Screen/Project';
import { SkillsPage } from './Screen/SkillsPage';
import { Education } from './Screen/Education';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about"  element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/skills" element={<SkillsPage/>}/>
    <Route path="/education" element={<Education/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
