import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback, useMemo } from 'react';
import { Engine } from 'tsparticles-engine';

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: 'transparent',
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        links: {
          enable: true,
          distance: 200,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 },
        },
        opacity: {
          value: { min: 0.3, max: 1 },
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
