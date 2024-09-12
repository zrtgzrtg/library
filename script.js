 
   const myLibrary = []
   const myIds = new Set()
    let counter = 0


   const htmlTable = document.querySelector(".table")
   const body = document.querySelector("body")

   addNewBookObject(new Book("a","a-author",25,false,myLibrary.length))
   addNewBookObject(new Book("b","b-author",35,false,myLibrary.length))
   addNewBookObject(new Book("c","c-author",45,true,myLibrary.length))

 function Book(title, author, numPages, alreadyRead, id) {
       this.title = title
       this.author = author
       this.numPages = numPages
       this.alreadyRead = alreadyRead
       this.id = id
       this.info = () => {
           return `${this.title}, ${this.author}, ${this.numPages}, ${this.alreadyRead}, ${this.id}`
       }
   }

   function updateTable() {
    myLibrary.forEach((book) => {
        console.log(myIds)
        console.log(book.id)
        if(!myIds.has(book.id)){
        displayBook(book, counter)
        counter++
        }
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

    const remButton = document.createElement("button")
    const tdRemButton = document.createElement("td")
    remButton.setAttribute("class", "rem-button")
    remButton.textContent = "Remove Book"
    tdRemButton.appendChild(remButton)
    dispBookSelected.appendChild(tdRemButton)
   }
   function displayBookHelp(bookProp) {
    let tdChild = document.createElement("td")
    tdChild.textContent = bookProp
    return tdChild
   }
   function genFormButton() {
    const divButton = document.createElement("div")
    divButton.setAttribute("class", "div-button")
    const formButton = document.createElement("button")
    formButton.setAttribute("class","form-button")
    formButton.textContent = "NEW BOOK"

    body.appendChild(divButton)
    const divButtonSelected = document.querySelector(".div-button")
    divButtonSelected.appendChild(formButton)

    const formButtonSelected = document.querySelector(".form-button")
    formButtonSelected.addEventListener("click", () => {
        formButtonSelected.remove()
        divButtonSelected.remove()

        const formWrapperSelected = document.querySelector(".form-wrapper")
        formWrapperSelected.innerHTML = htmlForm


        const formOutputSelcted = document.querySelector(".my-form")
        formOutputSelcted.addEventListener("submit", function(event) {
            event.preventDefault()
            const formData = new FormData(event.target)
            const formArray = new Array(formData.entries())

            let formDataEntries = {}
            console.log(formDataEntries.title)
            for (const [name, value] of formData.entries()) {
            console.log(`${name}: ${value}`);  // Logs each form field's name and value
            formDataEntries[`${name}`] = `${value}`
            }

            addNewBook(formDataEntries.title,formDataEntries.author,formDataEntries.numPages,formDataEntries.alreadyRead)
            Array.from(formWrapperSelected.children).forEach((child) => {
                console.log(child)
                child.remove()
            })
            genFormButton()
        })
    })
   }
   function startUp() {
    updateTable()
    genFormButton()
    listenerTable()
   }

   function addNewBook(title,author,numPages,alreadyRead) {
        let myBook;
    if(alreadyRead === undefined) {
     myBook = new Book(title,author,numPages,false,myLibrary.length)
    } else {
     myBook = new Book(title,author,numPages,true,myLibrary.length)
    }
    myLibrary.push(myBook)
    updateTable()
    myIds.add(myBook.id)
   }
   function addNewBookObject(book) {
    myLibrary.push(book)
    updateTable()
    myIds.add(book.id)
   }
   function listenerTable() {
    htmlTable.addEventListener("click", (event)=> {
        const parent = event.target.parentElement.parentElement
        let remId = parent.className.slice(3)
    })
   }


   







   const htmlForm = `<form action="" class="my-form">
        <div class="input1">
          <input name="title" type="text" id="input1" /><label for="input1">Title</label>
        </div>
        <div class="input2">
          <input name="author" type="text" id="input2" /><label for="input2">Author</label>
        </div>
        <div class="input3">
          <input name="numPages" type="number" id="input3" /><label for="input3"
            >Numer of Pages</label
          >
        </div>
        <div class="input4">
          <input name="alreadyRead" type="checkbox" id="input4" value="present" /><label for="input4"
            >Already read</label
          >
        </div>
        <button type="submit" class="book-button">add new Book</button>
      </form>`
      startUp()