let button = document.getElementById("button-id")
button.style.backgroundColor ="green"
let ul = document.getElementById("ul-id")
button.onclick = function() {
    let li = document.createElement("li")
    li.innerHTML = input.value
    ul.appendChild(li)
}