async function getAdvice() {
    const resposta = await fetch("https://api.adviceslip.com/advice");

    const data = await resposta.json();

    document.querySelector("#advice").innerText = data.slip.advice;
}

const botaoGetAdvice = document.querySelector("#get-advice");

botaoGetAdvice.addEventListener("click", function () {
    getAdvice();
});
