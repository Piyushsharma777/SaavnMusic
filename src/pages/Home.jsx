import { useState } from "react";
import CategorySection from "../components/CategorySection";

const defaultCategories = [
    "Jai Siya Ram",
    "Trending Now",
    "Today’s Top Hits",
    "All Out 2020s",
    "All Out 80s",
    "New Song",
    "How",
    "Dinner with Friends",
    "Chillout Lounge",
    "Chill Hits",
    "Stress Relief",
    "Peaceful Piano",
];

const Home = ({ onPlay }) => {
    const [categories, setCategories] = useState(defaultCategories);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query.trim()) {
            setCategories(["Searching: " + query, ...defaultCategories]);
        } else {
            setCategories(defaultCategories);
        }
    };

    return (
        <div className="home">
              <i class="search-icon fas fa-search"></i>

            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="search-bar"
            />
            {categories.map((category) => (
                <CategorySection key={category} category={category} onPlay={onPlay} />
            ))}
        </div>
    );
};

export default Home;
