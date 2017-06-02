let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let publicRooms = {};

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
io.sockets.on('connection', function (socket) {
    console.log('a user connected');
    socket.emit('roomsList', publicRooms);
    if(socket.room){
        socket.leave(socket.room);
        publicRooms[socket.room] = io.sockets.adapter.rooms[socket.room];
    }
    socket.on('join', function(room){
        socket.join(room);
        socket.emit('serverMessage', 'you are connected with room: ' + room );
        socket.to(room).emit('serverMessage', 'someone else has entered this room!');
        if(io.sockets.adapter.rooms[room].length >= 2){
            io.sockets.connected[Object.keys(io.sockets.adapter.rooms[room].sockets)[0]].emit('sendAllDataForNewUser', socket.id);
        }
        socket.room = room;
        publicRooms[room] = io.sockets.adapter.rooms[room];
        io.sockets.to(room).emit('roomDetails',  {name: room, users:publicRooms[room].sockets});
        socket.broadcast.emit('roomsList', publicRooms);
    });
    socket.on('message', function(e){
        socket.to(socket.room).emit('message', e);
    });
    socket.on('pushPixelsToServer', function(data){
        if(data["user"] == undefined){
            socket.to(socket.room).emit('pullPixelsFromServer', data["pixels"]);
        }else{
            //send data to just one user (for when a user just connected)
            io.sockets.connected[data['user']].emit('pullPixelsFromServer', data["pixels"])
        }
    });
    socket.on('disconnect', function () {
        if(socket.room){
            socket.leave(socket.room);
            io.sockets.emit('roomsList', publicRooms);
            io.sockets.to(socket.room).emit('serverMessage', 'someone has left the room!');
            publicRooms[socket.room] = io.sockets.adapter.rooms[socket.room];
        }
    });
    socket.on('leave', function(){
        socket.leave(socket.room);
        io.sockets.emit('roomsList', publicRooms);
        io.sockets.to(socket.room).emit('serverMessage', 'someone has left the room!');
        publicRooms[socket.room] = io.sockets.adapter.rooms[socket.room];
        io.sockets.to(socket.room).emit('roomDetails',  {name: socket.room, users:publicRooms[socket.room].sockets});
    })
});

app.use('/dist', express.static('dist'));

http.listen(3000, function(){
    console.log('listening on *:3000');
});
