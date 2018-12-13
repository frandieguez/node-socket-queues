const { io } = require('../server');
const { TicketControl} = require('../classes/ticket-control');

const ticketcontrol = new TicketControl();
io.on('connection', (client) => {

    console.log('User connected');

    client.on('disconnect', () => {
        console.log('User disconnected');
    });

    // Escuchar el cliente
    client.on('ticket.generate', (data, callback) => {
        let number = ticketcontrol.next();

        callback(number);
    });

    client.on('ticket.attend', (data, callback) => {
        if (!data.desk) {
            return callback({
                err: true,
                message: "Desk required"
            })
        }

        let ticket = ticketcontrol.attendTicket(data.desk);

        callback(ticket);

        client.broadcast.emit('ticket.current', {
            current: ticketcontrol.current(),
            latest_attended: ticketcontrol.lastFour()
        });
    });

    client.emit('ticket.current', {
        current: ticketcontrol.current(),
        latest_attended: ticketcontrol.lastFour()
    });

});