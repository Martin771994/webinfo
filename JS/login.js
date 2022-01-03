function connect() {
    $("#connexion").click(function(){
    let user = 'login';
    let pass = 'mdp';

    

    let nom = document.getElementById('login').value;
    let pass = document.getElementById('mdp').value;


    if (nom == user && pass == mdp) { 
        alert("bon");
        return true;
    } else if (nom == '' && pass == '') {
        alert("rien");
        return false;
    } else {
        alert("non");
        return false;

    }
})
}