document.addEventListener ("DOMContentLoaded", function() {
    let email = document.getElementById("inputemail").value;
    let password = document.getElementById("inputpassword").value;
    let correcto = true;
    
    if (email == " ") {
        correcto = false;
    }
    if (password == " ") {
        correcto = false;
        alert (Datos incorrectos);
    }

    if (correcto) {
        window.location.href= "login.html"
    } 
});