import { useEffect, useState } from "react";
import { fetchSongsByCategory } from "../api";
import MusicCard from "./MusicCard";

const CategorySection = ({ category, onPlay }) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchSongsByCategory(category).then(setSongs);
    }, [category]);

    return (
        <div className="px-4 py-1 mt-2">
            <h2 className="text-2xl font-semibold mb-2 text-white">{category}</h2>
            <div className="flex overflow-x-auto gap-2 hide-scrollbar w-full">
                {songs.map((song) => (
                    <div className="flex-shrink-0 overflow-hidden rounded-md" key={song.id}>
                        <MusicCard song={song} onPlay={onPlay} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;
