const TrendingCard = ({
   movie: { title, poster_path, release_date },
}) => {
   return (
      <div className="trending-card">
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
            <h3 className="year">
               {release_date ? release_date.split("-")[0] : "N/A"}
            </h3>
         </div>
      </div>
   );
};

export default TrendingCard;
