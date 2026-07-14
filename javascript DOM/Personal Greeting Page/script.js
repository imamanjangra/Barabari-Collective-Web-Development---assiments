// Assignment 1: Personal Greeting Page

const greeting = document.getElementById("greeting");
const intro = document.getElementById("intro");


greeting.textContent = "Hi, I'm Bhaskar!";

intro.style.color = "purple";
intro.style.fontSize = "18px";







const tasks = document.querySelectorAll(".task");


tasks.forEach((task) => {
    task.style.fontStyle = "italic";
});


tasks[1].style.backgroundColor = "lightblue";






const mainImage = document.getElementById("mainImage");
const caption = document.getElementById("caption");


mainImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSr6LCnVjIoit8N_lkTIuEtFY8Z79sVunb74J2VaDvzQ&s=10";

caption.textContent = "This is image 2!";
caption.style.color = "teal";








const books = [
    "Book A",
    "Book B",
    "Book C",
    "Book D",
    "Book E"
];


const bookList = document.getElementById("bookList");


books.forEach((book) => {

    const p = document.createElement("p");

    p.textContent = book;

    bookList.appendChild(p);

});






// Assignment 5: Multiplication Table Generator


const table = document.getElementById("multiplicationTable");


for(let i = 1; i <= 10; i++){

    const row = document.createElement("tr");


    const numberCell = document.createElement("td");
    numberCell.textContent = i;


    const resultCell = document.createElement("td");
    resultCell.textContent = i * 5;


    row.appendChild(numberCell);
    row.appendChild(resultCell);


    table.appendChild(row);

}