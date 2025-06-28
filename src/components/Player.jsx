import { useRef, useState, useEffect } from "react"; 
import { FaSync } from 'react-icons/fa';

import { FaPlay, FaPause, FaStepForward, FaRedo, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const Player = ({ currentSong, nextSong }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [loop, setLoop] = useState(false);
    const [volume, setVolume] = useState(1);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false); 
    useEffect(() => {
        if (currentSong) {
            audioRef.current.src = currentSong.media_url;
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [currentSong]);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleLoop = () => {
        setLoop(!loop);
        audioRef.current.loop = !loop;
    };

    const handleNext = () => {
        if (nextSong) nextSong();
    };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        audioRef.current.volume = e.target.value;
    };

    const handleProgressChange = (e) => {
        const newTime = (audioRef.current.duration * e.target.value) / 100;
        audioRef.current.currentTime = newTime;
        setProgress(e.target.value);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        if (isMuted) {
            audioRef.current.volume = volume; // Restore previous volume
        } else {
            audioRef.current.volume = 0; // Mute the audio
        }
    };

    useEffect(() => {
        const updateProgress = () => {
            const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(percent || 0);
        };

        if (audioRef.current) {
            audioRef.current.addEventListener("timeupdate", updateProgress);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("timeupdate", updateProgress);
            }
        };
    }, []);

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1D2021] flex flex-col shadow-lg">
            {/* Seekbar */}
            <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                className="w-full h-[5px] bg-green-400 cursor-pointer accent-[#229e90]"
                onChange={handleProgressChange}
            />

            <div className="flex justify-between items-center mb-3 px-3 mt-2">
                {/* Song Info */}
                <div className="flex items-center gap-3 lg:w-[30vw]">
                    {currentSong && (
                        <>
                            <img src={currentSong.image} alt="Album Art" width="50" className="rounded-lg" />
                            <div className="hidden lg:block">
                                <span className="font-semibold text-white">{currentSong.song}</span>
                                <p className="text-xs text-[#c1bbb3]">{currentSong.music}</p>
                            </div>
                        </>
                    )}
                </div>

                {/* Controls */}
                <div className="flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] justify-center">
                    <button onClick={toggleLoop} className={`text-gray-400 ${loop ? "text-red-500" : ""}`}>
                        <FaSync />
                    </button>
                    <button onClick={togglePlay} className="text-[#c1bbb3] hover:text-gray-500">
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button onClick={handleNext} className="text-[#c1bbb3] hover:text-gray-500">
                        <FaStepForward />
                    </button>
                </div>

                {/* Volume Control */}
                <div className="flex lg:w-[30vw] justify-end items-center">
                    {/* Toggle mute with icon */}
                    <button onClick={toggleMute}>
                        {isMuted ? (
                            <FaVolumeMute className="text-[#c1bbb3] text-2xl lg:text-3xl cursor-pointer" />
                        ) : (
                            <FaVolumeUp className="text-[#c1bbb3] text-2xl lg:text-3xl cursor-pointer" />
                        )}
                    </button>
                    <input 
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={isMuted ? 0 : volume} // Set volume slider to 0 when muted
                        className="ml-2 w-20 lg:w-24 cursor-pointer accent-[#229e90]"
                        onChange={handleVolumeChange}
                        disabled={isMuted} // Disable volume control when muted
                    />
                </div>
            </div>

            <audio ref={audioRef} autoPlay />
        </div>
    );
};

export default Player;
