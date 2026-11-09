import api from "../api/axios";

export const movieListService = async (page) => {
   const response = await api.get(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
   );
   return response.data.results;
};

export const trendingListService = async (trending) => {
   const response = await api.get(`/trending/movie/${trending}?language=en-US`);
   return response.data.results;
};

export const searchListService = async (query, page) => {
   const response = await api.get("/search/movie", {
      params: { query, page },
   });
   return response.data.results;
};
