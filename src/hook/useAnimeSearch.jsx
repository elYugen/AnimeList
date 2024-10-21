import { useState, useEffect } from 'react';

const useAnimeSearch = (query) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Débounce : attente avant d'envoyer la requête
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const delayDebounceFn = setTimeout(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
          if (!response.ok) {
            throw new Error('Trop de requête');
          }
          const data = await response.json();
          setResults(data.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, 500); // 500ms avant d'envoyer la requête

    return () => clearTimeout(delayDebounceFn); // Nettoyer le timeout si query change
  }, [query]);

  return { results, loading, error };
};

export default useAnimeSearch;
