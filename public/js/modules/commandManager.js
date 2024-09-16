import { addActiveClass, createCommandItem } from './helpers.js';

const TYPING_SPEED = 50; // Velocidade de digitação em milissegundos

const commandHandlers = {
  'about': () => {
    console.log("Executando comando 'about'");
    const typedOutput = document.getElementById('typed-output');
    typedOutput.textContent = '';
    const aboutSpan = createCommandItem('', ['command-item', 'command-hover']);
    typedOutput.appendChild(aboutSpan);

    const message = 'Sou um desenvolvedor com paixão por criar experiências interativas.';
    let i = 0;

    const typingEffect = setInterval(() => {
      if (i < message.length) {
        aboutSpan.textContent += message.charAt(i);
        i++;
      } else {
        clearInterval(typingEffect);
        addActiveClass();
      }
    }, TYPING_SPEED);
  },

  'projects': () => {
    console.log("Executando comando 'projects'");
    const typedOutput = document.getElementById('typed-output');
    typedOutput.textContent = '';
    const projects = ['Projeto 1', 'Projeto 2', 'Projeto 3'];

    projects.forEach(project => {
      const projectSpan = createCommandItem(`> ${project}`, ['project-item', 'command-hover', 'command-item']);
      typedOutput.appendChild(projectSpan);
      typedOutput.appendChild(document.createElement('br'));
    });

    addActiveClass();
  },

  'skills': () => {
    console.log("Executando comando 'skills'");
    const typedOutput = document.getElementById('typed-output');
    typedOutput.textContent = '';
    const skills = ['Java', 'SQL e NOSQL Databases: PostgreSQL, MongoDB, Redis e etc...', 'Microservices', 'Spring Framework', 'Design Patterns', 'POO', 'Noções de Escalabilidade'];

    skills.forEach(skill => {
      const skillSpan = createCommandItem(`> ${skill}`, ['skill-item', 'command-hover', 'command-item']);
      typedOutput.appendChild(skillSpan);
      typedOutput.appendChild(document.createElement('br'));
    });

    addActiveClass();
  },

  'linkedin': () => {
  console.log("Executando comando 'linkedin'");
  const typedOutput = document.getElementById('typed-output');
  typedOutput.textContent = '';
  
  // Criação da seção para o LinkedIn
  const commandSection = document.createElement('div');
  commandSection.classList.add('command-section');
  
  // Adicionar um texto explicativo
  const description = document.createElement('p');
  description.textContent = 'Você pode me encontrar no LinkedIn. Confira o link abaixo:';
  description.classList.add('linkedin-description');
  
  // Adicionar um container para o ícone e o link
  const linkedinContainer = document.createElement('div');
  linkedinContainer.classList.add('linkedin-container');
  
  // Adicionar o link para o LinkedIn
  const linkedinUrl = 'https://linkedin.com/in/manuzokas';
  const linkedinLink = document.createElement('a');
  linkedinLink.href = linkedinUrl;
  linkedinLink.textContent = 'Meu LinkedIn';
  linkedinLink.classList.add('linkedin-link');
  linkedinLink.target = '_blank'; // Abre em uma nova aba
  linkedinLink.rel = 'noopener noreferrer'; // Segurança adicional
  
  // Adicionar o ícone do LinkedIn
  const linkedinIcon = document.createElement('img');
  linkedinIcon.src = 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg'; // Ícone azul do LinkedIn
  linkedinIcon.alt = 'LinkedIn Icon';
  linkedinIcon.classList.add('linkedin-icon');
  
  // Montar o container
  linkedinContainer.appendChild(linkedinIcon);
  linkedinContainer.appendChild(linkedinLink);
  
  // Montar a seção
  commandSection.appendChild(description);
  commandSection.appendChild(linkedinContainer);
  typedOutput.appendChild(commandSection);
  }
,
   'github': () => {
    console.log("Executando comando 'github'");
    const typedOutput = document.getElementById('typed-output');
    typedOutput.textContent = '';
    
    // Criar uma nova seção para o comando
    const commandSection = document.createElement('div');
    commandSection.classList.add('command-section');
    
    // Adicionar um texto explicativo
    const description = document.createElement('p');
    description.textContent = 'Você pode acessar meus repositórios e projetos no GitHub. Confira o link abaixo:';
    description.classList.add('command-description');
    
    // Adicionar o link para o GitHub
    const githubUrl = 'https://github.com/manuzokas';
    const githubLink = document.createElement('a');
    githubLink.href = githubUrl;
    githubLink.textContent = 'Meu GitHub';
    githubLink.classList.add('github-link');
    githubLink.target = '_blank'; // Abre em uma nova aba
    githubLink.rel = 'noopener noreferrer'; // Segurança adicional
    
    // Adicionar um ícone (opcional)
    const githubIcon = document.createElement('img');
    githubIcon.src = 'https://img.icons8.com/ios-filled/50/ffcc00/github.png'; // Exemplo de ícone
    githubIcon.alt = 'GitHub Icon';
    githubIcon.classList.add('github-icon');
    
    // Montar a seção
    commandSection.appendChild(description);
    commandSection.appendChild(githubIcon);
    commandSection.appendChild(githubLink);
    typedOutput.appendChild(commandSection);
    
    addActiveClass();
  },

  'help': () => {
    console.log("Executando comando 'help'");
    const typedOutput = document.getElementById('typed-output');
    typedOutput.textContent = '';
    Object.keys(commandHandlers).forEach(command => {
      const commandSpan = createCommandItem(`> ${command}`, ['command-item', 'command-hover']);
      typedOutput.appendChild(commandSpan);
      typedOutput.appendChild(document.createElement('br'));
    });

    typedOutput.style.display = 'block';
    typedOutput.classList.remove('fade-out');
    addActiveClass();
  }
};

const showInvalidCommandMessage = () => {
  const typedOutput = document.getElementById('typed-output');
  typedOutput.textContent = '';
  const errorMessage = createCommandItem('Comando inválido', ['error-item']);
  typedOutput.appendChild(errorMessage);
  addActiveClass();
};

export const commandManager = {
  executeCommand: (command) => {
    if (commandHandlers[command]) {
      commandHandlers[command](); // Executa o handler do comando
    } else {
      showInvalidCommandMessage(); // Exibe mensagem de comando inválido
    }
  }
};