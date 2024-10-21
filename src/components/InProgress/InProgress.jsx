import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './InProgress.css';

function InProgress() {
  const [animesInProgress, setAnimesInProgress] = useState([]);

  useEffect(() => {
    const loadAnimesFromStorage = () => {
      const storedAnimes = JSON.parse(localStorage.getItem('AnimesInProgress')) || [];
      setAnimesInProgress(storedAnimes);
    };

    loadAnimesFromStorage();
  }, []);

  return (
    <>
      <Link to="inprogress">
        <div className="categoriesTitle">
          <h3>En cours de visionnage</h3>
          <h3><i className="bi bi-arrow-right"></i></h3>
        </div>
      </Link>
      <section className="inProgress">
        {animesInProgress.length > 0 ? (
          animesInProgress.map((anime) => (
            <div className="inProgressCard" key={anime.mal_id}>
              <div className="inProgressCardImage">
                <img src={anime.image} alt={anime.name} />
              </div>
              <div className="inProgressTitle">
                <p>{anime.name.length > 17 ? `${anime.name.slice(0, 17)}...` : anime.name}</p>
              </div>
              <div className="inProgressRecap">
                <p>Épisode {anime.episode}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun anime en cours de visionnage.</p>
        )}
      </section>
    </>
  );
};

export default InProgress;
