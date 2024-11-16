import React from 'react'

function Titles(props) {

    const { children } = props

    return (
        <>
            <h1 className= "text-3xl font-bold text-center mt-4">{props.children}</h1>
        </>
    )
}

export default Titles;