$(document).ready(function() {
    $("#login-btn").click(function() {
       
        var username = $("#username").val();
        var passwd = $("#passwd").val();
        var validationStatus = 1;
        
        if(username === "" || passwd === "")
        {
            alert("Empty fields!");
            validationStatus = 0;
        }
        
        if(Boolean(validationStatus))
        {
          
          $.post('Honey/user/login', {name: username, passwd: passwd}, function(data) {
                  $("#server-response").text(data);
                  
                  $.getScript("./scripts/js-cookie.js", function(){

                    Cookies.set('HoneyUser', username, { expires: 7 });
                    // Use anything defined in the loaded script...

                    window.location.href='./';
                  });
                  
            });
        }
    });
});