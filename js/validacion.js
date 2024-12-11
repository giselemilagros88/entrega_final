document.getElementById("miFormulario").addEventListener("submit", event => {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Variables para los mensajes de error
    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");

    // Inicializar validación
    let formularioValido = true;

    // Validar nombre
    if (nombre === "") {
        errorNombre.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorNombre.classList.add("d-none");
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorEmail.classList.add("d-none");
    }

    // Validar mensaje
    if (mensaje.length < 10) {
        errorMensaje.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorMensaje.classList.add("d-none");
    }

    // Si el formulario es válido, se puede enviar
    if (formularioValido) {
        alert("Formulario enviado correctamente.");
        // aca se puede hacer la accion del envio al api del backend
    }
});