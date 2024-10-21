import React, { useState, useEffect } from 'react';
import './AnimeToSee.css';

function AnimeToSee() {
  const [animesToSee, setAnimesToSee] = useState([]);

  useEffect(() => {
    const storedAnimes = JSON.parse(localStorage.getItem('AnimesToSee')) || [];
    setAnimesToSee(storedAnimes);
  }, []);
  
  return (
    <>
      {animesToSee.length > 0 ? (
        animesToSee.map((anime) => (
          <div className="anime-item" key={anime.name}>
            <img src={anime.image} alt={anime.name} className="anime-image" />
            <div className="anime-details">
              <h3>{anime.name}</h3>
              <div className="anime-actions">
                <button className="trash-button"><i class="bi bi-trash"></i></button>
                <button className="seen-button"><i class="bi bi-check"></i></button>
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