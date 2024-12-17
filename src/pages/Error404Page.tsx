import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

function Error404Page() {

    const [timer, setTimer] = useState(5)
    const navigate = useNavigate()

    // Este es el setTimeout para que me redirija a Home tras 5 segundos (5000). Lo ponemos en el useEffect para que empiece según se cargue la página. 
    // El setTimer es para que lo haga de forma automática. Y termina en 1 seg.
    
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            navigate('/')
        }, 5000);

        const idInterval = setInterval(()=>{
            setTimer((prevTimer) => prevTimer - 1)
        },1000)

        // este es el return del useEffect
        return () => {
            clearTimeout(idTimeOut)
            clearInterval(idInterval)
        }
    }, [navigate])


    return (
        <div className='flex flex-col items-center justify-center mt-32'>
            <h2 className='text-4xl'>Error 404. Not found</h2>
            <h4 className='text-xl'>Taking you back to Home in {timer}</h4>
        </div>
    )
}

export default Error404Page
