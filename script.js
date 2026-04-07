const library = [];

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