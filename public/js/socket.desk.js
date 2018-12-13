var socket = io();

var searchParams = new URLSearchParams( window.location.search );

if (!searchParams.has('desk')) {
    window.location = 'index.html';

    throw new Error('Desk is required');
}

var desk = searchParams.get('desk');
var label = $('#number');

var title = $('h1').text('Desk ' + desk)

socket.on('connect', function(data){
    console.log('Connected to server');
})

socket.on('disconnect', function(){
    console.log('Disconnected from serer')
})

socket.on('ticket.pending', function(data){
    label.text(data)
})

$('button').on('click', function() {
    socket.emit('ticket.attend', { desk: desk }, function(resp) {
        if (resp == 'No tickets') {
            alert(resp);
            return;
        }
        label.text(resp.number);
    });
})