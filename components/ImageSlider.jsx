import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import styles from "./ImageSlider.module.css";

const ImageSlider = ({images}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    // const images = [
    //     "/axSlider/p1.jpeg",
    //     "/axSlider/p2.jpeg",
    //     "/axSlider/p3.jpeg",
    //     "/axSlider/p4.jpeg",
    //     "/axSlider/p2.jpeg",
    //     "/axSlider/p3.jpeg",
    //     "/axSlider/p5.jpg",
    //   ];

    return (
        <div className={styles.slider_container}>
            {/* اسلایدر اصلی */}
            <Swiper
                modules={[Navigation, Pagination, Thumbs, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                className={styles.main_slider}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.image_wrapper}>
                            <img src={src} alt={`Ceiling design ${index + 1}`} />
                            <button
                                className={styles.zoom_btn}
                                onClick={() => setFullscreenImage(src)}
                            >
                                🔍
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* thumbnail ها (فقط روی دسکتاپ) */}
            <div className={styles.thumbs_wrapper}>
                <Swiper
                    modules={[Thumbs]}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    watchSlidesProgress
                    freeMode={true}   // اجازه اسکرول آزاد
                    className={styles.thumbs_slider}
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img src={src} alt={`Thumbnail ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* مودال تمام‌صفحه */}
            {fullscreenImage && (
                <div className={styles.fullscreen_overlay} onClick={() => setFullscreenImage(null)}>
                    <img src={fullscreenImage} alt="Fullscreen view" />
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
