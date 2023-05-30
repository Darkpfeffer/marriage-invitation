//import
import { useState, useEffect } from "react"

//import self made components
import { FrontPage } from "../first-page/front-page"
import { MusicButton } from "../music-button/music-button"
import { NaviBackArrow } from "../navi-back-arrow/navi-back-arrow"

export const MainView = () => {
    //set states
    const [page, setPage] = useState(0)

    //set functions
    const decrement = () => {
        setPage(page - 1)
    };


    return (
        <>
        <MusicButton />
        { page > 0 && (
            <NaviBackArrow 
                onClick={ decrement }
                page={ page }
            />
        )}

        { page === 0 && (
            <FrontPage />
        )}
        </>
    )
}