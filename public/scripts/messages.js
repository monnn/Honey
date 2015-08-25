$(document).ready(function () {
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
    if (localStorage.getItem('messages') !== null) {
        $('#messages').append(localStorage.getItem('messages'));
    }
    $("#send-btn").click(function () {
        if (sessionStorage.getItem('user') === 'ivan') {
            localStorage.setItem('g_new_messages', parseInt(localStorage.getItem('g_new_messages')) + 1);

        } else if (sessionStorage.getItem('user') === 'georgi') {
            localStorage.setItem('i_new_messages', parseInt(localStorage.getItem('i_new_messages')) + 1);

        }
        var message = '<p>' + sessionStorage.getItem('fullName') + ' : ' + $("#to-send").val() + '</p>';
        if (localStorage.getItem('messages') !== null) {
            localStorage.setItem('messages', message + localStorage.getItem('messages'));
        } else {
            localStorage.setItem('messages', message);
        }
        $('#messages').prepend(message);
        console.log(localStorage.getItem('messages'));

    });

});