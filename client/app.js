$(document).ready(function () {
    var WorkoutLog = (function ($, undefined) {
        var API_BASE= "http://localhost:3000/api/";
        var userDefinitions = [];
        var setAuthHeader = function (sessionToken){
            window.localStorage.setItem("sessionToken", sessionToken);
            //Set the authorization header
            //This can be done individual calls
            // here we showcase aheaxSetup as a global tool
            $.ajaxSetup({
                "header": {
                    "authorization": sessionToken
                }
            });
        };

        return {
            API_BASE: API_BASE,
            setAuthHeader: setAuthHeader
        };
    })(jQuery);

    //Ensure .disabled aren't clickable

    $(".nav-tabs a [data-toggle='tab']").on("click", function(e){
        var token = window.localStorage.getItem("sessionToken");
        if ($(this).hasClass("disabled") && !token) {
            e.preventDefault();
            return false;
        }
    });
    //bind tab change events
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var target = $(e.target).attr("href");
        if (target === "#log") {
            WorkoutLog.log.setDefinitions();
        }

        if (target === "#history") {
            WorkoutLog.log.setHistory();
        }
    });

    //bind enter key
    $(document).on("keypress", function(e) {
        if (e.which === 13) {
            if ($("signup-modal").is(":visible")){
                $("signup").trigger("click");

            }
            if ($("#login-modal").offset(":visible")){
                $("#login").trigger("click");
            }
        }
    });
   //bind tab events
   //bootstrap tab ---> binding to a bootstrap event
   $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
       var target = $(e.target).attr("href"); //activated tab
       if (target === "#log") {
           WorkoutLog.log.setDefinitions();
       }

       if ( target === "#history"){
           WorkoutLog.log.setHistory();
       }
   });
   //bind enter key
   $(document).on("keypress", function(e){
       if (e.which === 14 ) {
           if ($("#signup-modal").is (":visible")){
               $("#signup").trigger("click");
           }
       }
   });
    var token = window.localStorage.getItem("sessionToken");
    if (token){
        WorkoutLog.setAuthHeader(token);
    }
    //expose this to ther other workoputlog modules
     window.WorkoutLog = WorkoutLog;
    
});

