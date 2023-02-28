let myLibrary = [];

function Book(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${readStatus}`
    };
}

const closeButton = document.getElementById("closeForm");
const popUpButton = document.getElementById("openForm");
const addBook = document.querySelector(".addBook");
const popUp = document.querySelector(".form")



closeButton.addEventListener('click', toggleForm);
popUpButton.addEventListener('click', toggleForm);
addBook.addEventListener('click', (e) =>{
    e.preventDefault()
    addBookToLibrary()
    renderBooks()
    toggleForm()
});



function renderBooks(){
    const library = document.querySelector(".userBooks")
    library.textContent = ""
    for (let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i]
        const bookCard = document.createElement("div")

        const bookTitle = document.createElement("h3")
        bookTitle.textContent = `"${book.title}"`
        const bookAuthor = document.createElement("h5")
        bookAuthor.textContent = `By: ${book.author}`
        const bookPages = document.createElement("h5")
        bookPages.textContent = `Number of Pages: ${book.pages}`
        const readStatus = document.createElement("div")
        readStatus.textContent = "unread"

        if(book.readStatus){
            readStatus.textContent = "read"
            readStatus.style.backgroundColor = "rgb(64, 182, 92)";
        }
        const removeButton = document.createElement("button")
        removeButton.textContent = `remove book`
        bookCard.append(bookTitle, bookAuthor, bookPages, readStatus, removeButton)


        removeButton.addEventListener('click', (e) =>{
            const index = myLibrary.indexOf(e.target);
            bookCard.remove()
            return myLibrary.splice(index, 1);
        });

        bookCard.className = "bookCard" 
        library.appendChild(bookCard)
    }
}
function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const readStatus = document.querySelector("#read").checked;
    const newBook = new Book(title, author, pages, readStatus)
    myLibrary.push(newBook)
}

function toggleForm(){
    popUp.classList.toggle("hidden")
}

