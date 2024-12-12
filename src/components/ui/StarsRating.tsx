import { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6"


type StarsRatingProps = {
    rating?: number;
    onRatingChange: (rating: number) => void;
};


function StarsRating( {rating= 0, onRatingChange}: StarsRatingProps) {

    const [localRating, setLocalRating] = useState(rating)

    // Esto es para que al hacer click en añadir libro se reseten las estrellas a 0
    useEffect(() => {
        setLocalRating(rating);
    }, [rating]);


    const handleRating = (rate: number) => {
        if(onRatingChange){
            setLocalRating(rate);
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
                    className={`justify-center text-xl md:text-2xl ${star <= localRating ? 'text-yellow-400' : 'text-gray-400'}`}>
                <FaStar  /></button>
            )}
            
        </div>
    )
}

export default StarsRating
