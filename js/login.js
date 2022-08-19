document.addEventListener ("DOMContentLoaded", function() {
    let username = document.getElementById("inputusername").value;
    let password = document.getElementById("inputpassword").value;
    let correcto = true;
    
    if (username == "") {
        alert ("Completar informacion solicitada");
        correcto = false;
    }
    if (password == "") {
        alert ("Completar informacion solicitada");
        correcto = false;
    }

    if (correcto) {
        window.location.href= "index.html"
    } 
});