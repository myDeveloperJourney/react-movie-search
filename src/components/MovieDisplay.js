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
    };

    const notLoaded = () => {
        return <h2>Please Search For A Movie</h2>;
    };

    const notFound = () => {
        return (
            <>
                <h2>Sorry, We Couldn't Find That</h2>
                <p>Please check your spelling and try again</p>
            </>
        );
    };

    return props.movie ? props.movie.Error ? notFound() : loaded() : notLoaded();
}

export default MovieDisplay;