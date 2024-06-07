function darBienvenida() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad = prompt("Ingrese su edad en números");

    if (nombre && apellido && edad) {
        let edadEnDias = edad * 365;
        let mensaje = `Bienvenido ${nombre} ${apellido}! Tienes ${edad} años y has vidido ${edadEnDias} días desde que naciste.`;
        document.getElementById("bienvenida").textContent = mensaje;
    } else {
        document.getElementById("bienvenida").textContent = "Por favor, recargue la página e ingrese todos los datos correctamente.";
    }
}
window.onload = darBienvenida;