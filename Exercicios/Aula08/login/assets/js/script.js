const imagem = document.querySelector("#img-login");

imagem.addEventListener("click", function () {
    if (imagem.src.includes("img1")) {
        imagem.src = "./assets/images/login-img2.png";
    } else {
        imagem.src = "./assets/images/login-img1.png";
    }
});
