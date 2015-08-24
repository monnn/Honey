$(document).ready(function () {
    var user = sessionStorage.getItem('user');
//    if (sessionStorage.getItem('user') === 'ivan') {
//        news = '<p>' + JSON.parse(localStorage.getItem('i_news')) + '</p>';
//        if (localStorage.getItem('i_groups') !== "Faculty of Mathematics and Informatics") {
//            $('#suggested-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
//        } else {
//            $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
//        }
//    } else if (sessionStorage.getItem('user') === 'georgi') {
//        news = '<p>' + JSON.parse(localStorage.getItem('g_news')) + '</p>';
//        if (localStorage.getItem('g_groups') !== "Faculty of Mathematics and Informatics") {
//            $('#suggested-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
//        } else {
//            $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
//
//        }
//    }
    if (user === 'ivan') {
        $('.badge').text(parseInt(localStorage.getItem('i_new_messages')));
        if (localStorage.getItem('i_groups') !== "Faculty of Mathematics and Informatics") {
            $('#suggested-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        } else {
            $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        }
        if (localStorage.getItem('i_groups') !== "Faculty of Mathematics and Informatics") {
            $('#group').append("<button id='join-btn'> Join </button>");
            $('#join-btn').click(function () {
                localStorage.setItem('i_groups', "Faculty of Mathematics and Informatics");
                $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
                $('#fmi').css("display", "none");
                $('#join-btn').css("display", "none");
                //$(document).remove($('#join-btn'));
            });
        }
    } else if (user === 'georgi') {
        $('.badge').text(parseInt(localStorage.getItem('g_new_messages')));

        if (localStorage.getItem('g_groups') !== "Faculty of Mathematics and Informatics") {
            $('#suggested-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
        } else {
            $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');

        }
        if (localStorage.getItem('g_groups') !== "Faculty of Mathematics and Informatics") {
            $('#group').append("<button id='join-btn'> Join </button>");
            $('#join-btn').click(function () {
                localStorage.setItem('g_groups', "Faculty of Mathematics and Informatics");
                $('#my-groups').prepend('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
                $('#fmi').css("display", "none");
                $('#join-btn').css("display", "none");
                //$('#fmi').empty();
            });
        }
    }

    //$('#my-groups').append('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
    // $('#suggested-groups').remove($('#fmi'));
    //$('#fmi').empty();

});


