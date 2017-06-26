$(function(){
    $.extend(WorkoutLog, {
        //signup method
        signup: function(){
            //username & password wariables
            var username = $("#su_username").val();
            var password = $("#su_password").val();
            //user object
            var user = {
                user: {
                    username: username,
                    password: password
                }
            };
        
            //signup post
            var signup = $.ajax({
                type:"POST",
                url: WorkouLog.API_BASE + "user",
                data: JSON.stringify(user),
                contentType: "application/JSON"
            });
            //signup done/fail
            signup.done(function(date){
                if(data.sessionToke){
                    WorkoutLog.setAuthHeader(data.sessionToken);

                }
                $("#signup-modal").modal("hide");
                $(".disabled").removeClass("disabled");
                $("#loginout").text("logout");
                
            }).fail(function(){
                $("#su_error").text("There was an issue with sign up").show();
            });

    }

            //login method

            //loginout method
        
    });

    //bind events
    $("signup").on("click", WorkoutLog.signup);
});