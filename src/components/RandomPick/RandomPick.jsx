import React from 'react';
import useRandomAnime from "../../hook/useRandomAnime";
import './RandomPick.css';

function RandomPick() {
  const { anime, loading, error } = useRandomAnime();
  
  if (loading) return <div className="loading"><img src="loading.gif" style={{width: "50px"}} alt="Chargement" /></div>;
  if (error) return <p>Erreur: {error}</p>;

  const truncateText = (text, limit) => {
    if (!text) return '';
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };

  const handleAddToLocalStorage = (anime) => {
    const storedAnimes = JSON.parse(localStorage.getItem('AnimesToSee')) || []; 
    const newAnime = {
      mal_id: anime.mal_id,
      name: anime.title,
      image: anime.image || 'default-image-url.jpg',
      total_episodes: anime.episodes || 0,
      season: '',
      episodes: '1',
    };
    console.log("Nouvel anime ajouté:", newAnime);

    localStorage.setItem('AnimesToSee', JSON.stringify([...storedAnimes, newAnime]));
    alert(`${anime.title} a été ajouté à la liste "À voir" !`); 
  };

  return (
    <>
      { anime && (
        <div className="randomPick" style={{ backgroundImage: `url(${anime.image})` }}>
          <div className="randomPickBox">
            <h3>Recommandation Aléatoire</h3>
            <div className="randomPickInfo">
              <div className="randomPickInfoImage">
                <img src={anime.image} alt={anime.title} />
              </div>
              <div className="randomPickInfoTitle">
                <h2>{anime.title}</h2>
                <p>{truncateText(anime.synopsis, 100)}</p>
                <button className="btn" onClick={() => handleAddToLocalStorage(anime)}>À regarder</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RandomPick;
