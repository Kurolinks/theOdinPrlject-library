const myLibrary = [];

function books(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages
    // this.readBook = readBook;
    // this.report = function() {
    //     const readStatus = this.hasRead ? "already read" : "not read yet";
    //     return'${this.title} by ${this.author}, ${this.pages}, pages ${this.readBook}.';
    // };
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