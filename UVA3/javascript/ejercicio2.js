function darBienvenida() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let carrera = prompt("Ingrese su carrera");

    if (nombre && apellido && carrera) {
        let mensaje = `Bienvenido ${nombre} ${apellido} de la carrera ${carrera}.`;
        document.getElementById("bienvenida").textContent = mensaje;
    } else {
        document.getElementById("bienvenida").textContent = "Por favor, recargue la página e ingrese todos los datos.";
    }
}
window.onload = darBienvenida;