$(document).ready(function () {
    $("#login-btn").click(function () {
        var password = $("#password").val();
        var username = $("#username").val();
        if (username === "" || password === "") {
            alert("Do not leave empty fields!");
        } else {
            if ((username === "ivan" && password === "1234") || (username === "georgi" && password === "4321")) {
                sessionStorage.setItem('user', username);
                if (username === "ivan") {
                    sessionStorage.setItem('fullName', "Ivan Ivanov");
                } else {
                    sessionStorage.setItem('fullName', "Georgi Georgiev");
                }
                localStorage.setItem('id', username);
                window.location.replace('home_page.html');
            } else {
                alert("Invalid username or password!");
            }
        }
    });

});
