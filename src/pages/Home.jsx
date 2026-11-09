import { useEffect, useState } from "react";
import Search from "../components/Search";
import {
   movieListService,
   trendingListService,
   searchListService,
} from "../services/moviesService";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import TrendingCard from "../components/TrendingCard";

const Home = () => {
   const [search, setSearch] = useState("");
   const [movieList, setMovieList] = useState([]);
   const [trendingList, setTrendingList] = useState([]);
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);
   const [trending, setTrending] = useState("week");

   //fetch discovery movie list
   useEffect(() => {
      const fetchMovieList = async () => {
         setLoading(true);
         try {
            if (search.trim()) {
               const result = await searchListService(search, page);
               setMovieList(result);
               setLoading(false);
            } else {
               const result = await movieListService(page);
               setMovieList(result);
               setLoading(false);
            }
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      };

      fetchMovieList();
   }, [page, search]);

   //fetch trending movies
   useEffect(() => {
      const fetchTrendingMovies = async () => {
         setLoading(true);
         try {
            const result = await trendingListService(trending);
            setTrendingList(result);
            setLoading(false);
         } catch (error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      };

      fetchTrendingMovies();
   }, [trending]);

   return (
      <main>
         <div className="pattern" />

         <div className="wrapper">
            {/* header */}
            <header>
               <img src="./hero-img.png" alt="banner image" />
               <h1>
                  Find your Movie with <br />
                  <span className="text-gradient">CineScope</span>
               </h1>
            </header>

            {/* search */}
            <Search Search={search} SetSearch={setSearch} />

            {/* trending list */}
            {loading ? (
               <Spinner />
            ) : (
               <section className="trending">
                  <span className="text-[#0c91df] text-5xl font-bold">
                     Trending
                  </span>
                  <div className="trending-bg">
                     <ul className="mt-5">
                        {trendingList.map((movie) => (
                           <TrendingCard key={movie.id} movie={movie} />
                        ))}
                     </ul>
                  </div>
               </section>
            )}

            {/* discovery list */}
            {loading ? (
               <Spinner />
            ) : (
               <section className="all-movies">
                  <span className="text-[#0c91df] text-5xl font-bold">
                     Discovery
                  </span>
                  <ul className="mt-5">
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
