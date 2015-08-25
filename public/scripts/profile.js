$(document).ready(function () {
    $('#info').empty();
    //   $('#info').css("display", "inline-block");
    $('#info').append(sessionStorage.getItem('current_profile'));
    if (sessionStorage.getItem('user') === 'ivan') {
        $('.badge').text(parseInt(localStorage.getItem('i_new_messages')));
        if (localStorage.getItem('i_wall') !== null) {
            $('#publications').append(localStorage.getItem('i_wall'));
        }
    } else if (sessionStorage.getItem('user') === 'georgi') {
        $('.badge').text(parseInt(localStorage.getItem('g_new_messages')));
        if (localStorage.getItem('g_wall') !== null) {
            $('#publications').append(localStorage.getItem('g_wall'));
        }
    }
    $("#publish-btn").click(function () {
        var toPublish = '<p>' + sessionStorage.getItem('fullName') + ' : ' + $("#to-publish").val() + '</p>' + '<button data-toggle="collapse" data-target="#add-comment" class="btn btn-warning">Add comment</button><div id="add-comment" class="collapse"><input type="text" placeholder="Comment" id="comment"></input><button id="comment-btn" class="btn btn-success">Post it</button></div>';
        if (sessionStorage.getItem('user') === 'ivan') {
            localStorage.setItem('i_wall', toPublish + localStorage.getItem('i_wall'));
            localStorage.setItem('g_news', toPublish + localStorage.getItem('g_news'));
        } else if (sessionStorage.getItem('user') === 'georgi') {
            localStorage.setItem('g_wall', toPublish + localStorage.getItem('g_wall'));
            localStorage.setItem('i_news', toPublish + localStorage.getItem('i_news'));
        }
        $('#publications').prepend(toPublish);
        $('#comment-btn').click(function () {
            $("#to-publish").append($("#comment").val());
        });
    });

});