const MusicCard = ({ song, onPlay }) => {
    // Helper function to truncate music text to first two words
    const truncateText = (text, wordLimit = 2) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };

    return (
        <div 
            className="h-full w-auto p-3 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-120 flex flex-col items-center gap-0"
            onClick={() => onPlay(song)}
        >
            <img src={song.image} alt="song" className="rounded-md w-full h-25 object-cover" /> {/* w-full to make the image take the full width */}
            <p className="mt-2 text-white font-medium text-center truncate">{truncateText(song.song)}</p>
            <p className="text-gray-400 text-sm text-center truncate">{truncateText(song.music)}</p>
        </div>
    );
};

export default MusicCard;
