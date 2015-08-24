$(document).ready(function () {
    var notifications;
//    if (sessionStorage.getItem('user') === 'ivan') {
//        if (localStorage.getItem('i_groups') !== "Faculty of Mathematics and Informatics") {
//            $('#suggested-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
//        } else {
//            $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
//        }
//    } else if (sessionStorage.getItem('user') === 'georgi') {
//        if (localStorage.getItem('g_groups') !== "Faculty of Mathematics and Informatics") {
//            $('#suggested-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
//        } else {
//            $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
//
//        }
//    }
    if (sessionStorage.getItem('user') === 'ivan') {
        notifications = '<p>' + localStorage.getItem('i_notifications') + '</p>';
        $('.badge').text(parseInt(localStorage.getItem('i_new_messages')));
        if (localStorage.getItem('i_groups') !== "Faculty of Mathematics and Informatics") {
            $('#suggested-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        } else {
            $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        }
    } else if (sessionStorage.getItem('user') === 'georgi') {
        notifications = '<p>' + localStorage.getItem('g_notifications') + '</p>';
        $('.badge').text(parseInt(localStorage.getItem('g_new_messages')));

        if (localStorage.getItem('g_groups') !== "Faculty of Mathematics and Informatics") {
            $('#suggested-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        } else {
            $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');

        }
    }
    $('#notifications').empty();
    $('#notifications').append('<h2>Notifications</h2>');
    if (notifications !== "<p>null</p>") {
        $('#notifications').append(notifications);
    }
});


