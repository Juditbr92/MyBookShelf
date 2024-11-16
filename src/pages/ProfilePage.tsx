import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { useForm } from 'react-hook-form'


type FormValues = {
    username: string,
    email: string, 
    photo: string
}
function ProfilePage() {

    const { register, handleSubmit, formState} = useForm<FormValues>();
    const { errors } = formState

    function onSubmit (data: FormValues) {
        console.log(data)
    }

    return (
        <div className="flex mt-4 flex-col items-center min-w-full min-h-auto">
            <div className="flex flex-col gap-2 mt-auto items-center 2xl:mt-10">         
                    <h1 className='text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl text-emerald-700 font-bold font-sans mt-2 lg:mt-4 lg:mb-4'>Your profile</h1>
            </div>

            <div className='flex gap-64 items-center'>

                <div className='sm: hidden md:flex'>
                    {/* Aquí poner que me venga la imagen perfil*/}
                    <img src="img\editBook.jpg" alt="Photo of your avatar" className='w-[200px] h-[200px] rounded-full'/>
                </div>

                <div className='h-full mt-2'>
                    <form onSubmit = {handleSubmit(onSubmit)} className='h-auto flex flex-col w-auto text-sm md:text-base gap-2 md:gap-4 md:mb-2 lg:mb-8 lg:mt-8 p-4 text-center border-2 2xl:border-4 border-custom-bg rounded 2xl:py-8'>
                        <div>
                            <Input 
                            className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                            label="Username:" 
                            placeholder= "Username" 
                            type="text" 
                            {...register('username', {
                                required:"Username required",
                                minLength: {
                                    value: 4,
                                    message: 'Username has to be longer than 3 characters'
                                }
                            })}
                            />
                            {errors.username && <span className="text-red-500 text-xs" >{errors.username.message}</span>}
                        </div>
                        <div>
                            <Input 
                            className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                                label="Email:" 
                                type="email" 
                                placeholder="Email"
                                {...register('email', {
                                    required: "Email required",
                                    pattern: {
                                    value: /^.+@[^.].*\.[a-z]{2,}$/, 
                                    message: "Email not valid"
                                }
                                })}
                            />  
                            {errors.email && <span className="text-red-500 text-xs" >{errors.email.message}</span>}
                        </div>

                        <div>
                            <Input 
                            className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                            label="Photo:" 
                            type="text" 
                            placeholder= "Photo URL"
                            {...register('photo', {
                                required: "Photo required"
                            })}
                            />
                            {errors.photo && <span className="text-red-500 text-xs" >{errors.photo.message}</span>}
                        </div>
                        
                    <Button>Update Profile</Button>
                    </form>
                </div>
                
            </div>
        
    </div>
    )
}

export default ProfilePage
