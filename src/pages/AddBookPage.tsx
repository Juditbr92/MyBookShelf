import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import { useForm } from 'react-hook-form'
import StarsRating from '../components/ui/StarsRating'


type FormValues = {
    title: string,
    author: string, 
    type: string, 
    photo?: string, 
    notes?: string
}

function AddBookPage() {

    const {register, handleSubmit, formState} = useForm<FormValues>()
    const { errors, isValid } = formState

    function onSubmit (data: FormValues) {
        console.log(data);
        
    }

    return (
        <div className="flex mt-4 flex-col items-center min-w-full min-h-auto">
            <div>
                <div className="flex flex-col gap-2 mt-auto items-center 2xl:mt-10">
                    <h1 className='text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl text-emerald-700 font-bold font-sans mt-2 lg:mt-4'>Add a new book!</h1>
                    <span className='text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-gray-700 font-extralight font'>Keep track of all your readings</span>
                </div>
            </div>

            <div className='flex h-full place-items-center md:gap-6 lg:gap-20 items-center 2xl:gap-48 2xl:mt-8'>
                <div className="sm: hidden md:flex">
                    <img src="img\addBook page.jpg" alt="Picture with lots of books" className='md:w-[350px] md:h-[200px] lg:w-[450px] lg:h-[250px] rounded'/>
                </div>

                <div className="h-full mt-2">
                    <form onSubmit= {handleSubmit(onSubmit)}className='h-auto flex flex-col w-auto text-sm md:text-base gap-2 md:gap-4 md:mb-2 lg:mb-8 lg:mt-8 p-4 text-center border-2 2xl:border-4 border-custom-bg rounded 2xl:py-8'>
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
                            className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
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
                        className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3 "
                        label="Photo:" 
                        type="string" 
                        placeholder= "Photo URL"
                        {...register('photo')}
                        />

                        <label className='flex items-center gap-12 from-neutral-500'> Rating: <StarsRating/></label>
                        
                        <Input 
                        className="h-10 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3 2xl:mt-2"
                        label="Add a note:" 
                        type="text" 
                        placeholder= "What did you think?"
                        {...register('notes')}
                        />
                    <Button disabled= {!isValid}
                    className="disabled:cursor-not-allowed disabled: opacity-60">Add book</Button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default AddBookPage
