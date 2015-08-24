$(document).ready(function () {
    //var previous = [];
    $('#info').empty();
    $('#info').append(sessionStorage.getItem('current_profile'));
    if (sessionStorage.getItem('user') === 'ivan') {
        $('.badge').text(parseInt(localStorage.getItem('i_new_messages')));
        //previous.push(localStorage.getItem('i_wall'));
        $('#publications').append(localStorage.getItem('i_wall'));
    } else if (sessionStorage.getItem('user') === 'georgi') {
        $('.badge').text(parseInt(localStorage.getItem('g_new_messages')));
        //previous.push(localStorage.getItem('g_wall'));
        $('#publications').append(localStorage.getItem('g_wall'));
    }
    $("#publish-btn").click(function () {
        var toPublish = '<p>' + sessionStorage.getItem('fullName') + ' : ' + $("#to-publish").val() + '</p>' + '<input type="text" placeholder="Comment" id="comment"></input><button id="comment-btn">Add comment</button>';
        if (sessionStorage.getItem('user') === 'ivan') {
            localStorage.setItem('i_wall', toPublish + localStorage.getItem('i_wall'));
            localStorage.setItem('g_news', toPublish + localStorage.getItem('g_news'));
        } else if (sessionStorage.getItem('user') === 'georgi') {
            localStorage.setItem('g_wall', toPublish + localStorage.getItem('g_wall'));
            localStorage.setItem('i_news', toPublish + localStorage.getItem('i_news'));
        }
        $('#publications').prepend(toPublish);
//previous.unshift(toPublish);
//        if (sessionStorage.getItem('user') === 'ivan') {
//            localStorage.setItem('i_wall', JSON.stringify(previous));
//            localStorage.setItem('g_news', JSON.stringify(previous));
//        } else if (sessionStorage.getItem('user') === 'georgi') {
//            localStorage.setItem('g_wall', JSON.stringify(previous));
//            localStorage.setItem('i_news', JSON.stringify(previous));
//        }
        //      $('#publications').empty();
//        $('#publications').append('<h2>Publications</h2>');
        //       $('#publications').append(previous);
        $('#comment-btn').click(function () {
            $("#to-publish").append($("#comment").val());
        });
    });

});