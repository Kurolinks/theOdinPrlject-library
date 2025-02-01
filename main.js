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
        alert(`${indexOfList += 1}. Title: ${books.title}, Author: ${books.author}, Number of Pages: ${books.pages}.`);
    });
}


let showForm = document.querySelector(".newBookButton");
let submit = document.querySelector(".submitButton");
let library = document.querySelector(".library");
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

    // Create a new card for a new book
    const newDiv = document.createElement("div");
    const newCard = document.createElement("div");
    const newCardDiv1 = document.createElement("div");
    const titleOne = document.createElement("p");
    const titleTwo = document.createElement("p");
    const newCardDiv2 = document.createElement("div");
    const authorOne = document.createElement("p");
    const authorTwo = document.createElement("p");
    const newCardDiv3 = document.createElement("div");
    const pagesOne = document.createElement("p");
    const pagesTwo = document.createElement("p");
    const deleteButton = document.createElement("button");

    // Style the new div
    Object.assign(newDiv.style, {
        width: "22rem",
        height: "12rem",
        background: "rgb(176, 201, 231)",
        border: "1px solid rgb(47, 229, 232",
        borderRadius: "15px",
        marginLeft: "10px",
        marginTop: "20px",
    });

    Object.assign(newCard1.style, {
        color: "rgb(40, 116, 43)",
        display: "flex",
        flexDirection: "row",
        fontSize: "16px",
    });

    Object.assign(newCard2.style, {
        color: "rgb(40, 116, 43)",
        display: "flex",
        flexDirection: "row",
        fontSize: "16px",
    });

    Object.assign(newCard3.style, {
        color: "rgb(40, 116, 43)",
        display: "flex",
        flexDirection: "row",
        fontSize: "16px",
    });

    titleOne.style.marginLeft = "30px";
    titleOne.style.textContent = "Title of Book:"
    authorOne.style.marginLeft = "30px";
    authorOne.style.textContent = "Name of Author:"
    pagesOne.style.marginLeft = "30px";
    pagesOne.style.textContent = "Number of Pages:"
    titleTwo.style.marginLeft = "20px";
    authorTwo.style.marginLeft = "20px";
    pagesTwo.style.marginLeft = "20px";

    Object.assign(deleteButton.style, {
        backgroundColor: "rgb(128, 128, 182)",
        border: "0",
        borderRadius: "15px",
        color: "white",
        cursor: "pointer",
        fontSize: "15px,",
        height: "2.1rem",
        marginLeft: "100px",
        width:" 10rem",
    })

    // newDiv.style.justifyContent = "center";
    library.appendChild(newDiv);
    library.appendChild(newCard);
    newCard.appendChild(newCardDiv1);
    newCardDiv1.appendChild(titleOne);
    newCardDiv1.appendChild(titleTwo);
    newCard.appendChild(newCardDiv2);
    newCardDiv1.appendChild(authorOne);
    newCardDiv1.appendChild(authorTwo);
    newCard.appendChild(newCardDiv);
    newCardDiv1.appendChild(pagesOne);
    newCardDiv1.appendChild(pagesTwo);
    newCard.appendChild(deleteButton);
};


// userListElement.innerHTML = "";  // Clear the list first