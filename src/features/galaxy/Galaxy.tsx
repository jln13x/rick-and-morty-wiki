import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { GalaxyBackground } from "./GalaxyBackground";

const options: NonNullable<React.ComponentProps<typeof Particles>["options"]> =
  {
    fpsLimit: 120,
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
          default: "out",
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
        type: "square",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    preset: "stars",
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
      <GalaxyBackground />
    </div>
  );
};
