import { Book } from "../config/types"
import BookItem from "./BookItem"

type BookListProps = {
    books: Book[];
    getBooksUser: () => void
}

function BookList(props: BookListProps){
        
        const {books, getBooksUser} = props
        console.log(books)

        return(
            <div className="flex gap-5 ml-2 flex-wrap">
            {/* Aquí hacemos un map de Book Item para que me saque todos los libros del array */}
            {
                books.map(book => {
                    return <BookItem key={book.book_id} book= {book} getBooksUser= {getBooksUser} />
                })
            }
        </div>
        )
    }


export default BookList