'use client'
import CharacterGrid from "@/components/CharacterGrid";
import EpisodeList from "@/components/EpisodeList";
import { Character } from "@/types/character";
import { Episode } from "@/types/episode";
import { useEffect, useState } from "react";



const HomePage = () => {
  const [initialEpisodes, setInitialEpisodes] = useState<Episode[]>([]);
  const [selectedEpisodeCharacters, setSelectedEpisodeCharacters] = useState<Character[]>([]);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoadingCharacters, setIsLoadingCharacters] = useState(false);
  const [initialCharacters, setInitialCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const episodesRes = await fetch('https://rickandmortyapi.com/api/episode');
        const episodesData = await episodesRes.json();
        setInitialEpisodes(episodesData.results);

        const charactersRes = await fetch('https://rickandmortyapi.com/api/character');
        const charactersData = await charactersRes.json();
        setSelectedEpisodeCharacters(charactersData.results);
        setInitialCharacters(charactersData?.results)
      } catch (error) {
        console.error("Failed to fetch initial data:", error);
      }
    };
    fetchInitialData();
  }, []);

  const handleEpisodeClick = async (episodeId: number | null) => {
    setSelectedEpisodeId(episodeId);
    setIsLoadingCharacters(true);
    setFetchError(null);

    try { 
      if(!episodeId){
        setSelectedEpisodeCharacters(initialCharacters);
        return
      }
      const episodeRes = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId || ""}`);
      // const episodeRes = await fetch(`https://rickandmortyapi.com/api/episode${episodeId ? `/${episodeId}` : ""}`);
      const episodeData = await episodeRes.json();
      const characterUrls = episodeData.characters;

      const characterData = await Promise.all(
        characterUrls.map((url: string) => fetch(url).then(res => res.json()))
      );

      setSelectedEpisodeCharacters(characterData);
    } catch (error) {
      console.error("Failed to fetch characters:", error);
      setFetchError("Failed to load characters for this episode.");
    } finally {
      setIsLoadingCharacters(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
      {/* Episode List (Sidebar) */}
      <aside className="md:w-72 border-b md:border-b-0 md:border-r border-gray-800 p-6 flex flex-col backdrop-blur-sm">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-100 mb-6 tracking-tight pb-2">
          Episode <span className="text-cyan-400">List</span>
        </h2>
        <EpisodeList
          episodes={initialEpisodes}
          onEpisodeClick={handleEpisodeClick}
          selectedEpisodeId={selectedEpisodeId}
        />
      </aside>

      {/* Character Grid*/}
      <main className="flex-1 flex flex-col max-h-screen">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 mb-6 tracking-tight border-b border-gray-700 pb-2 pt-5 text-center">
          <span className="text-cyan-400">Rick N Morty</span> Characters
        </h2>

        <div className="flex-1 overflow-y-auto px-6 pb-6 thin-scrollbar">
          <CharacterGrid
            characters={selectedEpisodeCharacters}
            isLoading={isLoadingCharacters}
            error={fetchError} />
        </div>
      </main>
    </div>
  );

};

export default HomePage;