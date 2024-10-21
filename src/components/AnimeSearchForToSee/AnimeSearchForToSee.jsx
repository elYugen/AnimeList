import React, { useState } from 'react';
import useAnimeSearch from "../../hook/useAnimeSearch"
import './AnimeSearchForToSee.css';

function AnimeSearchForToSee() {
  const [query, setQuery] = useState('');
  const { results, loading, error } = useAnimeSearch(query);
  const [isBoxVisible, setIsBoxVisible] = useState(false);


  const handleAddToLocalStorage = (anime) => {
    const storedAnimes = JSON.parse(localStorage.getItem('AnimesToSee')) || [];
    const newAnime = {
      name: anime.title,
      image: anime.images.jpg.image_url,
    };
    localStorage.setItem('AnimesToSee', JSON.stringify([...storedAnimes, newAnime]));
  };

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <>
    <div className="searchContainer">
      <div className="searchBar">
        <input type="text" placeholder="Rechercher un anime..." value={query} onChange={(e) => { setQuery(e.target.value); setIsBoxVisible(true); }} onClick={toggleBoxVisibility} />
      </div>
      
      {isBoxVisible && (
        <div className="resultBox">
      {loading && <div className="loading"><img src="loading.gif" style={{width: "50px"}} alt="Chargement" /></div>}
      {error && <p>{error}</p>}

      <div className="resultList">
        {results.map((anime) => (
          <div key={anime.mal_id} className="resultItem" onClick={() => handleAddToLocalStorage(anime)}>
            <h3>{anime.title}</h3>
            <img src={anime.images.jpg.image_url} alt={anime.title} width="100" />
          </div>
        ))}
      </div>
      </div>
      )}
    </div>
    </>
  );
};

export default AnimeSearchForToSee;