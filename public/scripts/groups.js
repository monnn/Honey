$(document).ready(function () {
    var user = sessionStorage.getItem('user');
    if (user === 'ivan') {
        if (localStorage.getItem('i_groups') !== "Faculty of Mathematics and Informatics") {
            $('#group').append("<button id='join-btn'> Join </button>");
            $('#join-btn').click(function () {
                localStorage.setItem('i_groups', "Faculty of Mathematics and Informatics");
                $('#my-groups').append('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
                $('#fmi').empty();
            });
        }
    } else if (user === 'georgi') {
        if (localStorage.getItem('g_groups') !== "Faculty of Mathematics and Informatics") {
            $('#group').append("<button id='join-btn'> Join </button>");
            $('#join-btn').click(function () {
                localStorage.setItem('g_groups', "Faculty of Mathematics and Informatics");
                $('#my-groups').append('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
                $(document).remove($('#fmi'));
                //$('#fmi').empty();
            });
        }
    }
    //$('#my-groups').append('<li><a href="groups.html">Faculty of Mathematics and Informatics</a></li>');
   // $('#suggested-groups').remove($('#fmi'));
    //$('#fmi').empty();
    
});


