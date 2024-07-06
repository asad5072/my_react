import Book from "./Book"

export default function BookStore({books}){
    return(
        <>
        <h2>Book Name: {books.length} </h2>
        {
            books.map(book=><Book key={book.id} book={book}  />)
        }
        </>
        


        
    )
}