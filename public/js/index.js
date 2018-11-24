var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: 'fin@example.com',
  //   text: 'Hey. This is Mark.'
  // })

  // socket.emit('createMessage', {
  //   to: 'Yehe',
  //   text: 'Yup, that work for me'
  // })
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}:${message.text}`);

  jQuery('#messages').append(li);
});


jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message').val()
    }, function () {

    })
})