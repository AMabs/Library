const newBook = document.getElementById("newBook");
const readStatusUpdate = document.getElementById("readStatusUpdate");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let pages = document.getElementById("bookPages").value;
    let read = document.getElementById("readStatus").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayLibrary();
}

function displayLibrary() {
    let library = document.querySelector("#library");
    library.innerHTML = "";
    for (i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookDiv = document.createElement("div");
        bookDiv.setAttribute("class", "bookCard");
        bookDiv.innerHTML = `
        <div class="bookCardHeader">
            <h3 class="title">${book.title}</h3>
            <h4 class="author">by ${book.author}</h4>
        </div>
        <div class="bookCardBody">
            <p>${book.pages} pages</p>
            <p class="readStatusDisplay"><button id="toggleReadStatusBtn" onclick="toggleReadStatus(${i})">${book.read ? "Read" : "Not read yet"}</button></p>
            <button id="deleteBookBtn" onclick="deleteBook(${i})">Delete</button>
            </div>`;
        library.appendChild(bookDiv);
    }
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function toggleReadStatus(index) {
    myLibrary[index].toggleRead();
    displayLibrary();
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary()
}

newBook.addEventListener("click", () => {
    addBookToLibrary();
    displayLibrary();
})