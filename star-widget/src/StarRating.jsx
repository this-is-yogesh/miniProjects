import Star from "./Star"
import { useState } from "react"

function StarRating({ maxStars, currentRating, setCurrentRating }) {
    //<Star filled={false} />
  const[hoverIndex,setHoverIndex] = useState(null)
    return (
        <div>
            {Array.from({ length: maxStars }).map((_, index) => 
            
                (<span key={index} onClick={()=>setCurrentRating(index+1)}
                onMouseEnter={()=>setHoverIndex(index)}
                onMouseLeave={()=>setHoverIndex(null)}
                >
                    <Star filled={hoverIndex !==null ? index<=hoverIndex : index<currentRating} />
                    </span>)

            
            )}
        </div>


    )
}

export default StarRating