import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./KleinSlider.css";

const KleinSlider = () => {
    // const cards = [
    //     { title: "سقف گلکسی لابل", image: "/axSlider/p1.jpeg" },
    //     { title: "سقف اپلای لابل", image: "/axSlider/p2.jpeg" },
    //     { title: "سقف چاپی لابل", image: "/axSlider/p3.jpeg" },
    //     { title: "سقف لاکر لابل", image: "/axSlider/p4.jpeg" },
    //     { title: "سقف ترنسپرنت لابل", image: "/axSlider/p1.jpeg" },
    //     { title: "سقف مات لابل", image: "/axSlider/p2.jpeg" },
    //     { title: "سقف مات لابل", image: "/axSlider/p2.jpeg" },
    //     { title: "سقف مات لابل", image: "/axSlider/p2.jpeg" },
    // ];

    const cards = [
        { image: "/photosSlider/cafe/73a9cb50b705e3abacf676a4df034413_2.webp" },
        { image: "/photosSlider/cafe/other-55.webp" },
        { image: "/photosSlider/cafe/platinumart.pl-20200216-0063.webp" },
        { image: "/photosSlider/cafe/پروژه ولیعصر.webp" },
        { image: "/photosSlider/bathroom/حاجی اقایی 11.webp" },
        { image: "/photosSlider/kitchen/حاجی اقایی رشت 26.webp" },
        { image: "/photosSlider/lobby/gergitavanci-20200407-0004.webp" },
        { image: "/photosSlider/lobby/flexypro-20200325-0008.webp" },
    ]

    return (
        <div className="container">
            <div className="all">

                <div className="card-slider-container">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="card-slider"
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                        }}
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="card">
                                    {/* <img src={card.image} alt={card.title} /> */}
                                    <img src={card.image} />
                                    <div className="card-overlay">
                                        <h3>&nbsp;</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>

    );
};

export default KleinSlider;
