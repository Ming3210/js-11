let h1 = document.getElementById("h1-id")
let button = document.getElementById("button-id");
button.style.border = "0px solid"
button.style.backgroundColor = "cyan"
button.style.textAlign = "center"
button.style.width = "300px"
button.style.height = "140px"
button.onclick = function(){
    h1.innerText = "This text has been updated"
}