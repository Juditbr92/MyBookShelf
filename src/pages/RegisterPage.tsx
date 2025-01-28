import { useContext, useState } from "react"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import {User} from '../config/types'
import axios, { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"



//Este está validado con validación manual, usando useState y onSubmit que va en el form// 


function RegisterPage() {

    const [registerValues, setRegisterValues] = useState({username: '', email: '', photo: '', password: '', repeatPassword: ''})
    const [errors, setErrors] = useState({username: '', email:'', photo:'', password:'', repeatPassword:''})
    const [touchedInputs, setTouchedInputs] = useState({username: false, email: false, photo: false, password: false, repeatPassword: false})
    
    function handleRegisterForm (event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target

        const checkErrors = { username: '', email:' ', photo: '', password: '', repeatPassword: ''};

        const emailRegex = /^.+@[^.].*\.[a-z]{2,}$/
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/

        if(name === 'username' && !value) checkErrors.username = 'Username required'
        if(name === 'username' && value.length < 4 ) checkErrors.username = 'Username has to be longer than 3 characters'
        if(name === 'email' && !emailRegex.test(value)) checkErrors.email = 'Email not valid'
        if(name === 'photo' && !value) checkErrors.photo = 'URL needed'
        if(name === 'password' && !value) {checkErrors.password = 'Password required';}
            else if(name === 'password' && !passwordRegex.test(value)){checkErrors.password = 'Password requires 6-13 characters, one lower case, one upper case and one digit'}
        if(name === 'repeatPassword') {
            if(!value) {
                checkErrors.repeatPassword = 'Repeat password required'
            } else if(value !== registerValues.password) {
                checkErrors.repeatPassword = 'Passwords are not the same'
            }
        } 

        setRegisterValues({...registerValues, [name]: value})
        setErrors({...errors, ...checkErrors})
    }
    const myDataBase = axios.create({
        baseURL: 'http://localhost:3000'
    })

    const { user, logIn } = useContext(UserContext) // Esto es del userProvider
    const navigate = useNavigate()

    async function addUser(registerValues: User) {
        try{
            const response = await myDataBase.post('/register', registerValues)

            // Guardar token en el localStorage:
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user_id', JSON.stringify(response.data.user?.user_id));

            console.log(response)
            // Actualizamos el userContext con la nueva información
            if(logIn){
                logIn(response.data.user)
            }
            toast.success("You have registered successfully! Now, enjoy MyBookShelf!🙂")
            // redirigir a myBooks
            navigate('/books')
        } catch(error){
            if(isAxiosError(error)){
                console.log(error.response?.data)
                toast.error("We could not register you 😔")
            } else {
                console.log(error)
            }
        }
        
    }

    

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // PRIMERO validamos los campos para ver si hay errores:
        setTouchedInputs({
            username: true,
            email: true,
            photo: true,
            password: true,
            repeatPassword: true,
        });

        // SEGUNDO verificamos si hay errores en algun campo:
        // la funcion .some(error) revisa si al menos un valor en el array cumple la condicion, la primera que no este vacio pero exista error, y la segunda que este el campo vacio
        const hasErrors = Object.values(errors).some((error) => error !== "") || Object.values(registerValues).some((value) => value === "");
        
        if(hasErrors){
            toast.error("This form cannot be submitted. Please correct errors")
            return
        }

        // Si no hay errores, registra al usuario:
        console.log(registerValues)
        console.log(user?.user_id)
        addUser(registerValues).catch((error)=> {
            console.log(error)
        }) 
    }


    return (
        <div className="flex flex-col md:flex-row items-center gap-8 w-full min-h-[calc(70vh-48px)] 2xl:min-h-[calc(90vh-48px)] max-h-screen space-x-24 2xl:space-x-52">
        
            <div className="flex flex-col ml-8 mt-0 items-center space-y-8">
                <div className="ml-8">
                    <h1 className='text-xl lg:text-4xl xl:text-5xl text-emerald-700 font-bold font-sans tracking-wide leading-relaxed mt-20' >Join the biggest reading community!</h1>
                    <span className='text-sm text-gray-700 font-extralight'>Keep track of all your readings and enjoy</span>
                </div>
                
                <div className="hidden md:flex">
                    <img src="img/joinPicture-removebg-preview.png" alt="Group of people reading" className="w-[350px]"/>
                </div>
                
            </div>
        

            <div>
                <form onSubmit={handleSubmit} className='h-[440px] 2xl:h-[500px] flex flex-col w-auto gap-4 p-8 m-2 text-center border-2 border-custom-bg rounded mr-20'>

                    <div>
                        <Input 
                        className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                        label="Username:" 
                        placeholder= "Username" 
                        type="text" 
                        value={registerValues.username}
                        onChange={handleRegisterForm}
                        onBlur = {() => setTouchedInputs({...touchedInputs, username: true})}
                        name ="username"
                        />
                        {errors.username && touchedInputs.username && <span className="text-red-500 text-xs">{errors.username}</span>}
                    </div>

                    <div>
                        <Input 
                        className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                        label="Email:" 
                        type="email" 
                        placeholder= "Email"
                        value={registerValues.email}
                        onChange={handleRegisterForm}
                        onBlur = {() => setTouchedInputs({...touchedInputs, email: true})}
                        name ="email"
                        />
                        {errors.email && touchedInputs.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                    </div>

                    <div>
                        <Input 
                        className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                        label="Photo:" 
                        type="text" 
                        placeholder= "Photo URL"
                        value={registerValues.photo}
                        onChange={handleRegisterForm}
                        onBlur = {() => setTouchedInputs({...touchedInputs, photo: true})}
                        name ="photo"
                        />
                        {errors.photo && touchedInputs.photo && <span className="text-red-500 text-xs">{errors.photo}</span>}
                    </div>

                    <div>
                        <Input 
                        className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                        label="Password:" 
                        type="password" 
                        placeholder= "Password"
                        value={registerValues.password}
                        onChange={handleRegisterForm}
                        onBlur = {() => setTouchedInputs({...touchedInputs, password: true})}
                        name ="password"
                        />
                        {errors.password && touchedInputs.password && <span className="text-red-500 text-xs">{errors.password}</span>}
                    </div>

                    <div>
                        <Input 
                        className="h-8 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                        label="Repeat password:" 
                        type="password" 
                        placeholder= "Repeat password"
                        value={registerValues.repeatPassword}
                        onChange={handleRegisterForm}
                        onBlur = {() => setTouchedInputs({...touchedInputs, repeatPassword: true})}
                        name ="repeatPassword"
                        />
                        {errors.repeatPassword && touchedInputs.repeatPassword && <span className="text-red-500 text-xs">{errors.repeatPassword}</span>}
                    </div>

                    <Button type='submit'>Register</Button>
                </form>
            </div>      
    </div>
    )
}

export default RegisterPage
