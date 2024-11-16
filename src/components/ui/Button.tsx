import React, { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {

    const { children, className, ...rest } = props

        return (
        <div>
            <button className={`w-48 border-2 border-custom-bg rounded-lg mt-4 p-2 bg-custom-bg text-white hover:text-black hover:bg-emerald-600 hover:border-black ${className}`} {...rest}
            >{children}</button>
        </div>
    )
}

export default Button
