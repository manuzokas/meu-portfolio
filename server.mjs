import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

// Definir __dirname usando import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal para enviar o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
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
