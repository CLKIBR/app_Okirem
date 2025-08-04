// Basit WebRTC sinyal sunucusu (Node.js, ws ile)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    // Mesajı diğer tüm istemcilere ilet
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

console.log('WebRTC signaling server started on ws://localhost:3001');
