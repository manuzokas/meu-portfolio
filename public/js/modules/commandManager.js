//funçoes auxiliares

//função auxiliar para adicionar a classe 'active' ao primeiro item de comando
function addActiveClass() {
  const commandItems = document.getElementById('typed-output').getElementsByClassName('command-item');
  if (commandItems.length > 0) {
    commandItems[0].classList.add('active');
  }
}

//função auxiliar para criar um item de comando
function createCommandItem(text, classes) {
  const span = document.createElement('span');
  span.textContent = text;
  classes.forEach(cls => span.classList.add(cls));
  return span;
}


//modulo para gerenciar os comandos
export const commandManager = (() => {
  const commandHandlers = {
   'about': () => {
    console.log("Executando comando 'about'");
    const typedOutput = document.getElementById('typed-output');
    typedOutput.textContent = '';
    const aboutSpan = document.createElement('span');
    aboutSpan.classList.add('command-item', 'command-hover');
    typedOutput.appendChild(aboutSpan);

    const message = 'Sou um desenvolvedor com paixão por criar experiências interativas.';
    let i = 0;
    //aplicando e personalizando o efeito de digitação automática
    const typingEffect = setInterval(() => {
        if (i < message.length) {
        aboutSpan.textContent += message.charAt(i);
        i++;
        } else {
        clearInterval(typingEffect);
        
        // Adicionando a classe 'active' ao primeiro item de comando
        addActiveClass();
        }
    }, 50); // Ajuste a velocidade de digitação alterando este valor
    },

    'projects': () => {
      console.log("Executando comando 'projects'");
      const typedOutput = document.getElementById('typed-output');
      typedOutput.textContent = '';
      let projects = ['Projeto 1', 'Projeto 2', 'Projeto 3']; // Adicione seus projetos aqui
      projects.forEach(project => {
        const projectSpan = document.createElement('span');
        projectSpan.textContent = `> ${project}`;
        projectSpan.classList.add('project-item', 'command-hover', 'command-item');
        typedOutput.appendChild(projectSpan);
        typedOutput.appendChild(document.createElement('br'));
      });

      // Adicionando a classe 'active' ao primeiro item de comando
      addActiveClass();
    },
    'skills': () => {
      console.log("Executando comando 'skills'");
      const typedOutput = document.getElementById('typed-output');
      typedOutput.textContent = '';
      let skills = ['Skill 1', 'Skill 2', 'Skill 3']; // Adicione suas habilidades aqui
      skills.forEach(skill => {
        const skillSpan = document.createElement('span');
        skillSpan.textContent = `> ${skill}`;
        skillSpan.classList.add('skill-item', 'command-hover', 'command-item');
        typedOutput.appendChild(skillSpan);
        typedOutput.appendChild(document.createElement('br'));
      });

      // Adicionando a classe 'active' ao primeiro item de comando
      addActiveClass();
    },
    'contact': () => {
      console.log("Executando comando 'contact'");
      const typedOutput = document.getElementById('typed-output');
      typedOutput.textContent = '';
      let contacts = ['E-mail: manuella.rodrigues.dev@gmail.com', 'Telefone: (53) 9 8466-7530', 'LinkedIn: linkedin.com/in/manuzokas']; // Adicione suas informações de contato aqui
        contacts.forEach(contact => {
          const contactSpan = document.createElement('span');
          contactSpan.textContent = `> ${contact}`;
          contactSpan.classList.add('contact-item', 'command-hover', 'command-item');
          typedOutput.appendChild(contactSpan);
          typedOutput.appendChild(document.createElement('br'));
        });

      // Adicionando a classe 'active' ao primeiro item de comando
      addActiveClass();
    },
    'github': () => {
      console.log("Executando comando 'github'");
      const typedOutput = document.getElementById('typed-output');
      typedOutput.textContent = '';
      const githubSpan = document.createElement('span');
      githubSpan.textContent = 'Você pode acessar meus repositórios aqui: link do git';
      githubSpan.classList.add('command-item', 'command-hover');
      typedOutput.appendChild(githubSpan);

      // Adicionando a classe 'active' ao primeiro item de comando
      addActiveClass();
    },
    'help': () => {
      console.log("Executando comando 'help'");
      const typedOutput = document.getElementById('typed-output');
      typedOutput.textContent = '';
      Object.keys(commandHandlers).forEach(command => {
        const commandSpan = document.createElement('span');
        commandSpan.textContent = `> ${command}`; // Adicionado o símbolo > aqui
        commandSpan.classList.add('command-item', 'command-hover');
        typedOutput.appendChild(commandSpan);
        typedOutput.appendChild(document.createElement('br'));
      });
      typedOutput.style.display = 'block';
      typedOutput.classList.remove('fade-out');

      // adicionando a classe 'active' ao primeiro item de comando para iniciar o controle pelas setas
      addActiveClass();
    }
    // Adicione mais comandos conforme necessário
  };  

const handleCommand = (command) => {
  // Verifica se o comando está vazio (ou apenas espaços em branco) e não faz nada
  if (!command.trim()) {
    return;
  }

  const handler = commandHandlers[command.toLowerCase()];
  const commandOutput = document.getElementById('typed-output');
  if (handler) {
    console.log(`Executando comando: ${command}`);
    handler();
    commandOutput.classList.add('command-output');
    commandOutput.classList.remove('command-not-recognized'); // Remove a classe se estiver aplicada
  } else {
    commandOutput.textContent = 'Comando não reconhecido.';
    commandOutput.classList.add('command-output', 'command-not-recognized'); // Adiciona a nova classe
  }
};

return {
  commandHandlers,
  handleCommand
};
})();

