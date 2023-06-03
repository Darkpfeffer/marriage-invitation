import "./main-details-view.scss"

export const MainDetailsView = () => {
    return (
        <div className="main-details">
            <div className="main-details__date">
                <h1 className="main-details__header" id="date-header">Dátum</h1>
                <div className="main-details__content">
                    <p className="main-details__text" id="date">11 - 11</p>
                    <p className="main-details__text" id="year">2023</p>
                    <p className="main-details__text" id="day">Szombat</p>
                    <p className="main-details__text" id="hour">Kezdés 1 órakor</p>
                </div>
            </div>
            <div className="main-details__ceremony">
                <h1 className="main-details__header" id="ceremony">Szertartás</h1>
                <div className="main-details__content">
                    <p className="main-details__text" id="house">Hiemer-Ház</p>
                    <p className="main-details__text" id="room">Házasságkötő Terem</p>
                    <p className="main-details__text" id="city">8000 Székesfehérvár Jókai utca 1.</p>
                    <p className="main-details__text" id="entrance">Bejárat a Gesztenyés udvaron át</p>
                </div>
            </div>
            <div className="main-details__lunch">
                <h1 className="main-details__header" id="lunch">Ebéd</h1>
                <div className="main-details__content">
                    <p className="main-details__text" id="place">Rosetta Étterem</p>
                    <p className="main-details__text" id="address">Szent István tér 14.</p>
                    <p className="main-details__text" id="distance">350 méterre</p>
                    <p className="main-details__text" id="from-where">a Szertartástól</p>
                </div>
            </div>
        </div>
    )
}