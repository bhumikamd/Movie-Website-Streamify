import React from "react";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose}>X</button>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Title}</h2>
        <p><b>Year:</b> {movie.Year}</p>
        <p><b>Rating:</b> {movie.imdbRating}</p>
        <p><b>Actors:</b> {movie.Actors}</p>
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieModal;