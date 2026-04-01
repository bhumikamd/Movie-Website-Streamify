import React, { useState } from "react";
import { fetchMovies } from "./services/MovieService";
import MovieList from "./components/MovieList";
import "./styles/App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm) return;

    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const data = await fetchMovies(searchTerm);
      setMovies(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <h1>🎬 Streamify</h1>

      <div className="search-bar">
        <input 
  type="text" 
  placeholder="Enter movie name" 
  value={searchTerm} 
  onChange={(e) => setSearchTerm(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
/>
        <button onClick={handleSearch} disabled={loading}>
  Search
</button>
      </div>

      {loading && <div className="loader"></div>}
      {error && <p className="error">{error}</p>}
     {movies.length > 0 && <MovieList movies={movies} />}

{!loading && movies.length === 0 && !error && (
  <p>No movies found</p>
)}
    </div>
  );
}

export default App;