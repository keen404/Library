const library = [];

const book1 = new book("Marthin", "A1", "P1","P2");
const book2 = new book("Luther King", "A2", "P2","P2");

addBookToLibrary(book1);
addBookToLibrary(book2);
displayBook();

function book(title, author, pages, price) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.price = price;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(book) {
    library.push(book);
}

function displayBook() {
    const displayTable = document.getElementById("display-data");
    library.forEach((book, index) => {
        let row = displayTable.insertRow(index);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        
        cell1.textContent = book.title;
        cell2.textContent = book.author;
        cell3.textContent = book.pages;
        cell4.textContent = book.id;
    });
}