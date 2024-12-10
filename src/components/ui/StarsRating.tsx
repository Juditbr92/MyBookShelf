import { useState } from 'react'
import { FaStar } from "react-icons/fa6"


type StarsRatingProps = {
    rating?: number;
    onRatingChange: (rating: number) => void;
};


function StarsRating( {rating= 0, onRatingChange}: StarsRatingProps) {

    const [localRating, setlocalRating] = useState(rating)

    const handleRating = (rate: number) => {
        if(onRatingChange){
            setlocalRating(rate);
            onRatingChange(rate)
        }
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
