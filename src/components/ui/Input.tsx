import React, { useId , forwardRef } from 'react'

type InputProps = {
    label?: string,
    placeholder?: string,
    type: string,
    error?: string,
    newInputStyles?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props: InputProps, ref){

    const { label, placeholder, type, error, newInputStyles, ...rest} = props

    const inputId = useId()

    return(
        <div className='flex items-center justify-between gap-4 from-neutral-500 w-auto'>    
            {label && <label htmlFor={inputId}>{label}</label>}
            <div className="relative">
                <input 
                ref = {ref}
                id={inputId}
                className= {`p-2 border-2 border-custom-bg bg-slate-100 rounded ${newInputStyles}`}
                type={type || 'text'} 
                placeholder={placeholder}
                {...rest}/>
                {error && <span className="absolute top-full left-1 text-xs text-red-600">{error}</span>}
            </div>
            
        </div>)
})

export default Input