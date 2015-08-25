$(document).ready(function () {
    $("#register-btn").click(function () {
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var password_r = $("#password_r").val();

        if (username === "" || email === "" || password === "" || password_r === "") {
            $('#reg-body').prepend('<div class="alert alert-danger" fade in><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>Please do not leave any empy fileds!</div>');
        } else if (password !== password_r) {
            $('#reg-body').prepend('<div class="alert alert-danger" fade in><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>The two passwords do not match!</div>');

        } else {
            $('#container').empty();
            $('#container').append('<p>Confirmation email was send to your email address</p>');
        }

    });
});