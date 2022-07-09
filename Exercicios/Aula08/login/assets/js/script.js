const imagem = document.querySelector("#img-login");

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const spanAlertEmail = document.querySelector("#span-email");
const spanAlertPassword = document.querySelector("#span-password");

const botaoEntrar = document.querySelector("button[type='submit']");

imagem.addEventListener("click", function () {
    if (imagem.src.includes("img1")) {
        imagem.src = "./assets/images/login-img2.png";
    } else {
        imagem.src = "./assets/images/login-img1.png";
    }
});

inputEmail.addEventListener("keyup", function () {
    if (inputEmail.value == "") {
        spanAlertEmail.innerText = "Digite um e-mail válido.";
    } else {
        spanAlertEmail.innerText = "";
    }
});

inputPassword.addEventListener("keyup", function () {
    if (inputPassword.value.length < 8) {
        spanAlertPassword.innerText = "A senha deve ter ao menos 8 caracteres.";
    } else {
        spanAlertPassword.innerText = "";
    }
});

botaoEntrar.addEventListener("click", function (event) {
    event.preventDefault();

    if (spanAlertPassword.childNodes.length != 0 || spanAlertEmail.childNodes.length != 0) {
        alert("Preencha corretamente!");
    } else {
        alert("Seja bem-vinde!");
    }
});
