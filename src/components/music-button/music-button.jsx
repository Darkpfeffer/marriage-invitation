//Importing
import React, { useState, useEffect } from "react"

//Import image
import musicButton from "../../img/Music_Button.svg"
import musicButtonActive from "../../img/Music_Button_Active.svg"

//import self scss
import "./music-button.scss"

//audio player
const useAudio = () => {
    const [audio] = useState(new Audio("https://darkpfeffer-music-player.onrender.com/chapel-of-love.mp3"));
    audio.volume = 1;
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing])

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle]
}

export const MusicButton = () => {
    const [playing, toggle] = useAudio()
        
    return (
        <>
        <button
            onClick={toggle}
            className="music-button"
        >{playing ? (
            <img 
                src={musicButtonActive} 
                rel="active music button"
                className="music-img" 
            />
        ) : (
            <img 
                src={musicButton} 
                rel="music button" 
                className="music-img"
            />
        )}
        
        </button>
        </>
    )
}