import React from "react";
import "./Marquee.css";


const logosData = [
    { id: "1", src: "/logosCompany/kaleh.webp" },
    { id: "2", src: "/logosCompany/atie.webp" },
    { id: "3", src: "/logosCompany/azinKhodro.webp" },
    { id: "4", src: "/logosCompany/fownix.webp" },
    { id: "5", src: "/logosCompany/hacoupian.webp" },
    { id: "6", src: "/logosCompany/iranChob.webp" },
    { id: "7", src: "/logosCompany/iranMal.webp" },
    { id: "8", src: "/logosCompany/meli.webp" },
    { id: "9", src: "/logosCompany/shahrdari.webp" },
    { id: "11", src: "/logosCompany/kaleh.webp" },
    { id: "22", src: "/logosCompany/atie.webp" },
    { id: "33", src: "/logosCompany/azinKhodro.webp" },
    { id: "44", src: "/logosCompany/fownix.webp" },
    { id: "55", src: "/logosCompany/hacoupian.webp" },
    { id: "66", src: "/logosCompany/iranChob.webp" },
    { id: "77", src: "/logosCompany/iranMal.webp" },
    { id: "88", src: "/logosCompany/meli.webp" },
    { id: "99", src: "/logosCompany/shahrdari.webp" },
    { id: "111", src: "/logosCompany/kaleh.webp" },
    { id: "222", src: "/logosCompany/atie.webp" },
    { id: "333", src: "/logosCompany/azinKhodro.webp" },
    { id: "444", src: "/logosCompany/fownix.webp" },
    { id: "555", src: "/logosCompany/hacoupian.webp" },
    { id: "666", src: "/logosCompany/iranChob.webp" },
    { id: "777", src: "/logosCompany/iranMal.webp" },
    { id: "888", src: "/logosCompany/meli.webp" },
    { id: "999", src: "/logosCompany/shahrdari.webp" },
]



export default function Marquee() {


    return (
        <div className="all">

            <div className="our-scrolling-ticker">
                <div className="scrolling-ticker-box">
                    <div className="scrolling-content">
                        {
                            logosData.map(i => (
                                <div key={i.id}>
                                    <div className="logo_img">
                                        <img src={i.src} alt="" />
                                    </div>
                                    <img className="star-svg" src="/logosCompany/zwichen.webp" alt="ستاره" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
