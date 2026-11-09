# Movie Explorer

A responsive movie discovery application built with **React, TypeScript, and Vite**, powered by the [TMDB API](https://www.themoviedb.org/). Browse trending movies, search for your favorite titles, and explore detailed movie information.

## Features

-  **Trending Movies:** Discover currently trending movies using the TMDB API.
-  **Movie Search:** Search for movies by title with a debounced search input.
-  **Movie Details:** View detailed information about individual movies.
-  **Pagination:** Navigate through multiple pages of movie results.
-  **Responsive Design:** Optimized for different screen sizes.
-  **API Integration:** Centralized API configuration and reusable service functions.

## Tech Stack

| Technology   | Purpose                             |
| ------------ | ----------------------------------- |
| React        | UI development                      |
| Vite         | Development server and build tool   |
| Tailwind CSS | an open-source CSS framework for UI |
| React Router | Client-side routing                 |
| Axios        | HTTP requests                       |
| React Use    | Reusable React hooks                |
| TMDB API     | Movie data provider                 |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/parsa-sh/CineScope.git
cd YOUR_REPOSITORY
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_TMDB_ACCESS_TOKEN=your_tmdb_access_token
```

You can obtain your API access token from the [TMDB developer settings](https://www.themoviedb.org/settings/api).

**Note:** Vite exposes variables prefixed with `VITE_` to client-side code. Never store private credentials or server-only secrets in these variables.

### 4. Run the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Available Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the development server     |
| `npm run build`   | Build the production application |
| `npm run preview` | Preview the production build     |
| `npm run lint`    | Run ESLint                       |

## API Reference

This project uses [The Movie Database (TMDB) API](https://developer.themoviedb.org/docs).

Main endpoints:

| Endpoint               | Description              |
| ---------------------- | ------------------------ |
| `/trending/movie/day`  | Retrieve trending movies |
| `/trending/movie/week` | Retrieve trending movies |
| `/search/movie`        | Search movies by title   |
| `/movie/{movie_id}`    | Retrieve movie details   |

## Project Structure

```text
src/
├── api/
│   └── axios.js
├── components/
│   ├── MovieCard.jsx
│   ├── Search.jsx
│   ├── Pagination.jsx
│   ├── Spinner.jsx
│   └── StrendingCard.jsx
├── pages/
│   ├── Home.jsx
│   └── MovieDetails.jsx
├── services/
│   └── moviesService.js
├── App.jsx
├── index.css
└── main.jsx
```

## Data Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB.

Movie data and images are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).

## License

This project is open-source and available under the [MIT License](LICENSE).
