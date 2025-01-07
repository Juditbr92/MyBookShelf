import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import StarsRating from '../components/ui/StarsRating'
import { useForm } from 'react-hook-form'
import {  useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


type FormValues = {
    title?: string,
    author?: string, 
    type?: string, 
    photo?: string, 
    notes?: string
}

type EditBookDataType = {
    book_id: number, 
    title?: string,
    author?: string, 
    type?: string, 
    photo?: string, 
    notes?: string, 
}

function EditBookPage() {

    {/*aquí me traigo la info del book. El state me saca todo el book y en consola me sale como book y dentro de ahí el libro. Por eso para llamar 
    a la foto para la imagen tengo que llamar a state.book.photo */}
    const { state } = useLocation()   
    
    const {register, handleSubmit, formState: { errors, isValid }} = useForm<FormValues>(
        {   
            mode: 'onChange',
            defaultValues: {
                title: state?.book?.title || "",
                author: state?.book?.author || "",
                type: state?.book?.type || "",
                photo: state?.book?.photo || "",
                notes: state?.book?.notes || "",
            },
        }
    )

    const [rating, setRating] = useState(0);
    // const [book, setBook] = useState<Book | null>(null);

    const navigate = useNavigate()


    async function onSubmit (data: FormValues) {

        // editBookData me trae todo lo que tiene la data que es del form, más el book_id que lo cojo del state. 
        const editBookData: EditBookDataType = {...data, book_id:state.book.book_id}

        try{
            const resp = await fetch(`http://localhost:3000/books`, {
                method: 'PUT',
                body: JSON.stringify(editBookData),
                headers: {'Content-Type' : 'application/json'}
            })
            const json = await resp.json()
            console.log("Esto es el JSON", JSON)

            if(!json.error){
                toast.success(json.message)
                navigate('/books')
            }
        }catch(error){
            console.log(error)
        }
    }


    return (
        <div className="flex mt-4 flex-col items-center min-w-full min-h-auto">
            <div className="flex flex-col gap-2 mt-auto items-center 2xl:mt-10">         
                    <h1 className='text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl text-emerald-700 font-bold font-sans mt-2 lg:mt-4 lg:mb-4'>Edit book</h1>
            </div>

            <div className='flex h-full place-items-center md:gap-6 lg:gap-20 items-center 2xl:gap-48 2xl:mt-8'>

                <div className="sm: hidden md:flex">
                    {/* Aquí poner que me venga la imagen de portada del libro que quiero modificar o todo el cuadradito del libro */}
                    <article className="border-2 border-custom-bg my-3 w-[350px] h-[440px] xl:h-[480px] 2xl:h-[550px] rounded-md bg-emerald-100 flex flex-col ">
                        <div className="w-25 md:w-45 h-[200px] md:h-[350px] aspect-[2/3] overflow-hidden"> 
                            <img className= "mb-3 2-full h-full object-cover flex m-auto my-2 p-3 rounded-xl" src= {state.book.photo} alt= {`Portada del libro ${state.book.title}`}/>
                        </div>
                        <div className="flex flex-col gap-2 p-2 flex-grow ml-4 mr-4">
                            <span className="font-serif text-black text-xl truncate">{state.book.title}</span>
                            <div className="flex justify-between items-center gastate.p-2">
                                <span className="font- text-gray-600 truncate">{state.book.author}</span>
                                <span className="bg-custom-bg text-sm py-1 px-4 rounded-full text-white">{state.book.type}</span>
                            </div> 
                            <div className="flex items-center">
                                <span className="m-1"><StarsRating onRatingChange={() => {}} rating={state.book.rating}></StarsRating></span>
                            </div>
                            <button className="p-2 rounded hover:border-2 hover:bg-custom-bg hover:text-white ">Mis notas</button>
                        </div>
                    </article>
                </div>

                <div className="h-full mt-2">
                    <form onSubmit= {handleSubmit(onSubmit)} className='h-auto xl:h-[480px] 2xl:h-[550px] flex flex-col w-auto gap-4 p-8 mb-8 text-center border-2 border-custom-bg rounded'>
                        <div>
                            <Input 
                            className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                            label="Title:" 
                            placeholder= "Title" 
                            type="string" 
                            {...register('title')}
                            />
                        </div>

                        <div>
                            <Input 
                            className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                            label="Author:" 
                            type="string" 
                            placeholder= "Author"
                            {...register('author')}
                            />
                        </div>

                        <div>
                            <Input 
                            className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                            label="Type:" 
                            type="string" 
                            placeholder= "Type"
                            {...register('type')}
                            />
                        </div>

                        <Input 
                        className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                        label="Photo:" 
                        type="string" 
                        placeholder= "Photo URL"
                        {...register('photo')}
                        />

<label className='flex items-center gap-12 from-neutral-500'> Rating: <StarsRating onRatingChange={setRating}/></label> 
                        
                        <Input 
                        className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                        label="Add a note:" 
                        type="text" 
                        placeholder= "What did you think?"
                        {...register('notes')}
                        />
                        <Button >Edit book</Button>
                    </form>
                </div>

                

            </div>
            
        </div>
    )
}

export default EditBookPage
