import React, { useState, useEffect } from 'react';
import AnimeSearchForInProgress from '../AnimeSearchForInProgress/AnimeSearchForInProgress';
import './AnimeInProgress.css';

function AnimeInProgress() {
  const [animesInProgress, setAnimesInProgress] = useState([]);

  const loadAnimesFromStorage = () => {
    const storedAnimes = JSON.parse(localStorage.getItem('AnimesInProgress')) || [];
    setAnimesInProgress(storedAnimes);
  };

  useEffect(() => {
    loadAnimesFromStorage();
  }, []);

  const handleAnimeAdded = () => {
    loadAnimesFromStorage();
  };

  const handleRemoveAnime = (name) => {
    const updatedAnimes = animesInProgress.filter((anime) => anime.name !== name);
    setAnimesInProgress(updatedAnimes);
    localStorage.setItem('AnimesInProgress', JSON.stringify(updatedAnimes));
  };

  const handleMarkAsSeen = (anime) => {
    const watchedAnimes = JSON.parse(localStorage.getItem('AnimesWatched')) || [];
    localStorage.setItem('AnimesWatched', JSON.stringify([...watchedAnimes, anime]));

    handleRemoveAnime(anime.name);
  };

  const handleEpisodeChange = (name, episode) => {
    const updatedAnimes = animesInProgress.map((anime) => {
      if (anime.name === name) {
        return { ...anime, episode }; // Mettre à jour l'épisode en cours
      }
      return anime;
    });
    setAnimesInProgress(updatedAnimes);
    localStorage.setItem('AnimesInProgress', JSON.stringify(updatedAnimes));
  };

  return (
    <>
      <AnimeSearchForInProgress onAnimeAdded={handleAnimeAdded} />
      {animesInProgress.length > 0 ? (
        animesInProgress.map((anime) => (
          <div className="anime-item" key={anime.name}>
            <img src={anime.image} alt={anime.name} className="anime-image" />
            <div className="anime-details">
              <h3>{anime.name}</h3>
              <div className="anime-actions">
                <div className="anime-choice">
                <label htmlFor={`${anime.name}-episode`}>Épisode : </label>
                <select id={`${anime.name}-episode`} value={anime.episode} onChange={(e) => handleEpisodeChange(anime.name, e.target.value)}>
                  {/* Créer une option pour chaque épisode */}
                  {[...Array(anime.total_episodes).keys()].map((index) => (
                    <option key={index + 1} value={index + 1}>
                      Épisode {index + 1}
                    </option>
                  ))}
                </select>
                </div>
                <button className="trash-button" onClick={() => handleRemoveAnime(anime.name)}><i className="bi bi-trash"></i></button>
                <button className="seen-button" onClick={() => handleMarkAsSeen(anime)}><i className="bi bi-check"></i></button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun anime en cours.</p>
      )}
    </>
  );
}

export default AnimeInProgress;
