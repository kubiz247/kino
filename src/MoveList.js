import React from "react";

function Kino({ name, imgSrc, gatunek, kafelki, wiek, godzina }) {
    return (
        <div className="kino-section">
            <img src={imgSrc} alt={name} className="kino-image" />
            <div className="kino-info">
                <b>{name}</b>
                <div>{gatunek}</div>
                <div className="kafelki">
                    {kafelki.map((kafelek, index) => (
                        <span key={index} className={`kafelek ${kafelek.type}`}>
              {kafelek.label}
            </span>
                    ))}
                </div>
                <i>{wiek}</i>
                <div className="godziny">
                    {godzina.map((g, index) => (
                        <span key={index} className="godzina-label">{g}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function MoveList() {
    return (
        <div className="kino-row">
            <Kino
                name="AKADEMIA MAGII"
                imgSrc="https://www.stylowy.net/data/film/36/3601_500x720.jpg"
                gatunek="animowany/przygodowy"
                kafelki={[
                    { label: "DLA DZIECI", type: "dla-dzieci" }
                ]}
                wiek="od lat 6"
                godzina={["11:20", "17:30"]}
            />
            <Kino
                name="DZIKI ROBOT"
                imgSrc="https://www.stylowy.net/data/film/36/3602_500x720.jpg"
                gatunek="animowany/przygodowy/familijny"
                kafelki={[
                    { label: "PREMIERA", type: "premiera" },
                    { label: "DLA DZIECI", type: "dla-dzieci" }
                ]}
                wiek="od lat 7"
                godzina={["15:00", "18:00"]}
            />
            <Kino
                name="JOKER: FOLIE A DEUX"
                imgSrc="https://www.stylowy.net/data/film/35/3595_500x720.jpg"
                gatunek="dramat/kryminalny"
                kafelki={[
                    { label: "NOWOŚĆ", type: "nowosc" },
                ]}
                wiek="od lat 15"
                godzina={["17:00", "20:00"]}
            />
            <Kino
                name="KULEJ. DWIE STRONY MEDALU"
                imgSrc="https://www.stylowy.net/data/film/35/3593_500x720.jpg"
                gatunek="biograficzny"
                kafelki={[
                    { label: "PREMIERA", type: "premiera" },
                ]}
                wiek="od lat 12"
                godzina={["17:30", "20:15"]}
            />
            <Kino
                name="MY, NASZE ZWIERZĘTA I WOJNA"
                imgSrc="https://www.stylowy.net/data/film/36/3608_500x720.jpg"
                gatunek="dokumentalny/dramat"
                kafelki={[
                    { label: "PREMIERA", type: "premiera" },
                    { label: "STUDYJNY", type: "studyjny" },
                    { label: "SALA STUDYJNA", type: "sala" }
                ]}
                wiek="od lat 7"
                godzina={["15:00", "18:00"]}
            />
        </div>
    );
}

export default MoveList;
