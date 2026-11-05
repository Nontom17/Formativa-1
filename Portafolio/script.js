function Enviarformulario(){

    alert("Formulario enviado");

}

const botontema = document.getElementById("btn-tema");

botontema.addEventListener("click", function(){

    document.body.classList.toggle("oscuro");

    if(document.body.classList.contains("oscuro")){

        botontema.textContent = "Modo Claro";
    } else {

        botontema.textContent = "modo oscuro";

    }

} )