import api from "../api/axios";

export const movieListService = async (page) => {
   const response = await api.get(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
   );
   return response.data.results;
};
