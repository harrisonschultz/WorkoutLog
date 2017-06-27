$(function(){
    $.extend(WorkoutLog, {
        //Create definition object
        definition:{
        userDefinition: [],
        //create a definition in the api/definition as well as create api/definition
        create: function(){
            console.log("begin workoutlog.definition.create");
            var def = {
                desc: $("#def-description").val(),
                type:$("#def-logtype").val()
            };
            var postData = {definition:def};
            var define = $.ajax({
                type:"POST",
                url: WorkoutLog.API_BASE + "definition",
                data: JSON.stringify(postData),
                contentType: "application/json"
            }).done(function(data){
                WorkoutLog.definition.userDefinitions.push(data.definition);
            }).fail(function(){
                console.log("failed to POST");
            })
        },
//retrieve all definitions from api/definitions
            fetchAll: function(){
                var fetchDefs = $.ajax ({
                    type:"GET",
                    url: WorkoutLog.API_BASE + "definition",
                    headers: {
                        "authorization": window.localStorage.getItem("sessionToken")
                    }
                })
                .done(function(data){
                    WorkoutLog.definition.userDefinitions = data;
                })
                .fail (function(err){
                    console.log(err);
                });
            }
        }
    });

    //bindings
    //Enable save button to call the create method.
    $("#def-save").on("click", WorkoutLog.definition.create);
    //fetch definitions if we already are authenticated and refreshed
    if (window.localStorage.getItem("sessionToken")) {
        WorkoutLog.definition.fetchAll;
    }
});