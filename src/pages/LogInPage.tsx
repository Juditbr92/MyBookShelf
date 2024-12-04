import { toast } from "react-toastify"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import { useForm } from 'react-hook-form'
import axios, { isAxiosError } from "axios"
import { Navigate, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

type LogInValues = {
    email: string, 
    password: string
}

function LogInPage() {

    const {register, handleSubmit, formState} = useForm<LogInValues>()
    const {errors } = formState
    const navigate = useNavigate()
    const { logIn } = useContext(UserContext) // Esto es del userProvider
    const myDataBase = axios.create({
        baseURL: 'http://localhost:3000'
    })

    

        // Esta es la función para manejar el envío del formulario
    const onSubmit = async(data: LogInValues) => {
        try{
            const resp = await myDataBase.post('/login', data) // Aquí POST a la API para autenticación
            console.log(resp);
            const user = resp.data // Este user me lo devuelve la BBDD

            // Si hay usuario, lo guardamos en el contexto
            if(logIn){
                logIn(user)
            }

            toast.success('You have successfully logged in 😉!')
            navigate('/')
        }
        catch(error){
            if(isAxiosError(error)){
                console.log(error.response?.data)
                toast.error("You cannot log in. Please try again!")
            } else {
                console.log(error)
            }
        }
    }

    
    return (
        <div className="flex flex-col items-center mt-2 w-full">
            <div>
                <div className="flex flex-col gap-2 mt-8 items-center">
                    <h1 className='text-4xl text-emerald-700 font-bold font-sans mb-10'>Log In</h1>
                </div>
            </div>

                <div className="flex justify-center items-center gap-0 xl:gap-24 space-x-12 xl:space-x-24 w-full">
                    <img src="img\chicoLeyendo-removebg-preview.png" alt="Figura de un hombre leyendo" className="ml-8 h-32 xl:h-52 sm: hidden md:flex"/>
                    <form onSubmit={handleSubmit(onSubmit)} className='h-auto flex flex-col w-auto gap-4 p-8 mb-8 text-center border-2 border-custom-bg rounded'>
                        <div>
                            <Input 
                            className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                            label="Email:" 
                            placeholder= "Email" 
                            type="email" 
                            {...register('email', {required: "Email required",
                                pattern: {
                                value: /^.+@[^.].*\.[a-z]{2,}$/, 
                                message: "Email not valid"
                            }
                            })}
                            />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                        </div>

                        <div>
                            <Input 
                            className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                            label="Password:" 
                            type="password" 
                            placeholder= "Password" 
                            {...register('password', {
                                required: "Password required",
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/,
                                    message: "Password not valid"
                                }
                            })}
                            />
                            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                        </div>

                    <Button>Log In</Button>
                    </form>
                    <img src="img\logIn-removebg-preview.png" alt="Figura de una mujer leyendo" className="h-32 xl:h-52 sm: hidden md:flex"/>
                </div>
        </div> 
    )

    }

    

export default LogInPage