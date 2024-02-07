import "../App.css";
import Portrait from "../components/Portrait";
import { Header } from "../components/Header";

export default function App() {

  return (
    <>
      <Header></Header>
      <div className="flex justify-between">
         <Portrait></Portrait>
        {/*<AboutMe></AboutMe>
        <Skills></Skills>
        <PersonalProjects></PersonalProjects>
        <Contact></Contact> */}
      </div>
      </>
  );
}
