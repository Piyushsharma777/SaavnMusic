import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Player from "./components/Player";

const App = () => {
    const [currentSong, setCurrentSong] = useState(null);

    return (
        <div className="App bg-[#1D2021]">
            <Navbar />
            <Home onPlay={setCurrentSong} />
            <Player currentSong={currentSong} />
        </div>
    );
};

export default App;
