//import
import { useState, useEffect } from "react"

//import self made components
import { FrontPage } from "../first-page/front-page"
import { MusicButton } from "../music-button/music-button"
import { NaviBackArrow } from "../navi-back-arrow/navi-back-arrow"
import { NaviNextArrow } from "../navi-next-arrow/navi-next-arrow"
import { LetterView } from "../letter-view/letter-view"
import { MainDetailsView } from "../main-details-view/main-details-view"
import { AdditionalDetailsView } from "../additional-details-view/additional-details-view"
import { AboutUsView } from "../about-us-view/about-us-view"

export const MainView = () => {
    //set states
    const [page, setPage] = useState(0)

    //set functions
    const decrement = () => {
        setPage(page - 1)
    };

    const increment = () => {
        setPage(page + 1)
    };

    useEffect(() => {
        document.addEventListener('keydown', keyIncrement)
        return () => document.removeEventListener('keydown', keyIncrement)
    }, [page])

    useEffect(() => {
        document.addEventListener('keydown', keyDecrement)
        return () => document.removeEventListener('keydown', keyDecrement)
    }, [page])
    
    const keyIncrement = (e) => {

        if (page < 4 && (e.key === 'ArrowRight' || e.key === 'd')) {
            setPage(page + 1)
            console.log(page)
        }
    }

    const keyDecrement = (e) => {
        if (page > 0 && (e.key === 'ArrowLeft' || e.key === 'a')) {
            setPage(page - 1)
            console.log(page)
        }
    }

    return (
        <>
        { page > 0 && (
            <NaviBackArrow 
                onClick={ decrement }
                page={ page }
            />
        )}

        <div className="page-content">
            { page === 0 && (
                <FrontPage />
            )} 
            
            { page === 1 && (
                <LetterView />
            )}

            { page === 2 && (
                <MainDetailsView />
            )}

            { page === 3 && (
                <AdditionalDetailsView />
            )}

            { page === 4 && (
                <AboutUsView />
            )}
        </div>

        {page < 4 && (
            <NaviNextArrow 
                onClick={ increment }
            />
        )}
        </>
    )
}