// Comando para establecer la conexión

var socket = io();

var label = $('#lblNuevoTicket');

// on = Escuchar informacion del servidor

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdió conexión con el servidor...');

});

// on 'estadoActual'
socket.on('estadoActual', function(estado) {
    label.text(estado.actual);
});


$('button').on('click', () => {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});