const Pagination = ({ page, setPage }) => {
   return (
      <div className="page-bar">
         {page > 1 ? (
            <button onClick={() => setPage(page - 1)}>&lt;</button>
         ) : (
            <p>&lt;</p>
         )}
         <span>Page - {page}</span>
         <button onClick={() => setPage(page + 1)}>&gt;</button>
      </div>
   );
};

export default Pagination;
