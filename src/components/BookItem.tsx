import { AiTwotoneEdit } from "react-icons/ai"; 
import { AiOutlineDelete } from "react-icons/ai"; 
import { Book } from "../config/types"
import StarsRating from '../components/ui/StarsRating'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type BookItemProps = {
    book: Book;
    getBooksUser: () => void
}

function BookItem (props: BookItemProps) {

    const { book, getBooksUser } = props; 
    const navigate = useNavigate()

    function editBook() {
        navigate(`/editBook`, { state: {book}}) // Así pasamos el libro como estado
    }

    async function deleteBook() {
        console.log(book.book_id)
        try{
            const resp = await fetch(`http://localhost:3000/books?book_id=${book.book_id}`,
                {method: 'DELETE'}
            )
            const json = await resp.json()
            console.log(json)
            // Aquí llamamos a una función para que me vuelva a llamar a la funcion getBooksUser (de bookPage) para que me setee los libros de nuevo
            
            if(json.code === 200){
                toast.success("This book has been deleted")
                getBooksUser();
            }
                
        
        }
        catch(error){
            if(error instanceof Error){
                toast.error(error.message)
                console.log(error)
            }
        }
    }

    return (
        <article className="border-2 border-custom-bg my-3 w-[200] sm:w-[250px] sm:h-[300px] md:w-45 md:h-[550px] rounded-md bg-emerald-100 flex flex-col ">
            <div className="w-25 md:w-45 h-[200px] md:h-[350px] aspect-[2/3] overflow-hidden"> 
                <img className= "mb-3 2-full h-full object-cover flex m-auto my-2 p-3 rounded-xl" src= {book?.photo || '/img/portadaVacia.png'} alt= {`Portada del libro ${book.title}`}/>
            </div>
            <div className="flex flex-col gap-2 p-2 flex-grow">
                <span className="font-serif text-black text-xl truncate">{book.title}</span>
                <div className="flex justify-between items-center gap-2">
                    <span className="font- text-gray-600 truncate">{book.author}</span>
                    <span className="bg-custom-bg text-sm py-1 px-4 rounded-full text-white">{book.type}</span>
                </div> 
                <div className="flex items-center">
                    <span className="m-1"><StarsRating onRatingChange={() => {}} rating={book.rating}></StarsRating></span>
                    <button className="ml-auto text-xl mr-2 hover:scale-110"  onClick={editBook}> <AiTwotoneEdit /></button>
                    <button className="text-xl"><AiOutlineDelete className="text-red-700 cursor-pointer hover:scale-110"  onClick={deleteBook}/></button>
                </div>
                <button className="p-2 rounded hover:border-2 hover:bg-custom-bg hover:text-white ">Mis notas</button>
            </div>
        </article>
    )
}

export default BookItem