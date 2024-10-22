import React, { useState, useEffect } from 'react';
import AnimeSearchForToSee from '../AnimeSearchForWatched/AnimeSearchForWatched';
import './AnimeWatched.css';

function AnimeWatched() {
  const [animesWatched, setAnimeWatched] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const animesPerPage = 5;
  const maxPageWindow = 5;

  const loadAnimesFromStorage = () => {
    const storedAnimes = JSON.parse(localStorage.getItem('AnimesWatched')) || [];
    setAnimeWatched(storedAnimes);
  };

  useEffect(() => {
    loadAnimesFromStorage();
  }, []);

  const handleAnimeAdded = () => {
    loadAnimesFromStorage();
  };

  const handleRemoveAnime = (name) => {
    const updatedAnimes = animesWatched.filter((anime) => anime.name !== name);
    setAnimeWatched(updatedAnimes);
    localStorage.setItem('AnimesWatched', JSON.stringify(updatedAnimes));
  };

  const indexOfLastAnime = currentPage * animesPerPage;
  const indexOfFirstAnime = indexOfLastAnime - animesPerPage;
  const currentAnimes = animesWatched.slice(indexOfFirstAnime, indexOfLastAnime);
  const totalPages = Math.ceil(animesWatched.length / animesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startPage = Math.max(1, currentPage - Math.floor(maxPageWindow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageWindow - 1);
  return (
    <>
      <AnimeSearchForToSee onAnimeAdded={handleAnimeAdded} />
      {currentAnimes.length > 0 ? (
        currentAnimes.map((anime) => (
          <div className="anime-item" key={anime.name}>
            <img src={anime.image} alt={anime.name} className="anime-image" />
            <div className="anime-details">
              <h3>{anime.name}</h3>
              <div className="anime-actions">
                <button className="trash-button" onClick={() => handleRemoveAnime(anime.name)}>
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun anime ajouté pour l'instant.</p>
      )}

      {/* Pagination */}
      {animesWatched.length > animesPerPage && (
        <div className="pagination">
        <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="prevBtn">
          <i className="bi bi-arrow-left"></i>
        </button>

        {Array.from({ length: (endPage - startPage + 1) }, (_, i) => startPage + i).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)} className={`pagination-number ${currentPage === page ? 'active' : ''}`}>{page}</button>
        ))}

        <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="nextBtn">
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
      )}
    </>
  );
}

export default AnimeWatched;