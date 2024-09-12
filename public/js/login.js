import { particlesConfig } from './particlesConfig.js';

document.addEventListener('DOMContentLoaded', () => {
  particlesJS('particles-js', particlesConfig);//inicializando as particles

  //localizando as variaveis pelo ID no html
  const loginForm = document.getElementById('login-form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginError = document.getElementById('login-error');
  const guestLoginButton = document.getElementById('guest-login-button');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio do formulário padrão

    //obtendo os valores inseridos nos campos de entrada do usuario e atribuindo-os a variaveis
    const username = usernameInput.value;
    const password = passwordInput.value;

    //exemplo fictício de autenticação
    if (username === 'admin' && password === 'admin') {
      // Login bem-sucedido, redirecione para o terminal interativo
      window.location.href = 'index.html'; // Substitua pelo caminho correto
    } else {
      // exibindo uma mensagem de erro
      loginError.textContent = 'Usuário ou senha incorretos.';
    }
  });

  //adicionando um ouvinte de evento de clique para o botao de "entrar como visitante"
  guestLoginButton.addEventListener('click', () => {
    // redirecionando para a página 'index.html'
    window.location.href = 'index.html';
  });

});
