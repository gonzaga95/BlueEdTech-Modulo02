const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function () {
    const li = document.createElement("LI");
    const inputValue = document.querySelector("#myInput").value;
    const textTask = document.createTextNode(inputValue);

    li.appendChild(textTask);

    if (inputValue === "") {
        alert("Digite uma tarefa");
    } else {
        document.getElementById("myUL").appendChild(li);
    }

    document.querySelector("#myInput").value = "";

    const span = document.createElement("span");
    const icon = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(icon);
    li.appendChild(span);

    const close = document.querySelectorAll(".close");

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
            const li = this.parentElement;
            li.style.display = "none";
        });
    }
});

const list = document.querySelector("#myUL");

list.addEventListener("click", (event) => {
    if (event.target.nodeName === "LI") {
        event.target.classList.toggle("checked");
    }
});
