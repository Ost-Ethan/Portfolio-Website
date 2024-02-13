import "../App.css";
import Portrait from "../components/Portrait";
import { Header } from "../components/Header";
import Particle from "../components/Particle";
export default function App() {

  

 return (
    
    <div>
        <Particle></Particle>
      <Header></Header>
      <div className="flex justify-between">
         <Portrait></Portrait>
        {/*<AboutMe></AboutMe>
        <Skills></Skills>
        <PersonalProjects></PersonalProjects>
        <Contact></Contact> */}
      </div>
      </div>
  )}
