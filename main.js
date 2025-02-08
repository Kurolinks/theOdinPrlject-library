const myLibrary = [];

// create bbok object
function books(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages
};


let indexOfList = 0;

//select some html elements
let form = document.querySelector("#myform");
let showForm = document.querySelector(".newBookButton");
let submit = document.querySelector(".submitButton");
let newLibraryDiv = document.querySelector(".new-library-div");
showForm.addEventListener("click", displayButtonFunction)
submit.addEventListener("click", submitBookDetails);
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");

  
// hide and unhide form
function displayButtonFunction() {
    let form = document.querySelector("#myForm");
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
};

// function to submit book
function submitBookDetails(event) {
    event.preventDefault(); // Prevent page reload
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    let newBook = {
        title: title,
        author: author,
        pages: pages
    };

    myLibrary.push(newBook);

    let allFilled = true;
    document.querySelectorAll("form input").forEach(input => {
        if (!input.value.trim()) allFilled = false;
    });

    if (!allFilled) {
        alert("Please fill in all fields!");
    } else {
        createNewCard();
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
    }
};

function createNewCard () {
    // Create a new card for a new book
    const newLibrary = document.createElement("div");
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

    // Style the newLibrary
    Object.assign(newLibrary.style, {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "10px",
    });

    // Style the newDiv
    Object.assign(newDiv.style, {
        background: "rgb(176, 201, 231)",
        border: "1px solid rgb(47, 229, 232",
        borderRadius: "15px",
        height: "12rem",
        marginLeft: "10px",
        marginTop: "20px",
        width: "22rem",
    });

    // Style the first div in newCard
    Object.assign(newCardDiv1.style, {
        color: "rgb(40, 116, 43)",
        display: "flex",
        flexDirection: "row",
        fontSize: "16px",
    });

    // Style the 2nd div in newCard
    Object.assign(newCardDiv2.style, {
        color: "rgb(40, 116, 43)",
        display: "flex",
        flexDirection: "row",
        fontSize: "16px",
    });

    // Style the third div in newCard
    Object.assign(newCardDiv3.style, {
        color: "rgb(40, 116, 43)",
        display: "flex",
        flexDirection: "row",
        fontSize: "16px",
    });

    // Work on delete button
    deleteButton.addEventListener("click", deleteBook);
    function deleteBook() {
        newLibrary.remove();  
    };

    // style card and input contents
    titleOne.style.marginLeft = "30px";
    titleOne.textContent = "Title of Book:";
    titleTwo.style.marginLeft = "20px";
    titleTwo.textContent = title.value
    authorOne.style.marginLeft = "30px";
    authorOne.textContent = "Name of Author:";
    authorTwo.style.marginLeft = "20px";
    authorTwo.textContent = author.value;
    pagesOne.style.marginLeft = "30px";
    pagesOne.textContent = "Number of Pages:";
    pagesTwo.style.marginLeft = "20px";
    pagesTwo.textContent = pages.value;
    deleteButton.textContent = "Delete Post";

    // style delete button
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

    // place elements created in the DOM into the page
    newLibraryDiv.appendChild(newLibrary);
    newLibrary.appendChild(newDiv);
    newDiv.appendChild(newCard);
    newCard.appendChild(newCardDiv1);
    newCardDiv1.appendChild(titleOne);
    newCardDiv1.appendChild(titleTwo);
    newCard.appendChild(newCardDiv2);
    newCardDiv2.appendChild(authorOne);
    newCardDiv2.appendChild(authorTwo);
    newCard.appendChild(newCardDiv3);
    newCardDiv3.appendChild(pagesOne);
    newCardDiv3.appendChild(pagesTwo);
    newCard.appendChild(deleteButton);
}