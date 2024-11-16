function Logo () {
    return (
        <div className="flex items-center space-x-2 bg-custom-bg">
            <img  className = "w-40 h-51" src="img\logo2.jfif" alt="Logo de la aplicación. Pila de libros" />
            <a className="self-center hover:text-black text-white" href="">MyBookShelf</a>
        </div>
        
    ) 
}

export default Logo