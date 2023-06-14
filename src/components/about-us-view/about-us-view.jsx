import WikiImage from "../../img/Wiki.png"

import Hamsa from "../../img/hamsa.jpg"

import "./about-us-view.scss"
export const AboutUsView = () => {
    return (
        <>
            <img src={Hamsa} className='hamsa-background'/>
            <div className="about-us-content desktop">
                <img src={WikiImage} rel="wiki image" className="about-us__img"></img>
                <h3 className="about-us__title"><span className="about-us__title--capital">K</span>incső és Zoltán története</h3>
                <p>
                    <span className="about-us__year">2019</span>. április 19-én ismerkedtünk meg, Németországban, mikor közös ismerősünk bemutatott minket egymásnak munkahelyünkön. A nyilvánvaló nehézségek ellenére, hogy tudtuk, távkapcsolat vár ránk, összejöttünk. Júniusban már össze is költöztünk, de szeptembertől Kincső Budapestre ment tanulni, és csak pár hetente tudtunk találkozni. Az egyik ilyen találkozás során vettük meg első közös kiskedvencünket, egy Vénusz légycsapóját, ami egy rovaremésztő növény.
                </p>
                <p>
                    <span className="about-us__year">2020</span> márciusában, mikor kirobbant a világjárvány, távoktatást vette kezdetét, úgyhogy újra egy fedél alatt élhettünk. Nem sokkal később, első évfordulónkon, megvettük második közös kiskedvencünket is, egy tengerimalacot, akit Morzsának vagy Milimalinak szólítottunk. A nyáron még egy kis utazást is sikerült beiktatunk, Amszterdamba látogattunk, és a Balatonon üdültünk. Aztán újra eljött az ősz, és mivel csitult a járvány, hibrid oktatás vette kezdetét, emellett a szakmai gyakorlat ideje is eljött, ami azt jelentette, Kincső visszatért Budapestre. A legnehezebb hónapok köszöntöttek ránk, mert egyáltalán nem tudtunk találkozni a karanténszabályok miatt. Ezek a hónapok arra tanítottak minket, értékeljük azt is, ami olyan természetesnek tűnik: hogy az ember együtt él szerelmével, találkozhat vele nap mint nap.
                </p>
                <p>
                    <span className="about-us__year">2021</span> év elején a távkapcsolatok korszaka számunkra véget ért, egyszer és mindenkorra, mivel visszavezették a távoktatást. Február 4-én családunk bővült, kutyánk, Leszter megvételével. A kölyökkora sok kihívást tartogatott, igencsak felforgatta életünket, de mára már egy kedves kutyus lett. 19 őszétől 21 nyaráig összesen 2 év telt el úgy, hogy előre kiszámíthatlan volt, mikor tudunk találkozni. Ez után felszabadító volt végre úgy élni, hogy egy utazás vége többé nem jelenti az együtt töltött idő végét is. A nyáron beiktattunk egy kis tengerparti pihenést, Görögországba, Míkonosz szigetére repültünk, ez volt Zoli élete első repülőútja.
                </p>
                <p>
                    <span className="about-us__year">2022</span> februárjában pedig igazán különleges élményben volt részünk, egy maldív-szigeteki álomutazás formájában. Tavasszal autótávolságra lévő városokba látogattunk el, Berlinbe és Prágába. Ősszel mindketten karrierváltó tanfolyamba fogtunk, ami igencsak átformálta hétköznapjainkat és jövőnket. A tél beköszöntével elveszítettük első két kiskedvencünket, ámde nem csak rossz dolgok értek minket. A téli naprofulón, december 21-én, mikor Kincső hazaért, egy virágcsokor és egy üzenet fogadta Zolitól. Meglepetésrandit szervezett egy olasz étterembe, és megtörtént a várva várt eljegyzés.
                </p>
                <p>
                    <span className="about-us__year">2023</span>-ban vár ránk az esküvő, a nászút, és még ki tudja mit tartogat az év. Reméljük, a jövő évtől kezdve pedig nagyobb terveinket is egy-kettőre valóra váltjuk!
                </p>
                <p className="about-us__quote">
                    <span className="about-us__quote--capital">A</span>kik ketten együtt járják az élet sokszínű útját, kevésbé fáradnak el, édesebben pihennek, és vidámabban vándorolnak tovább, mint a társtalan utasok. Örömük megkétszereződik, mert ketten örülnek neki,
                    bánatuk feleakkorává válik, mert ketten hordozzák, terheik könnyebbek,
                    mert ketten viselik, hitük erősebb, mert ketten hiszik.
                </p>
                <h4 className="about-us__thanks">Köszönünk minden kis és nagy segítséget idáig vezető utunkon és az esküvőszervezésben! </h4>
            </div>

            <div className="about-us-content mobile">
                <img src={WikiImage} rel="wiki image" className="about-us__img"></img>
                <h4 className="about-us__title"><span className="about-us__title--capital">K</span>incső és Zoltán története</h4>
                <p>
                    <span className="about-us__year">2019</span>. április 19-én ismerkedtünk meg, Németországban, mikor közös ismerősünk bemutatott minket egymásnak munkahelyünkön. A nyilvánvaló nehézségek ellenére, hogy tudtuk, távkapcsolat vár ránk, összejöttünk. Júniusban már össze is költöztünk, de szeptembertől Kincső Budapestre ment tanulni, és csak pár hetente tudtunk találkozni. Az egyik ilyen találkozás során vettük meg első közös kiskedvencünket, egy Vénusz légycsapóját, ami egy rovaremésztő növény.
                </p>
                <p>
                    <span className="about-us__year">2020</span> márciusában, mikor kirobbant a világjárvány, távoktatást vette kezdetét, úgyhogy újra egy fedél alatt élhettünk. Nem sokkal később, első évfordulónkon, megvettük második közös kiskedvencünket is, egy tengerimalacot, akit Morzsának vagy Milimalinak szólítottunk. A nyáron még egy kis utazást is sikerült beiktatunk, Amszterdamba látogattunk, és a Balatonon üdültünk. Aztán újra eljött az ősz, és mivel csitult a járvány, hibrid oktatás vette kezdetét, emellett a szakmai gyakorlat ideje is eljött, ami azt jelentette, Kincső visszatért Budapestre. A legnehezebb hónapok köszöntöttek ránk, mert egyáltalán nem tudtunk találkozni a karanténszabályok miatt. Ezek a hónapok arra tanítottak minket, értékeljük azt is, ami olyan természetesnek tűnik: hogy az ember együtt él szerelmével, találkozhat vele nap mint nap.
                </p>
                <p>
                    <span className="about-us__year">2021</span> év elején a távkapcsolatok korszaka számunkra véget ért, egyszer és mindenkorra, mivel visszavezették a távoktatást. Február 4-én családunk bővült, kutyánk, Leszter megvételével. A kölyökkora sok kihívást tartogatott, igencsak felforgatta életünket, de mára már egy kedves kutyus lett. 19 őszétől 21 nyaráig összesen 2 év telt el úgy, hogy előre kiszámíthatlan volt, mikor tudunk találkozni. Ez után felszabadító volt végre úgy élni, hogy egy utazás vége többé nem jelenti az együtt töltött idő végét is. A nyáron beiktattunk egy kis tengerparti pihenést, Görögországba, Míkonosz szigetére repültünk, ez volt Zoli élete első repülőútja.
                </p>
                <p>
                    <span className="about-us__year">2022</span> februárjában pedig igazán különleges élményben volt részünk, egy maldív-szigeteki álomutazás formájában. Tavasszal autótávolságra lévő városokba látogattunk el, Berlinbe és Prágába. Ősszel mindketten karrierváltó tanfolyamba fogtunk, ami igencsak átformálta hétköznapjainkat és jövőnket. A tél beköszöntével elveszítettük első két kiskedvencünket, ámde nem csak rossz dolgok értek minket. A téli naprofulón, december 21-én, mikor Kincső hazaért, egy virágcsokor és egy üzenet fogadta Zolitól. Meglepetésrandit szervezett egy olasz étterembe, és megtörtént a várva várt eljegyzés.
                </p>
                <p>
                    <span className="about-us__year">2023</span>-ban vár ránk az esküvő, a nászút, és még ki tudja mit tartogat az év. Reméljük, a jövő évtől kezdve pedig nagyobb terveinket is egy-kettőre valóra váltjuk!
                </p>
                <p className="about-us__quote">
                    <span className="about-us__quote--capital">A</span>kik ketten együtt járják az élet sokszínű útját, kevésbé fáradnak el, édesebben pihennek, és vidámabban vándorolnak tovább, mint a társtalan utasok. Örömük megkétszereződik, mert ketten örülnek neki,
                    bánatuk feleakkorává válik, mert ketten hordozzák, terheik könnyebbek,
                    mert ketten viselik, hitük erősebb, mert ketten hiszik.
                </p>
                <h5 className="about-us__thanks">Köszönünk minden kis és nagy segítséget idáig vezető utunkon és az esküvőszervezésben! </h5>
            </div>
        </>
    )
}