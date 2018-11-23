var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: 'fin@example.com',
  //   text: 'Hey. This is Mark.'
  // })

  socket.emit('createMessage', {
    to: 'Yehe',
    text: 'Yup, that work for me'
  })
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});