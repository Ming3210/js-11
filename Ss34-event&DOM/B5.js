let ul = document.getElementById("ul-id")
let a = prompt("Nhập số phần tử của mảng")
let arr = []
for(let i=0; i<a; i++){
    arr[i] = prompt()
    let li = document.createElement("li")
    li.innerHTML = arr[i]
    ul.appendChild(li)
}
