function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "admin" ) {
        alert ("Ingreso exitoso");
        window.location ="file:///C:/Users/Irina/Desktop/Curso%20de%20Programacion/FASE%202/GitHub/workspace-inicial/login.html";
        return true;
    } else {
        attempt --;
        alert ("Reintentar");
        if ( attempt ==0 ) {
        document.getElementById("username").disabled==true;
        document.getElementById("password").disabled==true;
        document.getElementById("submit").disabled==true;
        return false;
        }
    }
}



    