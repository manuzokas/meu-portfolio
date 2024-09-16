// Função auxiliar para adicionar a classe 'active' ao primeiro item de comando
export function addActiveClass() {
  const commandItems = document.getElementById('typed-output').getElementsByClassName('command-item');
  if (commandItems.length > 0) {
    commandItems[0].classList.add('active');
  }
}

// Função auxiliar para criar um item de comando
export function createCommandItem(text, classes, url = '') {
  const element = document.createElement(url ? 'a' : 'span'); // Se uma URL for fornecida, cria um <a>
  element.textContent = text;
  classes.forEach(cls => element.classList.add(cls));
  
  if (url) {
    element.href = url;
    element.target = '_blank'; // Abre o link em uma nova aba
    element.rel = 'noopener noreferrer'; // Segurança adicional
  }
  
  return element;
}

