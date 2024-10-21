import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './ToSee.css';

function ToSee() {
  const [animesToSee, setAnimesToSee] = useState([]);

  useEffect(() => {
    // Récupérer les animes du localStorage
    const storedAnimes = JSON.parse(localStorage.getItem('AnimesToSee')) || [];
    setAnimesToSee(storedAnimes);  // Stocker la liste des animes dans l'état
  }, []);

  return (
    <>
      <Link to="tosee">
        <div className="categoriesTitle">
          <h3>À voir</h3>
          <h3><i className="bi bi-arrow-right"></i></h3>
        </div>
      </Link>
      <section className="toSee">
        {animesToSee.length > 0 ? (
          animesToSee.map((anime, index) => (
            <div className="toSeeCard" key={index}>
              <div className="toSeeCardImage">
                <img src={anime.image} alt={anime.name} />
              </div>
              <div className="inProgressTitle">
                <p>{anime.name}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun anime ajouté pour l'instant.</p>
        )}
      </section>
    </>
  );
}

export default ToSee;
