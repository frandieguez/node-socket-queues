var socket = io();

var labelTicket = 'lblTicket';
var labelDesk = 'lblEscritorio'

function updatePosition(place, ticket) {
    $('#lblTicket' + place).text('Ticket ' + ticket.number);
    $('#lblEscritorio' + place).text('Desk ' + ticket.desk);
}

var audio = new Audio("/audio/new-ticket.mp3");

socket.on('ticket.current', function(resp) {
    if (resp.latest_attended.length < 1) {
        return;
    }

    resp.latest_attended.forEach(function (el, i) {
        updatePosition(i+1, el)
    });

    audio.play();
})

socket.on('connect', function(data){
    console.log('Connected to server');
})

socket.on('disconnect', function(){
    console.log('Disconnected from serer')
})