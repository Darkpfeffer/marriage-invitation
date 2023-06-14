import './front-page.scss'

import Hamsa from "../../img/hamsa.jpg"

export const FrontPage = () => {
    return (
        <>
            <img src={Hamsa} className='hamsa-background'/>
            <div>
                <h1 className="front-page" id="Kincso"><span className='front-page__k'>K</span>incső</h1>
                <h1 className="front-page" id="and">&</h1>
                <h1 className="front-page" id="Zoltan">Zoltán</h1>
            </div>
        </>
    )
}