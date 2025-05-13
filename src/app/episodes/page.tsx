import { Episode } from '@/types/episode';
import React, { useEffect, useState } from 'react';

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    fetch('[https://rickandmortyapi.com/api/episode](https://rickandmortyapi.com/api/episode)')
      .then(response => response.json())
      .then(data => setEpisodes(data.results));
  }, []);

  return (
    <div>
      <h1>Episodes</h1>
      <ul>
        {episodes.map(episode => (
          <li key={episode.id}>
            {episode.name} ({episode.episode}) - {episode.air_date}
          </li>
        ))}
      </ul>
    </div>
  );
};