import api from "../api/axios";

export const movieListService = async () => {
   const response = await api.get(
      "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
   );
   return response.data.results;
};
