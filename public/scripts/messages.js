$(document).ready(function () {
    var previous = [];
    previous.push(localStorage.getItem('messages'));
    $('#messages').append(JSON.parse(localStorage.getItem('messages')));
    $("#send-btn").click(function () {
        var message = '<p>' + sessionStorage.getItem('fullName') + ' : ' + $("#to-send").val() + '</p>';
        previous.unshift(message);

        localStorage.setItem('messages', JSON.stringify(previous));
        $('#messages').empty();
        $('#messages').append('<h2>Messages</h2>');
        $('#messages').append(previous);
    });

});