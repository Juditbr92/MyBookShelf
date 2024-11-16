import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import StarsRating from '../components/ui/StarsRating'
import { useForm } from 'react-hook-form'

type FormValues = {
    title: string,
    author: string, 
    type: string, 
    photo?: string, 
    notes?: string
}

function EditBookPage() {

    const {register, handleSubmit, formState} = useForm<FormValues>()
    const { errors, isValid } = formState

    function onSubmit (data: FormValues) {
        console.log(data);
        
    }


    return (
        <div className="flex mt-4 flex-col items-center min-w-full min-h-auto">
            <div className="flex flex-col gap-2 mt-auto items-center 2xl:mt-10">         
                    <h1 className='text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl text-emerald-700 font-bold font-sans mt-2 lg:mt-4 lg:mb-4'>Edit a book</h1>
            </div>

            <div className='flex h-full place-items-center md:gap-6 lg:gap-20 items-center 2xl:gap-48 2xl:mt-8'>

                <div className="sm: hidden md:flex">
                    {/* Aquí poner que me venga la imagen de portada del libro que quiero modificar o todo el cuadradito del libro */}
                    <img src="public\img\editBook.jpg" alt="Photo of the book being modified" className='w-[500px] h-[300px] rounded-lg'/>
                </div>

                <div className="h-full mt-2">
                    <form onSubmit= {handleSubmit(onSubmit)} className='h-auto flex flex-col w-auto gap-4 p-8 mb-8 text-center border-2 border-custom-bg rounded'>
                        <div>
                            <Input 
                            className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                            label="Title:" 
                            placeholder= "Title" 
                            type="string" 
                            {...register('title', {
                                required: "* Title is required"
                            })}
                            />
                            {errors.title && <span className="text-red-500 text-xs" >{errors.title.message}</span>}
                        </div>

                        <div>
                            <Input 
                            className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                            label="Author:" 
                            type="string" 
                            placeholder= "Author"
                            {...register('author', {
                                required: "* Author is required"
                            })}
                            />
                            {errors.author && <span className="text-red-500 text-xs" >{errors.author.message}</span>}
                        </div>

                        <div>
                            <Input 
                            label="Type:" 
                            type="string" 
                            placeholder= "Type"
                            {...register('type', {
                                required: "* This field is required"
                            })}
                            />
                            {errors.type && <span className="text-red-500 text-xs" >{errors.type.message}</span>}
                        </div>

                        <Input 
                        className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                        label="Photo:" 
                        type="string" 
                        placeholder= "Photo URL"
                        {...register('photo')}
                        />

                        <label className='flex items-center gap-12 from-neutral-500'> Rating: <StarsRating/></label>
                        
                        <Input 
                        className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                        label="Add a note:" 
                        type="text" 
                        placeholder= "What did you think?"
                        {...register('notes')}
                        />
                        <Button disabled= {!isValid}
                    className="disabled: cursor-not-allowed disabled: opacity-60">Edit book</Button>
                    </form>
                </div>

                

            </div>
            
        </div>
    )
}

export default EditBookPage
