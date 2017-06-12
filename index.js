let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let publicRooms = {};

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
io.sockets.on('connection', function (socket) {
    console.log('a user connected');
    socket.emit('roomsList', publicRooms);
    if (socket.room) {
        socket.leave(socket.room);
        publicRooms[socket.room] = io.sockets.adapter.rooms[socket.room];
    }
    socket.on('message', function (e) {
        socket.to(socket.room).emit('message', e);
    });
    socket.on('pushPixelsToServer', function (data) {
        socket.to(socket.room).emit('pullPixelsFromServer', data["pixels"]);
    });
    socket.on('pushCanvasDataToUser', function (data) {
        io.sockets.connected[data['user']].emit('pullCanvasData', data)
    });
    socket.on('pushDimensions', function (data) {
        socket.to(socket.room).emit('pullDimensions', data);
    });
    socket.on('join', handleUserJoin);
    socket.on('leave', handleUserLeave);
    socket.on('disconnect', handleUserDisconnect);
    function handleUserLeave(){
        socket.leave(socket.room);
        io.sockets.emit('roomsList', publicRooms);
        io.sockets.to(socket.room).emit('serverMessage', 'someone has left the room!');
        publicRooms[socket.room] = io.sockets.adapter.rooms[socket.room];
        if (publicRooms[socket.room] != undefined) {
            io.sockets.to(socket.room).emit('roomDetails', {
                name: socket.room,
                users: publicRooms[socket.room].sockets
            });
        }
    }
    function handleUserDisconnect(){
        if (socket.room) {
            handleUserLeave();
        }
    }
    function handleUserJoin(room){
        socket.join(room);
        socket.emit('serverMessage', 'you are connected with room: ' + room);
        socket.to(room).emit('serverMessage', 'someone else has entered this room!');
        if (io.sockets.adapter.rooms[room].length >= 2) {
            io.sockets.connected[Object.keys(io.sockets.adapter.rooms[room].sockets)[0]].emit('sendAllDataForNewUser', socket.id);
        }
        socket.room = room;
        publicRooms[room] = io.sockets.adapter.rooms[room];
        io.sockets.to(room).emit('roomDetails', {name: room, users: publicRooms[room].sockets});
        socket.broadcast.emit('roomsList', publicRooms);
    }
});

app.use('/dist', express.static('dist'));

http.listen(3000, function () {
    console.log('listening on *:3000');
});
