let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let publicRooms = {};

app.get('/rooms', function(req, res){
    res.sendFile(__dirname + '/list.html');
});
app.get('/rooms/:roomId', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
    console.log('a user connected');
});
io.sockets.on('connection', function (socket) {
    if(socket.room){
        socket.leave(socket.room);
        publicRooms[socket.room] = io.sockets.adapter.rooms[socket.room];
    }

    socket.on('join', function(room){
        socket.emit('serverMessage', 'you are connected with room: ' + room );
        socket.to(room).emit('serverMessage', 'someone else has entered this room!');
        socket.join(room);
        socket.room = room;
        publicRooms[room] = io.sockets.adapter.rooms[room];
    });
    socket.on('requestRooms', function(){
        socket.emit('roomsList', publicRooms);
    });
    socket.on('message', function(e){
        socket.to(socket.room).emit('message', e);
    });
    socket.on('pushPixelsToServer', function(pixels){
        socket.to(socket.room).emit('pullPixelsFromServer', pixels);
    });

    socket.on('disconnect', function () {
        if(socket.room){
            socket.leave(socket.room);
            io.sockets.to(socket.room).emit('serverMessage', 'someone has left the room!');
            publicRooms[socket.room] = io.sockets.adapter.rooms[socket.room];
        }
    });
});

app.use('/dist', express.static('dist'));

http.listen(3000, function(){
    console.log('listening on *:3000');
});
