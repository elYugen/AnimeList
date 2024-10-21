import React, { useState, useEffect } from 'react';
import AnimeSearchForToSee from '../AnimeSearchForWatched/AnimeSearchForWatched';
import './AnimeWatched.css';

function AnimeWatched() {
  const [animesWatched, setAnimeWatched] = useState([]);

  const loadAnimesFromStorage = () => {
    const storedAnimes = JSON.parse(localStorage.getItem('AnimesWatched')) || [];
    setAnimeWatched(storedAnimes);
  };

  // Charger les animes lors du montage
  useEffect(() => {
    loadAnimesFromStorage();
  }, []);

  // Fonction pour être appelée après l'ajout d'un anime
  const handleAnimeAdded = () => {
    loadAnimesFromStorage(); // Recharge la liste depuis le localStorage
  };

  const handleRemoveAnime = (name) => {
    const updatedAnimes = animesWatched.filter((anime) => anime.name !== name);
    setAnimeWatched(updatedAnimes);
    localStorage.setItem('AnimesWatched', JSON.stringify(updatedAnimes));
  };
  
  return (
    <>
      <AnimeSearchForToSee onAnimeAdded={handleAnimeAdded} />
      {animesWatched.length > 0 ? (
        animesWatched.map((anime) => (
          <div className="anime-item" key={anime.name}>
            <img src={anime.image} alt={anime.name} className="anime-image" />
            <div className="anime-details">
              <h3>{anime.name}</h3>
              <div className="anime-actions">
                <button className="trash-button" onClick={() => handleRemoveAnime(anime.name)}><i className="bi bi-trash"></i></button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun anime ajouté pour l'instant.</p>
      )}
    </>
  );
}

export default AnimeWatched;
