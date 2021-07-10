import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'oFIUHvBH2A1hKW0yq7xVmpz6eGIDpjQb';
let URL = query => `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&`
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // debugger
        fetch(URL(this.state.searchTerm))
        .then(resp => resp.json())
        .then(({results}) => 
            this.setState({ reviews: results.map(movie => movie.headline) })     
        )
    }

    // makeReviews = () =>{
    //     if (this.state.reviews === null ) {
    //         return <MovieReviews review = "Nothing found." />
    //     }
    //     return this.state.reviews.map((movie,index) => <MovieReviews key={index} review = {movie.headline} />)
    // }

    render(){
        // console.log(this.state.searchTerm)
        return(
            <div className="searchable-movie-item">
                <h1>Review Search</h1>
                <form onSubmit = {event => this.handleSubmit(event)}>
                    <input type="text" value={this.state.searchTerm} onChange={(event) => this.setState({ searchTerm: event.target.value})} />
                    <input type="submit" />
                </form>
                <div className="review-list">
                 {/* {this.makeReviews()}  */}
                 <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }

}