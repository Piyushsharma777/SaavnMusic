import axios from "axios";

const API_URL = "https://api-jiosaavn.vercel.app/song/?query=";

export const fetchSongsByCategory = async (category) => {
    try {
        const response = await axios.get(`${API_URL}${category}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${category} songs:`, error);
        return [];
    }
};
