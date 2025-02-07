import { useEffect, useState } from "react";
import { fetchSongs } from "../api";
import MusicCard from "../components/MusicCard";

const SearchResults = ({ query, onPlay }) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        if (query) {
            fetchSongs(query).then(setSongs);
        }
    }, [query]);

    return (
        <div className="search-results">
            <h2>Search Results for "{query}"</h2>
            <div className="list">
                {songs.map((song) => (
                    <MusicCard key={song.id} song={song} onPlay={onPlay} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
