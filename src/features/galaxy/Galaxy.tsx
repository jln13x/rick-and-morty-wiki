import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const options: NonNullable<React.ComponentProps<typeof Particles>["options"]> =
  {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        resize: false,
      },
    },
    particles: {
      color: {
        value: "#fff",
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "top-right",
        enable: true,
        outModes: {
          default: "destroy",
        },
        random: false,
        speed: 0.5,
        straight: true,
      },
      number: {
        density: {
          enable: true,
          area: 900,
        },
        value: 100,
      },
      opacity: {
        value: 0.1,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

export const Galaxy = () => {
  const particlesInit = useCallback<
    NonNullable<React.ComponentProps<typeof Particles>["init"]>
  >(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        className="absolute z-[9]"
        init={particlesInit}
        options={options}
      />
      <div className="absolute inset-0 z-[7] bg-gradient-to-r from-purple-900 to-black"></div>
      <div className="absolute inset-0 z-[8] bg-gradient-to-bl from-indigo-600 to-black opacity-40"></div>
      <div className="absolute inset-0 z-10 bg-black/40"></div>
    </div>
  );
};
