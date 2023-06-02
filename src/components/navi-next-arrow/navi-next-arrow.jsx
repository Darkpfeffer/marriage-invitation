//Import navigation image
import NaviNext from "../../img/Navigational_arrow.svg"

export const NaviNextArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} className="navi-next"><img src={NaviNext} className="navi-next__img" /></button>
    )
}