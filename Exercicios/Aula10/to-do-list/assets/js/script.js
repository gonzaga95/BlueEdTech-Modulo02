const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function () {
    const li = document.createElement("LI");
    const inputValue = document.querySelector("#myInput").value;
    const textTask = document.createTextNode(inputValue);

    li.appendChild(textTask);

    if (inputValue === "") {
        alert('Digite uma tarefa');
    } else {
        document.getElementById("myUL").appendChild(li);
    }
});
