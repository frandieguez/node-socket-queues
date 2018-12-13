const fs = require('fs');

class Ticket {
    constructor(number, desk) {
        this.number = number;
        this.desk = desk;
    }
}

class TicketControl {
    constructor(props) {

        this.latest_ticket = 0;

        this.today = new Date().getDate();

        this.tickets = [];
        this.attended_tickets = [];

        let data = require('../data/data.json');

        if (data.today == this.today) {
            this.latest_ticket = data.latest;
            this.tickets = data.tickets;
        } else {
            this.restartCounter()
        }

        console.log(data)
    }

    restartCounter() {
        this.latest_ticket = 0;
        this.tickets = [];
        this.attended_tickets = [];
        this.saveFile();

        console.log('System initialized');
    }

    saveFile() {
        let jsonData = {
            today: this.today,
            latest: this.latest_ticket,
            tickets: this.tickets,
            attended_tickets: this.attended_tickets
        };

        let jsonDataString  = JSON.stringify(jsonData);

        fs.writeFileSync('./server/data/data.json', jsonDataString);
    }

    next() {
        let number = this.latest_ticket += 1
        let ticket = new Ticket(number, null);

        this.tickets.push(ticket);

        this.saveFile();

        return number;
    }

    current() {
        return this.latest_ticket;
    }

    lastFour() {
        return this.attended_tickets;
    }


    attendTicket( desk ) {
        if (this.tickets.length < 1) {
            return 'No tickets';
        }

        let ticketNumber = this.tickets[0].number;
        this.tickets.shift();

        let ticket = new Ticket(ticketNumber, desk);
        this.attended_tickets.unshift(ticket);

        if (this.attended_tickets.length > 4) {
            this.attended_tickets.splice(-1, 1);
        }
        console.log(this.attended_tickets)

        this.saveFile();

        return ticket;
    }
}

module.exports = { TicketControl };