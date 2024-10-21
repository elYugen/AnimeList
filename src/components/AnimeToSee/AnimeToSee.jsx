import React, { useState, useEffect } from 'react';
import './AnimeToSee.css';

function AnimeToSee() {
  const [animesToSee, setAnimesToSee] = useState([]);

  useEffect(() => {
    const storedAnimes = JSON.parse(localStorage.getItem('AnimesToSee')) || [];
    setAnimesToSee(storedAnimes);
  }, []);

  const handleRemoveAnime = (name) => { // Supprime l'animé du localStorage
    const updatedAnimes = animesToSee.filter((anime) => anime.name !== name);
    setAnimesToSee(updatedAnimes);
    localStorage.setItem('AnimesToSee', JSON.stringify(updatedAnimes));
  };
  
  return (
    <>
      {animesToSee.length > 0 ? (
        animesToSee.map((anime) => (
          <div className="anime-item" key={anime.name}>
            <img src={anime.image} alt={anime.name} className="anime-image" />
            <div className="anime-details">
              <h3>{anime.name}</h3>
              <div className="anime-actions">
                <button className="trash-button" onClick={() => handleRemoveAnime(anime.name)}><i className="bi bi-trash"></i></button>
                <button className="seen-button"><i className="bi bi-check"></i></button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun anime ajouté pour l'instant.</p>
      )}
    </>
  );
};

export default AnimeToSee;