const myLibrary = [];

function books(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages
};

function addBookToLibrary (title, author, pages) {
    //take params, create a book then store it in the array
    let newBook = new books(title, author, pages);
    myLibrary.push(newBook);
};

let indexOfList = 0;

addBookToLibrary("Taming of the Shrew", "William Shakespear", 230);
addBookToLibrary("Things Fall Apart", "Chinua Achebe", 209);
addBookToLibrary("Half of a Yellow Sun", "Chimamanda Ngozi Adichie", 433);

function displayBooks (){
    myLibrary.forEach((books, index) => {
        console.log(`${indexOfList += 1}. Title: ${books.title}, Author: ${books.author}, Number of Pages: ${books.pages}.`);
    });
}

displayBooks();

let showForm = document.querySelector(".newForm");
let submit = document.querySelector(".submitButton");
showForm.addEventListener("click", displayButtonFunction)
submit.addEventListener("click", submitBookDetails);

function displayButtonFunction() {
    let form = document.querySelector("#myForm");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
};

function submitBookDetails() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    let newBook = new books(title, author, pages);
    myLibrary.push(newBook);
};