import React, { useState, useEffect } from 'react';
import AnimeSearchForToSee from '../AnimeSearchForToSee/AnimeSearchForToSee'; 
import './AnimeToSee.css';

function AnimeToSee() {
  const [animesToSee, setAnimesToSee] = useState([]);
  const [randomAnime, setRandomAnime] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const animesPerPage = 5;

  const loadAnimesFromStorage = () => {
    const storedAnimes = JSON.parse(localStorage.getItem('AnimesToSee')) || [];
    setAnimesToSee(storedAnimes);
  };

  useEffect(() => {
    loadAnimesFromStorage();
  }, []);

  const handleAnimeAdded = () => {
    loadAnimesFromStorage();
  };

  const handleRemoveAnime = (name) => {
    const updatedAnimes = animesToSee.filter((anime) => anime.name !== name);
    setAnimesToSee(updatedAnimes);
    localStorage.setItem('AnimesToSee', JSON.stringify(updatedAnimes));
  };

  const handleMarkAsSeen = (anime) => {
    const watchedAnimes = JSON.parse(localStorage.getItem('AnimesWatched')) || [];
    localStorage.setItem('AnimesWatched', JSON.stringify([...watchedAnimes, anime]));
    handleRemoveAnime(anime.name);
  };

  const handleMoveToInProgress = async (anime) => {
    console.log("Anime à déplacer:", anime);
  
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${anime.mal_id}`);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log("Données récupérées de l'API:", data);
  
      const newAnime = {
        mal_id: anime.mal_id,
        name: anime.title || data.data.title, 
        image: data.data.images.jpg.image_url || 'default-image-url.jpg',
        total_episodes: data.data.episodes || 0,
        season: '', 
        episode: '1', 
      };

      const inProgressAnimes = JSON.parse(localStorage.getItem('AnimesInProgress')) || [];
      localStorage.setItem('AnimesInProgress', JSON.stringify([...inProgressAnimes, newAnime]));

      handleRemoveAnime(anime.name);
    } catch (error) {
      console.error('Erreur lors de la récupération des détails de l\'anime:', error);
    }
  };

  const handleRandomAnime = () => {
    if (animesToSee.length > 0) {
      const randomIndex = Math.floor(Math.random() * animesToSee.length);
      setRandomAnime(animesToSee[randomIndex]);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setRandomAnime(null);
  };

  // Pagination logic
  const indexOfLastAnime = currentPage * animesPerPage;
  const indexOfFirstAnime = indexOfLastAnime - animesPerPage;
  const currentAnimes = animesToSee.slice(indexOfFirstAnime, indexOfLastAnime);
  const totalPages = Math.ceil(animesToSee.length / animesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <AnimeSearchForToSee onAnimeAdded={handleAnimeAdded} />
      <button className="btn" onClick={handleRandomAnime}>Quoi voir ?</button>
      {currentAnimes.length > 0 ? (
        currentAnimes.map((anime) => (
          <div className="anime-item" key={anime.name}>
            <img src={anime.image} alt={anime.name} className="anime-image" />
            <div className="anime-details">
              <h3>{anime.name}</h3>
              <div className="anime-actions">
                <button className="trash-button" onClick={() => handleRemoveAnime(anime.name)}><i className="bi bi-trash"></i></button>
                <button className="in-progress-button" onClick={() => handleMoveToInProgress(anime)}><i className="bi bi-eye"></i></button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun anime ajouté pour l'instant.</p>
      )}

      {/* Pagination */}
      {animesToSee.length > animesPerPage && (
        <div className="pagination">
          <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="prevBtn"><i className="bi bi-arrow-left"></i></button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} onClick={() => handlePageChange(page)} className={`pagination-number ${currentPage === page ? 'active' : ''}`}>{page}</button>
          ))}
          <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="nextBtn"><i className="bi bi-arrow-right"></i></button>
        </div>
      )}

      {/* Pop-up pour afficher l'anime aléatoire */}
      {showPopup && randomAnime && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-popup" onClick={closePopup}>✖️</button>
            <img src={randomAnime.image} alt={randomAnime.name} className="popup-image" />
            <p>Tu devrais regarder <strong>{randomAnime.name}</strong> maintenant</p>
          </div>
        </div>
      )}
    </>
  );
}

export default AnimeToSee;