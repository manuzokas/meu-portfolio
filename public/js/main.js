import { typedManager } from './modules/typedManager.js';
import { commandManager } from './modules/commandManager.js';
import { particlesConfig } from './particlesConfig.js';
import { addActiveClass, createCommandItem } from './modules/helpers.js'; // Importando funções auxiliares

let isFadeInComplete = false; // Declarando a variável

document.addEventListener('DOMContentLoaded', () => {
  typedManager.initTyped();

  const commandInput = document.getElementById('command-input');
  commandInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      typedManager.stopTyped();
      commandManager.executeCommand(event.target.value); // Atualizado para usar executeCommand
      event.target.value = '';
      event.preventDefault();
    }

    // Adicionando a funcionalidade de navegação com as setas do teclado
    const typedOutput = document.getElementById('typed-output');
    const commandItems = typedOutput.getElementsByClassName('command-item');
    let index = Array.from(commandItems).findIndex(item => item.classList.contains('active'));

    // Adicionando a funcionalidade de controlar as seções utilizando as setas
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
      isFadeInComplete = true; // Atualiza a flag após o foco
    }
  });
});
