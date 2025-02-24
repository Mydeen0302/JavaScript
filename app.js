let arrayofmembers = [
    { name: "Julie", job: "The Boss", img: 'https://www.course-api.com/images/people/person-1.jpeg', desc: "Managing the team and overseeing operations" },
    { name: "Meena", job: "Web Designer", img: 'https://www.course-api.com/images/people/person-2.jpeg', desc: "Designing and developing user-friendly web interfaces" },
    { name: "Kumar", job: "Intern", img: 'https://www.course-api.com/images/people/person-3.jpeg', desc: "Learning and assisting in mechanical engineering tasks" }
];

let count = 0;

// Selecting elements
let personImg = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");
let randomBtn = document.querySelector(".random-btn");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

// Preload images
let preloadedImages = [];
arrayofmembers.forEach(member => {
    let img = new Image();
    img.src = member.img;
    preloadedImages.push(img);
});

// Function to update content
function updateContent(index) {
    personImg.src = arrayofmembers[index].img;
    personImg.alt = arrayofmembers[index].name;
    author.textContent = arrayofmembers[index].name;
    job.textContent = arrayofmembers[index].job;
    info.textContent = arrayofmembers[index].desc;
}

// Next Button Click Event
nextBtn.addEventListener("click", function() {
    count = (count + 1) % arrayofmembers.length;
    updateContent(count);
});

// Previous Button Click Event
prevBtn.addEventListener("click", function() {
    count = (count - 1 + arrayofmembers.length) % arrayofmembers.length;
    updateContent(count);
});

// Random Button Click Event
randomBtn.addEventListener("click", function() {
    let n;
    do {
        n = generateRandomNumber();
    } while (n === count); // Prevent the same person from being shown consecutively

    count = n;
    updateContent(n);
});

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * arrayofmembers.length);
}

// Initialize with the first person's details
updateContent(count);