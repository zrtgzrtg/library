 
   const myLibrary = []

   let exampleBook1 = new Book("a","a-author",25,false)
   let exampleBook2 = new Book("b","b-author",35,false)
   let exampleBook3 = new Book("c","c-author",45,true)

   myLibrary.push(exampleBook1)
   myLibrary.push(exampleBook2)
   myLibrary.push(exampleBook3)
   const htmlTable = document.querySelector(".table")

 function Book(title, author, numPages, alreadyRead) {
       this.title = title
       this.author = author
       this.numPages = numPages
       this.alreadyRead = alreadyRead
       this.info = () => {
           return `${this.title}, ${this.author}, ${this.numPages}, ${this.alreadyRead}`
       }
   }

   function updateTable() {
    counter = 0
    myLibrary.forEach((book) => {
        displayBook(book, counter)
        counter++
        console.log(book)
    })

   }
   function displayBook(book, bookNum) {

    let dispBook = document.createElement("tr")
    dispBook.setAttribute("class", `row${bookNum}`)
    htmlTable.appendChild(dispBook)
    const dispBookSelected = document.querySelector(`.row${bookNum}`)

    dispBookSelected.appendChild(displayBookHelp(book.title))
    dispBookSelected.appendChild(displayBookHelp(book.author))
    dispBookSelected.appendChild(displayBookHelp(book.numPages))
    dispBookSelected.appendChild(displayBookHelp(book.alreadyRead))
   }
   function displayBookHelp(bookProp) {
    let tdChild = document.createElement("td")
    tdChild.textContent = bookProp
    return tdChild
   }