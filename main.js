const myLibrary = [];

function books(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.readBook = readBook;
    // this.report = function() {
    //     const readStatus = this.hasRead ? "already read" : "not read yet";
    //     return'${this.title} by ${this.author}, ${this.pages}, pages ${this.readBook}.';
    // };
};

function addBookToLibrary (title, author, pages) {
    //take params, create a book then store it in the array
    const firstBook = new books("Taming of the Shrew", "Willaim Shakespear", 230);
    myLibrary.push(firstBook);
};