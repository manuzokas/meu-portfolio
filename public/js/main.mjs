import { typedManager } from './modules/typedManager.mjs';
import { commandManager } from './modules/commandManager.mjs';
import { particlesConfig } from './particlesConfig.mjs';

let isFadeInComplete = false; // Adicione esta variável

document.addEventListener('DOMContentLoaded', () => {
  particlesJS('particles-js', particlesConfig);

  typedManager.initTyped();

  const commandInput = document.getElementById('command-input');
  commandInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      typedManager.stopTyped();
      commandManager.executeCommand(event.target.value);
      event.target.value = '';
      event.preventDefault();
    }

    // Adicionando a funcionalidade de navegação com as setas do teclado
    const typedOutput = document.getElementById('typed-output');
    const commandItems = typedOutput.getElementsByClassName('command-item');
    let index = Array.from(commandItems).findIndex(item => item.classList.contains('active'));

    if (event.key === 'ArrowUp') {
      if (index > 0) {
        commandItems[index].classList.remove('active');
        commandItems[index - 1].classList.add('active');
      }
    } else if (event.key === 'ArrowDown') {
      if (index < commandItems.length - 1) {
        commandItems[index].classList.remove('active');
        commandItems[index + 1].classList.add('active');
      }
    }
  });

  commandInput.addEventListener('animationend', () => {
    if (!isFadeInComplete) {
      commandInput.focus();
      isFadeInComplete = true;
    }
  });
});
