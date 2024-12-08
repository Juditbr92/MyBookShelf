import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6"


type StarsRatingProps = {
    onRatingChange: (rating: number) => void;
};


function StarsRating( {onRatingChange}: StarsRatingProps) {

    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => {
        setRating(rate)
        onRatingChange(rate) // -> esto notifica sobre el cambio en el rating
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
