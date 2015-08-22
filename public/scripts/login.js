$(document).ready(function() {
    $("#login-btn").click(function() {
        var password = $("#password").val();
        var username = $("#username").val();
        if (username === "" || password === "") {
            alert("Do not leave empty fields!");
        } else {
            if ((username === "ivan_ivanov" && password === "1234") || (username === "georgi_georgiev" && password === "4321")) {  
                sessionStorage.setItem('user', username);
                  window.location.replace('home_page.html');
            } else {
                alert("Invalid username or password!");
            }
        }
    });

});
