class FormContent {
    constructor() {
        this.ValidEmail = "kreyes";
        this.validPassword = "1234";
    }
    validarUsuario(email, password) {
        if (email != this.ValidEmail) {
            alert("Usuario incorrecto");
            return
        }
        if (password != this.validPassword) {
            alert("Contraseña incorrecta");
        }

        alert("Bienvenido" + email);

    }
}
var fullContent = new FormContent();

function confirmUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    fullContent.validarUsuario(email, password);
}