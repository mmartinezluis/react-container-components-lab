import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'oFIUHvBH2A1hKW0yq7xVmpz6eGIDpjQb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviews extends Component {
    constructor() {
        super()

        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(resp =>resp.json())
        .then(({results}) => 
            this.setState({ 
                reviews: results.map(movie => movie.summary_short) 
            })
        )
    }

    // makeReviews = () =>{
    //     return this.state.reviews.map((movie,index) => <MovieReviews key={index} review = {movie.summary_short} />)
    //   }

    render() {
        console.log(this.state.reviews)
        return(
            <div className="latest-movie-reviews">
                <h1>Latest Reviews</h1>
                {/* {this.makeReviews()} */}
                <MovieReviews reviews= {this.state.reviews} />
            </div>
        )
    }
}

