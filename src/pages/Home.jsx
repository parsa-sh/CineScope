import { useEffect, useState } from "react";
import Search from "../components/Search";
import { movieListService } from "../services/moviesService";
import MovieCard from "../components/MovieCard";

const Home = () => {
   const [search, setSearch] = useState("");
   const [movieList, setMovieList] = useState([]);
   const [page, setPage] = useState(1);

   useEffect(() => {
      const fetchMovieList = async () => {
         try {
            const result = await movieListService();
            setMovieList(result);
         } catch (error) {
            console.log(error);
         }
      };

      fetchMovieList();
   }, [page]);

   return (
      <main>
         <div className="pattern" />
         <div className="wrapper">
            <header>
               <img src="./hero-img.png" alt="banner image" />
               <h1>
                  Find your Movie with <br />
                  <span className="text-gradient">CineScope</span>
               </h1>
            </header>
            <Search Search={search} SetSearch={setSearch} />
            <section className="all-movies">
               <ul>
                  {movieList.map((movie) => (
                     <MovieCard key={movie.id} movie={movie} />
                  ))}
               </ul>
            </section>
            <div className="page-bar">
               {page > 1 ? (
                  <button onClick={() => setPage(page - 1)}>&lt;</button>
               ) : (
                  <p>&lt;</p>
               )}
               <span>Page - {page}</span>
               <button onClick={() => setPage(page + 1)}>&gt;</button>
            </div>
         </div>
      </main>
   );
};

export default Home;
