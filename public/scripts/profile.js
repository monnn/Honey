$(document).ready(function () {
    var previous = [];
    if (sessionStorage.getItem('user') === 'ivan') {
        previous.push(localStorage.getItem('i_wall'));
    $('#publications').append(localStorage.getItem('i_wall'));
    } else if (sessionStorage.getItem('user') === 'georgi') {
        previous.push(localStorage.getItem('g_wall'));
    $('#publications').append(localStorage.getItem('g_wall'));
    }
    $("#publish-btn").click(function () {
        var toPublish = '<p>' + sessionStorage.getItem('fullName') + ' : ' + $("#to-publish").val() + '</p>';
        //var toPublish = $("#to-publish").val();
        previous.push(toPublish);
        if (sessionStorage.getItem('user') === 'ivan') {
            localStorage.setItem('i_wall', JSON.stringify(previous));
            localStorage.setItem('g_news', JSON.stringify(previous));
        } else if (sessionStorage.getItem('user') === 'georgi') {
            localStorage.setItem('g_wall', JSON.stringify(previous));
            localStorage.setItem('i_news', JSON.stringify(previous));
        }
        $('#publications').empty();
       $('#publications').append('<h2>Publications</h2>');
       // > ; home_page - 2
        $('#publications').append(previous);
    });

});