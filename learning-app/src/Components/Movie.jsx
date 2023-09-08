import '../CSS/movie.css';


function Movie ({imdbID, title, year, poster}) {
    return (
        <div className='card'>
            {/* <header className='movie'>  */}
                {/* <div className='card'> */}
                    <img src={poster} alt=''/>
                    <p>                        
                        Imdb_ID:{imdbID}
                        <br/>
                        {title} 
                        <br/>
                        Year: {year}
                        <br/>
                    </p>
                {/* </div> */}
            {/* </header> */}
        </div>
    )
}
export  default Movie;



