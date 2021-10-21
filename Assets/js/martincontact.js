$(function() {
    $("#envoyer").click(function(){
        valid = true;
        if($("#nom").val() ==""){
            $("#name").html("Veuillez entrer un nom");
            // valid=false
    
        }
        else if($("#prenom").val() ==""){
            $("#surname").html("Veuillez entrer un prénom");
            valid=false
        }
        else if($("#ville").val() ==""){
            $("#city").html("Veuillez entrer une ville");
            valid=false
        }
        else if($("#mail").val() ==""){
            $("#email").html("Veuillez entrer un mail");
            valid=false
        }
    })    
})
        

