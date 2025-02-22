var buttons = document.querySelectorAll(".btn");
var counterElement = document.getElementById("counter");

buttons[0].addEventListener("click", function() { // Decrease button
    counterElement.textContent = Number(counterElement.textContent) - 1;
    counterElement.style.color = "red";
});

buttons[1].addEventListener("click", function() { // Reset button
    counterElement.textContent = 0;
});

buttons[2].addEventListener("click", function() { // Increase button
    counterElement.textContent = Number(counterElement.textContent) + 1;
    counterElement.style.color = "green";
});