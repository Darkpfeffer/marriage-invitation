//Importing
import React from "react"

export const MusicButton = () => {
    let path="../../audio/chapel-of-love.mp3"
    const audio = new Audio(path)
    console.log(audio)
    const audioPlay = (event) => {
        event.preventDefault()

        var promise= audio.play()
        if (promise) {
            promise.catch(function(error) { console.error(error); });
        }
    }

    return (
        <>
        <button
            onClick={audioPlay}
        >
        Play
        </button>
        </>
    )
}