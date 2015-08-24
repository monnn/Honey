$(document).ready(function () {
    var news;
    if (sessionStorage.getItem('user') === 'ivan') {
        news = '<p>' + JSON.parse(localStorage.getItem('i_news')) + '</p>';
    } else if (sessionStorage.getItem('user') === 'georgi') {
        news = '<p>' + JSON.parse(localStorage.getItem('g_news')) + '</p>';
    }
    $('#primaryContent').empty();
    $('#primaryContent').append('<h2>News from friends and groups</h2>');
    $('#primaryContent').append(news);

    localStorage.setItem('i_fullName', 'Ivan Ivanov');
    localStorage.setItem('g_fullName', 'Georgi Georgiev');
    if ((localStorage.getItem('i_groups') === "Faculty of Mathematics and Informatics") || (localStorage.getItem('g_groups') === "Faculty of Mathematics and Informatics")) {
        $('#my-groups').append('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        //$('#suggested-groups').remove($('#fmi'));
        $('#fmi').empty();
    }


});


