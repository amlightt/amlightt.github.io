import React from "react"; 

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({title, original_language, vote_avarge, poster_path, relase_data, overview}) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={API_IMG + poster_path}></img>
            <p>{overview}</p>
        </div>
    )
}

export default MovieBox; 