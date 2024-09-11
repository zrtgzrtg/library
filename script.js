 
   const myLibrary = []

 function Book(title, author, numPages, alreadyRead) {
       this.title = title
       this.author = author
       this.numPages = numPages
       this.alreadyRead = alreadyRead
       this.info = () => {
           return `${this.title}, ${this.author}, ${this.numPages}, ${this.alreadyRead}`
       }
   }