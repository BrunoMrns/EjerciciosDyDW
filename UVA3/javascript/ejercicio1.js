let nombre = "Bruno";
let apellido = "Moriones";
let carrera = "Licenciatura en Gestión de TI";

function darBienvenida() {
    let mensaje = `Bienvenido ${nombre} ${apellido} de la carrera ${carrera}.`;
    document.getElementById("bienvenida").textContent = mensaje;
    alert(mensaje)
}

window.onload = darBienvenida;