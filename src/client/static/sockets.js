const updatesPerSecond = 1000/30;

var socket = io();
socket.emit('new connection');

setInterval(function()
{
    socket.emit('intent', intent);
}, updatesPerSecond);

socket.on('message', (data) => {
    console.log(data);
});