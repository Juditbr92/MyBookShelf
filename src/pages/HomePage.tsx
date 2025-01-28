import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion'


function HomePage() {

    const sectionClasses = "text-center md:ml-4"
    const imgClasses = "w-40 md:w-4/5 md:h-[230px] lg:h-[220px] xl:w-72 xl:h-[180px] 2xl:h-[300px] 2xl:w-80 object-contain p-2"
    const pClassess = "gap-2 mt-0 w-40 h-[70px] text-xs font-thin p-2 md:w-52 bg-emerald-600 text-white md:w-60 xl:w-72 2xl:h-[100px] mt-2 text-sm 2xl:text-xl flex items-center justify-center text-center rounded";

    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-2 mt-auto pt-4 items-center 2xl:mt-10">
                <motion.h1 
                    className='text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl text-emerald-700 font-bold font-sans mt-2'
                    transition={{duration: 2}}
                    animate = {{
                        scale: 1.1
                    }}>MyBookshelf</motion.h1>
                <motion.span 
                    className='text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-black font-extralight font text-center w-1/3 border-b-2 border-custom-bg'
                    transition={{duration: 2}}
                    animate= {{
                        opacity: 1, 
                        scale: 0.9, 
                    }}>The library that fits in your pocket</motion.span>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex mr-4 ml-4 items-center justify-center text-center gap-2 sm:gap-4 md:gap-6 xl:gap-12 xl:mt-6 2xl:mt-12">
                    <motion.section 
                    className={sectionClasses}
                    whileHover={{ scale: 1.1 }}>
                            <img src='img\Never miss a page.png' alt="" className={imgClasses}/>
                            <div className={pClassess}>
                                <p>Never miss a page. Organize your favorite books</p>
                            </div>
                    </motion.section>

                    <motion.section 
                    className={sectionClasses}
                    whileHover={{ scale: 1.1 }}>
                        <img src="img\find your read.png" alt="" className={imgClasses}/>
                        <div className={pClassess}>
                            <p>Find your next perfect read in seconds</p>
                        </div>
                    </motion.section>

                    <motion.section 
                    className={sectionClasses}
                    whileHover={{ scale: 1.1 }}>
                        <img src="img\grupo_leyendo-removebg-preview.png" alt="" className={imgClasses}/>
                        <div className={pClassess}>
                            <p>Share your reads and recommendations with a vibrant community</p>
                        </div>
                    </motion.section>

                </div>

                <motion.div 
                    className="border-4 border-emerald-600 hover:bg-emerald-600 hover:text-white rounded p-4 justify-center align-middle mt-8 bg-custom-bg text-black md:mt-4 2xl:mt-8"
                    whileHover={{ scale: 1.1 }}>
                    <NavLink to="/register">Sign up now!</NavLink>
                </motion.div>
            </div>
        
        
        </div>
    )
}

export default HomePage
