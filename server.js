
const express = require('express');
const app = express();
const port = 8000;


const server = app.listen(8000, () => {
    console.log('The Server is all fired up on port 8000')
});

const io = require("socket.io")(server);



io.on('connection', socket => {
    console.log('Socket ID:', socket.id);

    io.emit('check 123')
    socket.on('event_from_client', data => {
        socket.broadcast.emit("send_data_to_all_other_clients", data);
    });
});





