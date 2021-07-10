// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
    return(
        <div className="review-list">
            {props.reviews.map((review,index) => (
                <div key={index} className="review">{review}</div> 
            ))}
        </div>
    )
}

        
export default MovieReviews