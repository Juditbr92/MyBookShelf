import { useContext, useEffect, useState } from "react"
import BookList from "../components/BookList"
import { Book } from "../config/types"
import { toast } from "react-toastify"
import { UserContext } from "../context/UserProvider"



function BookPage() {
    const myDataBase = 'http://localhost:3000'

    const [books, setBook] = useState<Book[]>([])
    const { user } = useContext(UserContext)

    async function getBooksUser(){
        // Primero comprobar que existe un user con ese user_id
        if(!user?.user_id){
            toast.error("User not found. Please log in again.");
            return;
        }
        try{
            const resp = await fetch(`${myDataBase}/books?user_id=${user.user_id}`)

            // Lo que me devuelve es un array que tiene data. Y dentro tiene los libros. Lo llamamos JSON porque es un JSON lo que me devuelve
            const json = await resp.json();

            setBook(json)
        } 
        catch(error){
            toast.error("Error fetching books. Please try again");
            console.log(error)
        }
    }

    // Aquí llamo al UseEffect para que se me ejecute nada más empezar.
    useEffect(() => {
        if(user) {
            getBooksUser()
        }  
    }, []);
    
    return (
        <div className="ml-4 mt-4">
            <h1 className="flex border-b-2 border-custom-bg mb-2 justify-center mx-4 text-4xl text-emerald-700 font-bold font-sans flex-wrap">My books</h1>
        {/* Si hay books, entonces muestra el bookList y si no el parrafo */}
            {books.length > 0? (
                <BookList books={books}/>) : (<p>There are no books to show yet. Start adding your books! </p>)}  
        </div>
    )
}

export default BookPage
