import { useEffect, useState } from "react"
import BookList from "../components/BookList"
import { Book } from "../config/types"
import { toast } from "react-toastify"



function BookPage() {
    const myDataBase = 'http://localhost:3000'

    const [books, setBook] = useState<Book[]>([])
    const user_id = 1

    async function getBooksUser(){
        try{
            const resp = await fetch(`${myDataBase}/books?user_id=${user_id}`)

            // Lo que me devuelve es un array que tiene data. Y dentro tiene los libros. Lo llamamos JSON porque es un JSON lo que me devuelve
            const json = await resp.json();

            setBook(json)
        } 
        catch(error){
            toast.error;
            console.log(error)
        }
    }

    // Aquí llamo al UseEffect para que se me ejecute nada más empezar.
    useEffect(() => {
        getBooksUser()
    }, []);
    
    return (
        <div className="ml-4 mt-4">
            <h1 className="flex border-b-2 border-custom-bg mb-2 justify-center mx-4 text-4xl text-emerald-700 font-bold font-sans flex-wrap">My books</h1>
            {/* <BookItem book={book}/> */}
            <BookList books={books}/>
        </div>
    )
}

export default BookPage
