$(document).ready(function () {
    var user = sessionStorage.getItem('user');
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
            });
        }
    }

    //$('#my-groups').append('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
    // $('#suggested-groups').remove($('#fmi'));
    //$('#fmi').empty();

});


