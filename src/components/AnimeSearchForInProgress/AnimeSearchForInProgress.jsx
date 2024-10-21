import React, { useState } from 'react';
import useAnimeSearch from "../../hook/useAnimeSearch";
import './AnimeSearchForInProgress.css';

function AnimeSearchForInProgress({ onAnimeAdded }) {
  const [query, setQuery] = useState('');
  const { results, loading, error } = useAnimeSearch(query);
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleAddToLocalStorage = (anime) => {
    const storedAnimes = JSON.parse(localStorage.getItem('AnimesInProgress')) || [];
    const newAnime = {
      name: anime.title,
      image: anime.image || 'default-image-url.jpg',
      total_episodes: anime.episodes || 0,
      season: '',
      episode: '1',
    };
    localStorage.setItem('AnimesInProgress', JSON.stringify([...storedAnimes, newAnime]));

    setIsBoxVisible(false);

    if (onAnimeAdded) {
      onAnimeAdded();
    }
  };

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <>
      <div className="searchContainer">
        <div className="searchBar">
          <input type="text" placeholder="Rechercher un anime..." value={query} onChange={(e) => { setQuery(e.target.value); setIsBoxVisible(true); }} onClick={toggleBoxVisibility}/>
        </div>

        {isBoxVisible && (
          <div className="resultBox">
            {loading && <div className="loading"><img src="loading.gif" style={{ width: "50px" }} alt="Chargement" /></div>}
            {error && <p>{error}</p>}

            <div className="resultList">
              {results.map((anime) => (
                <div key={anime.mal_id} className="resultItem" onClick={() => handleAddToLocalStorage(anime)}>
                  <h3>{anime.title}</h3>
                  <img src={anime.image} alt={anime.title} width="100" onError={(e) => {e.target.src = 'default-image-url.jpg'; }} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AnimeSearchForInProgress;