$(document).ready(function () {
    var news;
    if (sessionStorage.getItem('user') === 'ivan') {
        $('.badge').text(parseInt(localStorage.getItem('i_new_messages')));
        news = '<p>' + localStorage.getItem('i_news') + '</p>';
        if (localStorage.getItem('i_groups') !== "Faculty of Mathematics and Informatics") {
            $('#suggested-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        } else {
            $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        }
    } else if (sessionStorage.getItem('user') === 'georgi') {
        $('.badge').text(parseInt(localStorage.getItem('g_new_messages')));
        news = '<p>' + localStorage.getItem('g_news') + '</p>';
        if (localStorage.getItem('g_groups') !== "Faculty of Mathematics and Informatics") {
            $('#suggested-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        } else {
            $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');

        }
    }
    $('#primaryContent').empty();
    $('#primaryContent').append('<h2>News from friends and groups</h2>');
    if (news !== "<p>null</p>") {
        $('#primaryContent').append(news);
    }
    localStorage.setItem('i_fullName', 'Ivan Ivanov');
    localStorage.setItem('g_fullName', 'Georgi Georgiev');
//    if ((localStorage.getItem('i_groups') === "Faculty of Mathematics and Informatics") || (localStorage.getItem('g_groups') === "Faculty of Mathematics and Informatics")) {
//        $('#my-groups').append('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
//        $('#fmi').empty();
//    }


});


