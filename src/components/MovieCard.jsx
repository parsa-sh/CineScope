const MovieCard = ({
   movie: { title, poster_path, vote_average, original_language, release_date },
}) => {
   return (
      <div className="movie-card">
         <img
            src={
               poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : "/No-Poster.png"
            }
            alt="poster"
         />
         <h3 className="mt-4">{title}</h3>
         <div className="content">
            <div className="rating">
               <img src="/star.svg" alt="rating img" />
               <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
               <span className="text-3xl">·</span>
               <h3 className="year">
                  {release_date ? release_date.split("-")[0] : "N/A"}
               </h3>
               <span className="text-3xl">·</span>
               <h3 className="lang">{original_language}</h3>
            </div>
         </div>
      </div>
   );
};

export default MovieCard;
