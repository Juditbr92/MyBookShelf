import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6"


function StarsRating() {

    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
    }

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => 
                <button
                    key= {star}
                    type= "button"
                    onClick={() => handleRating(star)}
                    className={`justify-center text-xl md:text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-400'}`}>
                <FaStar  /></button>
            )}
            
        </div>
    )
}

export default StarsRating
