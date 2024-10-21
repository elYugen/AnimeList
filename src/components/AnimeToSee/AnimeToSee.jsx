import React, { useState, useEffect } from 'react';
import AnimeSearchForToSee from '../AnimeSearchForToSee/AnimeSearchForToSee'; 
import './AnimeToSee.css';

function AnimeToSee() {
  const [animesToSee, setAnimesToSee] = useState([]);

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
  

  return (
    <>
      <AnimeSearchForToSee onAnimeAdded={handleAnimeAdded} /> 
      {animesToSee.length > 0 ? (
        animesToSee.map((anime) => (
          <div className="anime-item" key={anime.name}>
            <img src={anime.image} alt={anime.name} className="anime-image" />
            <div className="anime-details">
              <h3>{anime.name}</h3>
              <div className="anime-actions">
                <button className="trash-button" onClick={() => handleRemoveAnime(anime.name)}><i className="bi bi-trash"></i></button>
                <button className="seen-button" onClick={() => handleMarkAsSeen(anime)}><i className="bi bi-check"></i></button>
                <button className="in-progress-button" onClick={() => handleMoveToInProgress(anime)}><i className="bi bi-eye"></i></button>
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

export default AnimeToSee;
