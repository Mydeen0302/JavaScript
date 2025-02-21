var btn = document.querySelector(".hbtn")
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F '];

btn.addEventListener("click", function() {
    let bd = document.getElementById("hbd");
    let name = document.getElementById("hname");
    let c = "#";
    for (let i = 0; i < 6; i++) {
        c += colors[getrandomcolor()];
    }
    bd.style.backgroundColor = c;
    name.textContent = c;
})

function getrandomcolor() {
    return Math.floor(Math.random() * colors.length);
}