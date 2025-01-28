import { useEffect, useState } from "react"


function ApiPage(){
    const [theme, setTheme] = useState('')
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null)

    async function getApi(){
        if(!theme){
            setError(error)
            setBooks([])
            return
        }

        const ApiURL = `https://www.googleapis.com/books/v1/volumes?q=subject:${theme}&langRestrict=en`;

        try{
            const resp = await fetch(ApiURL)
            if (!resp.ok) throw new Error("Failed to fetch data");
            const json = await resp.json()

            setBooks(json.items || [])
            setError(null)
        }
        catch(error){
            setBooks([])
            console.log(error)
        }
    }

    useEffect(()=>{
        if(theme){
            getApi()}
    }, [theme])

    return(
        <div className= "w-full flex flex-col items-center">    
            <div className="my-4 px-4">
                <h1 className='text-xl mb-6 sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl text-emerald-700 font-bold font-sans mt-2 lg:mt-4'>Discover your next read!</h1>
                <h2 className="text-2xl font-bold mb-4">Search Books By Theme</h2>
                    <input
                        type="text"
                        placeholder="Enter book theme"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className="h-8 w-full mb-4 lg:h-10 bg-slate-200 border-2 border-custom-bg rounded p-2 2xl:mb-3"
                    />
                    {error && <p className="text-red-500">Error: {error}</p>}
                    <div>
                        {books.length > 0 ? (
                            <ul>
                                {books.map((book, index) => {
                                    const volumeInfo = book.volumeInfo || {}
                                        return (
                                            <li key={index} className="border-b py-2">
                                                <p className="font-semibold">{volumeInfo.title}</p>
                                                <p className="text-sm text-gray-600"> {volumeInfo.authors ? volumeInfo.authors.join(", ") : "Unknown Author"}</p>
                                            </li>
                                        );
                                    })}
                            </ul>
                        ) : (<p>No books found</p>
                        )}
                    </div>
            </div>
        </div>
    )
}

export default ApiPage