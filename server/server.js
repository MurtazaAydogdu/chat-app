const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');



const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function (socket) {
    console.log('new user connected');


    socket.emit('newMessage', {
        from: 'John',
        text: 'See you then',
        createdAt: 123
    });

    socket.on('createMessage', function (message) {
        console.log('createMessage', message);
    });

    socket.on('disconnect', function () {
        console.log('User was disconnected');
    })
});


app.get('/', function (req, res) {



});


server.listen(3000, function () {
    console.log(`Started up at port ${port}`)
});

module.exports = {app};

