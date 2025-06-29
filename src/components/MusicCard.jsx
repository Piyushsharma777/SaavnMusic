const MusicCard = ({ song, onPlay }) => {
    const truncateText = (text, wordLimit = 2) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    return (
        <div
  className="w-[100%] max-w-[80px] sm:max-w-[300px] p-2 sm:p-3 rounded-lg shadow-md cursor-pointer 
             transition-transform transform flex flex-col items-center gap-1 
             hover:scale-100 sm:hover:scale-120 bg-[#1e1e1e]"
  onClick={() => onPlay(song)}
>
  <img
    src={song.image}
    alt="song"
    className="rounded-md w-full aspect-square object-cover"
  />
  <p className="mt-1 text-white font-medium text-[10px] sm:text-sm text-center truncate w-full">
    {truncateText(song.song)}
  </p>
  <p className="text-gray-400 text-[9px] sm:text-xs text-center truncate w-full">
    {truncateText(song.music)}
  </p>
</div>

    );
};

export default MusicCard;
