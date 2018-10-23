const express = require('express');
const socket = require('socket.io');

var app = express();
var server = app.listen(3000, function () {
    console.log('nassma3 fik 3al port: 3000');
})

// socket setup
const io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id);

    socket.on('chat', function(data){
      io.sockets.emit('chat', data);
    });

     // Handle typing event
     socket.on('typing', function(data){
      socket.broadcast.emit('typing', data);
  });
});
