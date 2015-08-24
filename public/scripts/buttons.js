$(document).ready(function () {
    $("#exit-btn").click(function () {
        sessionStorage.setItem('user', undefined);
        window.location.replace('index.html');

    });
    
        $('#search-btn').click(function(){
        if($('#search').val() === 'ivan'){
            sessionStorage.setItem('search_result', 'ivan');
        } else if ($('#search').val() === 'georgi') {
            sessionStorage.setItem('search_result', 'georgi');
        } else {
            sessionStorage.setItem('search_result', null);
        }
        window.location.replace('search.html');
        
    });
});


