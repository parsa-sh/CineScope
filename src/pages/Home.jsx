import { useState } from "react";
import Search from "../components/Search";

const Home = () => {
    const [search, setSearch] = useState("");
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
         </div>
      </main>
   );
};

export default Home;
