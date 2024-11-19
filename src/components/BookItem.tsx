import { AiTwotoneEdit } from "react-icons/ai"; 
import { AiOutlineDelete } from "react-icons/ai"; 
import { Book } from "../config/types"
import StarsRating from '../components/ui/StarsRating'

type BookItemProps = {
    book: Book
}

function BookItem (props: BookItemProps) {

    const { book } = props; 

    function handleEditBook(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log('Libro editado correctamente')
    }

    function handleDeleteBook(event: React.MouseEvent<SVGElement, MouseEvent>) {
        console.log('Libro borrado correctamente')
    }

    return (
        <article className="border-2 border-custom-bg my-3 w-[200] sm:w-[250px] sm:h-[300px] md:w-45 md:h-[550px] rounded-md bg-emerald-100 flex flex-col ">
            <div className="w-25 md:w-45 h-[200px] md:h-[350px] aspect-[2/3] overflow-hidden"> 
                <img className= "mb-3 2-full h-full object-cover flex m-auto my-2 p-3 rounded-xl" src= {book.photo} alt= {`Portada del libro ${book.title}`}/>
            </div>
            <div className="flex flex-col gap-2 p-2 flex-grow">
                <span className="font-serif text-black text-xl truncate">{book.title}</span>
                <div className="flex justify-between items-center gap-2">
                    <span className="font- text-gray-600 truncate">{book.author}</span>
                    <span className="bg-custom-bg text-sm py-1 px-4 rounded-full text-white">{book.type}</span>
                </div> 
                <div className="flex items-center">
                    <span className="m-1"><StarsRating></StarsRating></span>
                    <button className="ml-auto text-xl mr-2"  onClick={handleEditBook}> <AiTwotoneEdit /></button>
                    <button className="text-xl"><AiOutlineDelete className="text-red-700"  onClick={handleDeleteBook}/></button>
                </div>
                <button className="p-2 rounded hover:border-2 hover:bg-custom-bg hover:text-white ">Mis notas</button>
            </div>
        </article>
    )
}

export default BookItem