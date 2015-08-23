$(document).ready(function(){
    var notifications;
    if(sessionStorage.getItem('user') === 'ivan') {
        notifications = '<p>' + localStorage.getItem('i_notifications') + '</p>';
    } else if(sessionStorage.getItem('user') === 'georgi') {
        notifications = '<p>' + localStorage.getItem('g_notifications') + '</p>';
    }
    $('#notifications').empty();
    $('#notifications').append('<h2>Notifications</h2>');
   $('#notifications').append(notifications);
});


