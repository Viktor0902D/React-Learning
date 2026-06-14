import { useState, useEffect } from "react";

const fetchMoviesAPI = async (searchQuery) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (searchQuery.toLowerCase() === "error") {
        reject(new Error("500: Movie Database is offline."));
      }
      if (!searchQuery.trim()) {
        resolve([]);
      } else {
        resolve([
          { id: 'm1', title: `${searchQuery}: The Beginning`, year: '2021' },
          { id: 'm2', title: `${searchQuery} Part II`, year: '2023' },
          { id: 'm3', title: `Return of ${searchQuery}`, year: '2025' }
        ]);
      }
    }, 1500); // 1.5 second simulated network delay
  });
};

const MovieExplorer = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Start the timer immediately. No synchronous state updates!
    const timerId = setTimeout(() => {
      
      // 2. We are now safely in the async loop (500ms after they stopped typing)
      if (!query.trim()) {
        setMovies([]);
        setLoading(false);
        setError(null);
        return; // Exit the timeout early
      }

      // 3. ONLY trigger the loading spinner if they actually stopped typing
      setLoading(true);
      setError(null);

      const fetchMovies = async () => {
        try {
          const results = await fetchMoviesAPI(query);
          setMovies(results);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      
      fetchMovies();
    }, 500);

    return () => clearTimeout(timerId);
  }, [query]);

  return (
    <div className="movie-explorer">
      <h1>Movie Explorer</h1>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading && <p>Loading movies...</p>}
      {error && <h2 style={{ color: "red" }}>Error: {error}</h2>}

      {!isLoading && !error && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <strong>{movie.title}</strong> ({movie.year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieExplorer;
