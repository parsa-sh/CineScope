const TrendingCard = ({
   movie: { title, poster_path },
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
         </div>
      </div>
   );
};

export default TrendingCard;
