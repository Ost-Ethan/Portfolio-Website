import Particles, { initParticlesEngine} from "@tsparticles/react";
import { loadPolygonPath } from "@tsparticles/path-polygon";
import { loadTrailEffect } from "@tsparticles/effect-trail";
import { loadAll } from "@tsparticles/all";
import { useEffect, useMemo, useState } from "react";



export default function Particle() {
    const [init, setInit] = useState(false);

    useEffect(() => {
  initParticlesEngine(async (engine) => {
    await loadAll(engine);
    await loadPolygonPath(engine);
    await loadTrailEffect(engine);
  }).then(() => {
    setInit(true);
  });
  console.log('ran useEffect')
    }, [])
  
    const particlesLoaded = async (container: any): Promise<void> => {
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

return init ? (
    <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options}/>

  ) : null


;}