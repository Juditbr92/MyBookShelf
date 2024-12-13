import { useContext } from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { useForm } from 'react-hook-form'
import { UserContext } from '../context/UserProvider'


type FormValues = {
    username: string,
    password: string, 
    photo: string
}
function ProfilePage() {

    const { user } = useContext(UserContext)

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

                <div className='xs:hidden sm: hidden md:flex flex-col items-center'>
                    {/* Aquí ponemos la imagen que me viene del perfil*/}
                    <img src={user?.photo} alt="Photo of your avatar" className='w-[280px] h-[250px] rounded-full'/>
                    <span className='mt-4 text-2xl'>{user?.username}</span>
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
                            {errors.username && <span className="block text-red-500 text-xs h-4" >{errors.username.message}</span>}
                        </div>
                        <div>
                            <Input 
                            className="h-8 text-clip lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                                label="Password:" 
                                type="password" 
                                placeholder="Password"
                                {...register('password', {
                                    required: "Password required",
                                    pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/, 
                                    message: "Password requires 6-13 characters, one lower case, one upper case and one digit"
                                }
                                })}
                            />  
                            {errors.password && <span className="block text-red-500 text-xs h-4" >{errors.password.message}</span>}
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
                            {errors.photo && <span className="block text-red-500 text-xs h-4" >{errors.photo.message}</span>}
                        </div>
                        
                    <Button>Update Profile</Button>
                    </form>
                </div>
                
            </div>
        
    </div>
    )
}

export default ProfilePage
