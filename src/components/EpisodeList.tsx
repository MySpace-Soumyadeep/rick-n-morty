import { Episode } from '@/types/episode';

interface EpisodeListProps {
  episodes: Episode[];
  onEpisodeClick: (episodeId: number | null) => void;
  selectedEpisodeId: number | null;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, onEpisodeClick, selectedEpisodeId }) => {

  return (
    <div className="relative h-full bg-gray-900 border-t md:border-t-0 md:border-r border-gray-800 rounded-t-lg">
      <div className="max-h-[80vh] overflow-y-auto pr-1 scroll-container">
        <ul className="space-y-2">
          {episodes.map((episode) => (
            <li
              key={episode.id}
              onClick={() =>
                selectedEpisodeId === episode.id
                  ? onEpisodeClick(null)
                  : onEpisodeClick(episode.id)
              }
              className={`
            cursor-pointer px-3 py-2 rounded-md transition-colors duration-200 text-sm font-medium
            hover:bg-gray-100/10
            ${selectedEpisodeId === episode.id
                  ? "bg-blue-600/10 dark:bg-blue-400/10 border-l-4 border-blue-500 dark:border-blue-400"
                  : ""
                }
          `}
            >
              {episode.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

};

export default EpisodeList;