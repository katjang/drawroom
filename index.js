let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/rooms', function(req, res){
    res.send("yes");
});
app.get('/rooms/:roomId', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
    console.log('a user connected');
});
io.sockets.on('connection', function (socket) {

    socket.on('join', function(room){
        socket.emit('serverMessage', 'you are connected with room: ' + room );
        socket.to(room).emit('serverMessage', 'someone else has entered this room!');
        socket.join(room);
        socket.room = room;
    });
    socket.on('leave', function(){
        io.sockets.to(socket.room).emit('serverMessage', 'someone has left the room!');
    });
    socket.on('message', function(e){
        socket.to(socket.room).emit('message', e);
    });
    socket.on('pushPixelsToServer', function(pixels){
        socket.to(socket.room).emit('pullPixelsFromServer', pixels);
    });
});

app.use('/dist', express.static('dist'));

http.listen(3000, function(){
    console.log('listening on *:3000');
});
