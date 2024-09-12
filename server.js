const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Servir arquivos estáticos
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Configuração do Socket.io
io.on('connection', (socket) => {
  console.log('Novo usuário conectado');

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
