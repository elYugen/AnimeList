import { useState, useEffect } from "react";

const useRandomAnime = () => {
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomAnime = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.jikan.moe/v4/random/anime");
        if (!response.ok) {
          throw new Error("Erreur dans le fetch d'un anime");
        }
        const data = await response.json();
        const randomAnime = {
          title: data.data.title,
          image: data.data.images.jpg.large_image_url,
          synopsis: data.data.synopsis,
          episodes: data.data.episodes || 1, 
          seasons: data.data.seasons || 1, 
          mal_id: data.data.mal_id 
        };
        setAnime(randomAnime);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomAnime();
  }, []);

  return { anime, loading, error };
};

export default useRandomAnime;
