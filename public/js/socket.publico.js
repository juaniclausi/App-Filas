var socket = io();

socket.on('estadoActual', function(data) {
    actualizarHTML(data);
});

socket.on('ultimos4', (res) => {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizarHTML(res);
});

function actualizarHTML(res) {
    res.ultimos4.forEach((element, index) => {
        $(`#lblTicket${index + 1}`).text("Ticket " + element.numero);
        $(`#lblEscritorio${index + 1}`).text("Escritorio " + element.escritorio);
    });
}