//import
import { useState, useEffect } from "react"

//import self made components
import { FirstPage } from "../first-page/first-page"
import { MusicButton } from "../music-button/music-button"

export const MainView = () => {
    return (
        <>
        <MusicButton />
        <FirstPage />
        </>
    )
}