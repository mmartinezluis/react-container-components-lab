// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => 
    <div className="review-list">
        {props.reviews.map(review => <div key={review} className="review">{review}</div> ) }
    </div>

        
export default MovieReviews