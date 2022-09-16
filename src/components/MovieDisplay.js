function MovieDisplay(props) {
    if(props.movie !== null) {
        return (
            <>
                <h2>{props.movie.Title}</h2>
                <img src={props.movie.Poster} alt={props.movie.Title} />
            </>
        );
    } else {
        return <h2>Please Search For A Movie</h2>;
    }
}

export default MovieDisplay;