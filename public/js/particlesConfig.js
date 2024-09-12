// Este arquivo deve estar localizado em /public/js/particlesConfig.js

export const particlesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#39FF14'
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 3,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
    }
  },
  retina_detect: true
};

// Inicialização do particles.js
particlesJS('particles-js', particlesConfig);
