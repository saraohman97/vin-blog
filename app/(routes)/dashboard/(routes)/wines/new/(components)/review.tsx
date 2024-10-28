'use client';

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return ( 
        <div className="flex items-center gap-2">
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
 
                return (
                    <label key={star}>
                        <input type="radio" name="rating" value={currentRating} onClick={() => setRating(currentRating)} className="hidden" />
                        <FaStar 
                            className={`cursor-pointer ${currentRating <= (hover || rating) ? "text-yellow-600" : "text-gray-300"}`}
                            size={30} 
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                            // color={currentRating <= (hover || rating) ? "text-yellow-600" : "text-gray-300"} 
                        />
                    </label>
                )
            })}
            <p>Your rating is: {rating}</p>
        </div>
     );
}
 
export default Review;