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

function displayBooks (){

    myLibrary.forEach((books, index) => {
        alert(`${indexOfList += 1}. Title: ${books.title}, Author: ${books.author}, Number of Pages: ${books.pages}.`);
    });
}


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

    let newBook = {
        title: title,
        author: author,
        pages: pages
    };

    myLibrary.push(newBook);
    displayBooks();
};


// userListElement.innerHTML = "";  // Clear the list first