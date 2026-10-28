import { useEffect, useState } from "react";
import Search from "../components/Search";
import { movieListService } from "../services/moviesService";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";

const Home = () => {
   const [search, setSearch] = useState("");
   const [movieList, setMovieList] = useState([]);
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const fetchMovieList = async () => {
         setLoading(true);
         try {
            const result = await movieListService(page);
            setMovieList(result);
            setLoading(false);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
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
            {loading ? (
               <Spinner />
            ) : (
               <section className="all-movies">
                  <ul>
                     {movieList.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                     ))}
                  </ul>
               </section>
            )}

            {!loading && <Pagination page={page} setPage={setPage} />}
         </div>
      </main>
   );
};

export default Home;
