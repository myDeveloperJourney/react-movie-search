function MovieDisplay(props) {
    
    const loaded = () => {
        return (
            <>
                <h2>{props.movie.Title}</h2>
                <h2>{props.movie.Genre}</h2>
                <img src={props.movie.Poster} alt={props.movie.Title} />
                <h2>{props.movie.Year}</h2>
            </>
        );
    }

    const notLoaded = () => {
        return <h2>Please Search For A Movie</h2>;
    }

    return props.movie ? loaded() : notLoaded();
}

export default MovieDisplay;