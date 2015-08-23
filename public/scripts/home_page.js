$(document).ready(function () {
    var news;
    if (sessionStorage.getItem('user') === 'ivan') {
        news = '<p>' + localStorage.getItem('i_news') + '</p>';
    } else if (sessionStorage.getItem('user') === 'georgi') {
        news = '<p>' + localStorage.getItem('g_news') + '</p>';
    }
    $('#primaryContent').empty();
    $('#primaryContent').append('<h2>News from friends and groups</h2>');
    $('#primaryContent').append(news);

//    $("#exit-btn").click(function () {
//        sessionStorage.setItem('user', undefined);
//        window.location.replace('index.html');
//
//    });
});


