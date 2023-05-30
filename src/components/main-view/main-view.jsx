//import
import { useState, useEffect } from "react"

//import self made components
import { FrontPage } from "../first-page/front-page"
import { MusicButton } from "../music-button/music-button"

export const MainView = () => {
    return (
        <>
        <MusicButton />
        <FrontPage />
        </>
    )
}