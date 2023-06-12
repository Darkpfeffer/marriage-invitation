//Importing
import React from "react"

export const MusicButton = () => {
    const audio = new Audio("https://darkpfeffer-music-player.onrender.com/chapel-of-love.mp3")
    let isPlaying = false;
    audio.volume = 1;

    const audioToggle = (event) => {
        event.preventDefault()

        if(isPlaying) {
            audio.pause();
            isPlaying = false;
        } else {
            audio.play();
            isPlaying = true;
        } 
    }

    return (
        <>
        <button
            onClick={audioToggle}
        >
        Play
        </button>
        </>
    )
}