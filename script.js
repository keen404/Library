const library = [];
main();

function cancleAdd() {
    const cancleBtn = document.querySelector("#cancle-add");
    const dialog = document.getElementById("dialog");
    cancleBtn.addEventListener("click", (e) => {
        dialog.close();
    })
}

function confirmAdd(){
    const confirmBtn = document.querySelector("#confirm-add");
    const dialog = document.getElementById("dialog");
    confirmBtn.addEventListener("click", (e)=> {
        e.preventDefault();
        const title = document.querySelector("#book-title");
        const author = document.querySelector("#book-author");
        const pages = document.querySelector("#book-pages");
        const price = document.querySelector("#book-price");
        const addBook = new book(title.value, author.value, pages.value, price.value);
        dialog.close();
        title.value = "";
        author.value = "";
        pages.value = "";
        price.value = "";
        addBookToLibrary(addBook);
        displayBook();
    })
}

function displayDialogAddBook() {
    const dialog = document.getElementById("dialog");
    const activeDialogBtn = document.getElementById("active-dialog");
    activeDialogBtn.addEventListener("click", () => {
        dialog.showModal();
    })
}

function genID() {
    return crypto.randomUUID();
}

function book(title, author, pages, price) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.price = price;
    this.id = genID();
}


function addBookToLibrary(book) {
    library.push(book);
        displayBook();
}


// เอาหนังสือจากArrayมาแสดง
function displayBook() {
    const displayTable = document.getElementById("display-data");
    displayTable.innerHTML = "";
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

function main() {
    // ข้อมูลสำหรับทดลองการทำงาน 
    const book1 = new book("Marthin", "A1", "P1","P2");
    const book2 = new book("Luther King", "A2", "P2","P2");
    const book3 = new book("Luther Kingฤฤฤ", "A2", "P2","P2");

    addBookToLibrary(book1);
    addBookToLibrary(book2);
    addBookToLibrary(book3);
    confirmAdd();
    displayDialogAddBook();

}