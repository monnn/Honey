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
                    sessionStorage.setItem('current_profile', '<p>User information</p><img src="minion.png" alt="Minion"><h3>Ivan Ivanov</h3><p>Teacher</p>');

                } else {
                    sessionStorage.setItem('fullName', "Georgi Georgiev");
                    sessionStorage.setItem('current_profile', '<p>User information</p><img src="9751908_orig.png" alt="Panda"><h3>Georgi Georgiev</h3><p>Programmer</p>');

                }
                localStorage.setItem('id', username);
                window.location.replace('home_page.html');
            } else {
                alert("Invalid username or password!");
            }
        }
    });

});
