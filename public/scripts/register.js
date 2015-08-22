$(document).ready(function () {
    $("#sign-up-btn").click(function () {
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var password_r = $("#password_r").val();

        if (username === "" || email === "" || password === "" || password_r === "") {
            alert("Please don't leave any empy fileds!");
        }

        if (password !== password_r) {
            alert("The two passwords doesn't match!");
        }
    });
});