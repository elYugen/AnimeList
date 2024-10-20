import React from 'react';
import useRandomAnime from "../../hook/useRandomAnime"
import './RandomPick.css';

function RandomPick() {
  const { anime, loading, error } = useRandomAnime();
  if (loading) return <img src="loading.gif" style={{display: "flex", justifyContent: "center",width: "50px"}} alt="Chargement" />;
  if (error) return <p>Erreur: {error}</p>;

  const truncateText = (text, limit) => {
    if (!text) return ''; // Retourne une chaîne vide si text est null ou undefined
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };
  return (
    <>
    { anime && (
    <div className="randomPick" style={{ backgroundImage: `url(${anime.image})`}}>
      <div className="randomPickBox">
        <h3>Recommandation Aléatoire</h3>
        <div className="randomPickInfo">
          <div className="randomPickInfoImage">
            <img src={anime.image} alt={anime.title} />
          </div>
          <div className="randomPickInfoTitle">
            <h2>{anime.title}</h2>
            <p>{truncateText(anime.synopsis, 100)}</p>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
};

export default RandomPick;