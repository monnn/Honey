$(document).ready(function () {

    //   var previous = [];
    if (sessionStorage.getItem('user') === 'ivan') {
        localStorage.setItem('i_new_messages', 0);
        if (localStorage.getItem('i_groups') !== "Faculty of Mathematics and Informatics") {
            $('#suggested-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        } else {
            $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        }
    } else if (sessionStorage.getItem('user') === 'georgi') {
        localStorage.setItem('g_new_messages', 0);
        if (localStorage.getItem('g_groups') !== "Faculty of Mathematics and Informatics") {
            $('#suggested-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        } else {
            $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');

        }
    }
    //previous.push(localStorage.getItem('messages'));
    $('#messages').append(localStorage.getItem('messages'));
    $("#send-btn").click(function () {
        if (sessionStorage.getItem('user') === 'ivan') {
            localStorage.setItem('g_new_messages', parseInt(localStorage.getItem('g_new_messages')) + 1);

        } else if (sessionStorage.getItem('user') === 'georgi') {
            localStorage.setItem('i_new_messages', parseInt(localStorage.getItem('i_new_messages')) + 1);

        }
        var message = '<p>' + sessionStorage.getItem('fullName') + ' : ' + $("#to-send").val() + '</p>';
        localStorage.setItem('messages', message + localStorage.getItem('messages'));
        $('#messages').prepend(message);
        console.log(localStorage.getItem('messages'));
        //previous.unshift(message);

        //       localStorage.setItem('messages', JSON.stringify(previous));
        //localStorage.setItem('new_messages', parseInt(localStorage.getItem('new_messages')) + 1);
        //       $('#messages').empty();
//        $('#messages').append('<h2>Messages</h2>');
        //       if (previous !== null) {
//            $('#messages').append(previous);
//        }
    });

});