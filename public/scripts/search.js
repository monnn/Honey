$(document).ready(function () {
    if (sessionStorage.getItem('search_result') === 'ivan') {
                sessionStorage.setItem('current_profile', '<p>User information</p><img src="minion.png" alt="Minion"><h3>Ivan Ivanov</h3><p>Teacher</p>');

        $('#search-results').append('<p><a href=profile.html>' + localStorage.getItem('i_fullName') + '</p');

    } else if (sessionStorage.getItem('search_result') === 'georgi') {
                sessionStorage.setItem('current_profile', '<p>User information</p><img src="9751908_orig.png" alt="Panda"><h3>Georgi Georgiev</h3><p>Programmer</p>');

        $('#search-results').append('<p><a href=profile.html>' + localStorage.getItem('g_fullName') + '</p');
    } else {
        $('#search-results').append('<p>No results</p>');
    }
});


