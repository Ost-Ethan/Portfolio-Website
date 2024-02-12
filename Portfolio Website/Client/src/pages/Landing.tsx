import "../App.css";
import Portrait from "../components/Portrait";
import { Header } from "../components/Header";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine} from "@tsparticles/react";
import { loadPolygonPath } from "@tsparticles/path-polygon";
import { loadTrailEffect } from "@tsparticles/effect-trail";
import { type Container} from "@tsparticles/engine"
import { loadAll } from "@tsparticles/all";


export default function App() {

  const [init, setInit] = useState(false);

  useEffect(() => {
initParticlesEngine(async (engine) => {
  await loadPolygonPath(engine);
  await loadTrailEffect(engine);
  await loadAll(engine);
}).then(() => {
  setInit(true);
});
console.log('ran useEffect')
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

const options: any = useMemo(() => ({
  background: {
      color: {
          value: "#0d47a1",
      },
  },
  fpsLimit: 120,
  interactivity: {
      events: {
          onClick: {
              enable: true,
              mode: "push",
          },
          onHover: {
              enable: true,
              mode: "repulse",
          },
          resize: true,
      },
      modes: {
          push: {
              quantity: 4,
          },
          repulse: {
              distance: 200,
              duration: 0.4,
          },
      },
  },
  particles: {
      color: {
          value: "#ffffff",
      },
      links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
      },
      move: {
          direction: "none",
          enable: true,
          outModes: {
              default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              area: 800,
          },
          value: 80,
      },
      opacity: {
          value: 0.5,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 1, max: 5 },
      },
  },
  detectRetina: true,
}), [])

 return (
    <div>
    { init && <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options}/>}
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
