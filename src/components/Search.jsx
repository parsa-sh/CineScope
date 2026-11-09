const Search = ({ Search, SetSearch}) => {
   return (
      <div className="search">
         <div>
            <img src="./search.svg" alt="" />
            <input
               type="text"
               name="search"
               id="search"
               placeholder="Search your movie"
               value={Search}
               onChange={(e) => SetSearch(e.target.value)}
            />
         </div>
      </div>
   );
};

export default Search;
