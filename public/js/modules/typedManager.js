// Módulo para gerenciar o estado do Typed.js
export const typedManager = (() => {
  let isTypedActive = true;
  let typed;
  let firstIterationComplete = false;
  let isFadeInComplete = false;

  const initTyped = () => {
    const options = {
      strings: ["Bem-vindo ao meu portfólio!", "Aqui você encontrará meus projetos.", "E conhecerá um pouco sobre mim.","Desfrute da experiência."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
      showCursor: false,
      cursorChar: '|',
      onStringTyped: (arrayPos, self) => {
        if (arrayPos === self.strings.length - 1) {
          firstIterationComplete = true;
        }
      },
      onComplete: () => {
        if (firstIterationComplete) {
          const typedOutput = document.getElementById('typed-output');
          typedOutput.classList.add('fade-out');

          // Espera o término da animação de fade out para esconder o elemento
          typedOutput.addEventListener('animationend', () => {
            typedOutput.style.display = 'none';
            const commandInput = document.getElementById('command-input');
            commandInput.classList.remove('hidden');
            commandInput.classList.add('fade-in');
            
            commandInput.placeholder = "Digite 'help' para listar os comandos...";
            
            commandInput.focus();
          });
        }
      }
    };

    // Inicializa o Typed.js com as opções definidas
    typed = new Typed('#typed-output', options);
  };

  const stopTyped = () => {
    if (isTypedActive && typed) {
      typed.stop();
      isTypedActive = false;
    }
  };

  const startTyped = () => {
    if (!isTypedActive && typed) {
      typed.start();
      isTypedActive = true;
    }
  };

  return {
    initTyped,
    stopTyped,
    startTyped,
    get isTypedActive() {
      return isTypedActive;
    }
  };
})();