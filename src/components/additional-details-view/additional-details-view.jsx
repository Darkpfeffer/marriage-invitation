import "./additional-details-view.scss"

import Hamsa from "../../img/hamsa.jpg"

export const AdditionalDetailsView = () => {
    return (
        <div className="additional-details">
            <img src={Hamsa} className='hamsa-background'/>
            <h4 className="additional-header">Lesz - Nem lesz</h4>
            <p className="additional-text">
                Nem lesz: papíralapú meghívó, rizsszórás, <br className="mobile"/>
                menyasszony/menyecske/vejecsketánc, <br className="mobile tablet"/>
                táncos mulatság.<br/>
                Lesz: koszorúslányok királykékben, <br className="mobile"/>
                saját fogadalom, néhány örömkönny, <br className="mobile"/>
                kvíz és más meglepik!
            </p>
            <h4 className="additional-header">Dress Code</h4>
            <p className="additional-text">
                Hogy bárki messziről kiszúrhassa az <br className="mobile"/>
                összeesküvőket a tömegben, tisztelettel arra <br className="mobile"/>
                kérünk minden Hölgyet és Urat, <br className="desktop"/>
                hogy ne <br className="mobile"/>
                fehéret vagy feketét viseljenek. Válasszák <br className="mobile"/>
                inkább a szürke 50 árnyalatát, vagy a <br className="mobile"/>
                szivárvány bármely színét!
            </p>
            <h4 className="additional-header">Megörökített pillanatok</h4>
            <p className="additional-text">
                Profi fotók készülnek majd az Esküvőn és a <br className="mobile"/>
                Nászúton, amiket kérésre megosztunk <br className="mobile"/>
                Vendégeinkkel. <br className="desktop"/>
                Ennélfogva arra bátorítjuk <br className="mobile"/>
                Násznépünket, fotózás és videózás helyett <br className="mobile"/>
                éljenek a pillanatoknak! <br className="desktop"/>
                Lelkes Facebooker <br className="mobile"/>
                Vendégeinket tisztelettel kérjük, <br className="mobile"/>
                tartózkodjanak az intim pillanatok <br className="mobile"/>
                posztolásától.
            </p>
            <h4 className="additional-header">Nászajándék</h4>
            <p className="additional-text">
                A leendő friss házasok irulva-pirulva, hálás <br className="mobile"/>
                szívvel fogják fogadni a borítékba rejtett, <br className="mobile"/>
                papíralapú nászajándékokat.
            </p>
            <h4 className="additional-header">Visszajelzés</h4>
            <p className="additional-text">
            Midőn megszületett a döntés a részvételről, <br className="mobile"/>
            és a dátum is bekerült a naptárba, kérjük <br className="mobile"/>
            üzenetben visszajelezni!
            </p>
        </div>
    )
}