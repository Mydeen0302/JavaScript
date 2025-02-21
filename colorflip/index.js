var btn = document.querySelector(".btn")
const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "White", "Gray"];

btn.addEventListener("click", function() {
    let bd = document.getElementById("bd");
    let name = document.getElementById("name");
    let c = getrandomcolor();
    bd.style.backgroundColor = colors[c];
    name.textContent = colors[c];
})

function getrandomcolor() {
    return Math.floor(Math.random() * colors.length);
}