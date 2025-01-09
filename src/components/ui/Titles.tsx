
function Titles(props: any) {

    const { children } = props

    return (
        <div className="flex flex-col gap-2 mt-auto items-center 2xl:mt-10">
            <h1 className='text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl text-emerald-700 font-bold font-sans mt-2 lg:mt-4'>{children}</h1>
        </div>
    )
}

export default Titles;