$(document).ready(function () {
//    localStorage.clear();
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
                    sessionStorage.setItem('current_profile', '<img src="styles/minion.png" alt="Minion" id="photo"><h3 id="profile-name">Ivan Ivanov</h3><p>Teacher</p>');
                    if (!localStorage.getItem('i_new_messages') > 1) {
                        localStorage.setItem('i_new_messages', 0);
                    }
                } else {
                    sessionStorage.setItem('fullName', "Georgi Georgiev");
                    sessionStorage.setItem('current_profile', '<img src="styles/9751908_orig.png" alt="Panda" id="photo"><h3 id="profile-name">Georgi Georgiev</h3><p>Programmer</p>');
                    if (!localStorage.getItem('g_new_messages') > 1) {
                        localStorage.setItem('g_new_messages', 0);
                    }
                }
                localStorage.setItem('id', username);
                window.location.replace('home_page.html');
            } else {
                $('#login-body').prepend('<div class="alert alert-danger" fade in><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Invalid username or password!</div>');

            }
        }
    });

});
