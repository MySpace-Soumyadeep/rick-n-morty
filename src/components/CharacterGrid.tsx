import React from 'react';
import { Character } from '../types/character';

interface CharacterGridProps {
  characters: Character[];
  isLoading: boolean;
  error: string | null;
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ characters, isLoading, error }) => {

  if (isLoading) {
    return <p className="text-gray-400 text-center mt-50">Loading characters...</p>;
  }

  if (error) {
    return <p className="text-red-400 text-center mt-50">{error}</p>;
  }

  if (characters.length === 0) {
    return <p className="text-gray-500 text-center mt-50">No characters found for this episode.</p>;
  }


  return (
    <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] p-6">
      {characters.map(character => (
        <div
          key={character.id}
          className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"

        >
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-auto object-cover transition duration-300 group-hover:brightness-90"
          />

          {/* Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-3 py-2 transition-opacity duration-300 opacity-90 group-hover:opacity-100 ">
            <p className="text-blue-100 text-sm font-medium truncate ">{character.name}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;