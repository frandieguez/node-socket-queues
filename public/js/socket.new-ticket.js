var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function(data){
    console.log('Connected to server');
})

socket.on('disconnect', function(){
    console.log('Disconnected from serer')
})

$('button').on('click', function() {
    socket.emit('ticket.generate', '', function(resp) {
        label.text(resp)
    });
})

socket.on('ticket.current', function(data){
    label.text(data.current)
})