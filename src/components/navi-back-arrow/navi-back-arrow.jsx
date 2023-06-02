import NaviBack from "../../img/Navigational_arrow.svg"

export const NaviBackArrow = ({ onClick }) => {
    
    return (
        <button onClick={onClick} className="navi-back"><img src={NaviBack} className="navi-back__img"/></button>
    )
}