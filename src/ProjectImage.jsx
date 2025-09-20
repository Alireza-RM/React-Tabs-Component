import styles from './ProjectImage.module.css'

import ImageSlider from "../components/ImageSlider"
import { useState } from 'react'


const imageData = {
    bathroom: [
        "/photosSlider/bathroom/۲۰۱۹۱۲۱۷_۲۰۴۷۱۸.webp",
        "/photosSlider/bathroom/hamed_esmaeiili-20200905-0002.webp",
        "/photosSlider/bathroom/photo_2018-05-12_12-22-49.webp",
        "/photosSlider/bathroom/حاجی اقایی 11.webp",
        "/photosSlider/bathroom/photo_2018-05-12_12-22-49.webp",
        "/photosSlider/bathroom/حاجی اقایی 11.webp",
    ],
    bedroom: [
        "/photosSlider/bedroom/3d_decorium-۲۰۱۷۰۷۱۳-0012.webp",
        "/photosSlider/bedroom/photo_2020-10-26_10-34-29.webp",
        "/photosSlider/bedroom/پرینت-اتاق خواب-مسکونی.webp",
        "/photosSlider/bedroom/لاکر-160-فیبر-لوستر-اتاق خواب.webp",
        "/photosSlider/bedroom/پرینت-اتاق خواب-مسکونی.webp",
    ],
    cafe: [
        "/photosSlider/cafe/73a9cb50b705e3abacf676a4df034413_2.webp",
        "/photosSlider/cafe/other-55.webp",
        "/photosSlider/cafe/platinumart.pl-20200216-0063.webp",
        "/photosSlider/cafe/پروژه ولیعصر.webp",
        "/photosSlider/cafe/other-55.webp",
    ],
    kitchen: [
        "/photosSlider/kitchen/atilla_tevli-۲۰۱۷۰۴۱۲-0010 (1).webp",
        "/photosSlider/kitchen/Cjd7fcVVEAAhkBZ.jpg large.webp",
        "/photosSlider/kitchen/DChnz1pW0AQTJkP.jpg large.webp",
        "/photosSlider/kitchen/حاجی اقایی رشت 26.webp",
        "/photosSlider/kitchen/DChnz1pW0AQTJkP.jpg large.webp",
    ],
    lightbox: [
        "/photosSlider/lightbox/photo_۲۰۲۵-۰۲-۰۲_۱۶-۵۰-۵۵.webp",
        "/photosSlider/lightbox/photo_2025-09-14_11-09-26.webp",
        "/photosSlider/lightbox/photo_2025-09-14_11-09-30.webp",
        "/photosSlider/lightbox/photo_2025-09-14_11-09-37.webp",
        "/photosSlider/lightbox/photo_2025-09-14_11-09-30.webp",
    ],
    lobby: [
        "/photosSlider/lobby/e474c398dd4a8e37040cae1319439d7e57d.webp",
        "/photosSlider/lobby/flexypro-20200325-0008.webp",
        "/photosSlider/lobby/gergitavanci-20200407-0004.webp",
        "/photosSlider/lobby/IMG_1769.webp",
        "/photosSlider/lobby/gergitavanci-20200407-0004.webp",
    ],
    pool: [
        "/photosSlider/pool/edcd60d47386562b4840bf9ceb18ac30.webp",
        "/photosSlider/pool/IMG_20231203_164029.webp",
        "/photosSlider/pool/itemyapi-20200407-0003.webp",
        "/photosSlider/pool/photo_۲۰۲۳-۱۲-۱۸_۱۵-۲۳-۴۲.webp",
        "/photosSlider/pool/photo_۲۰۲۳-۱۲-۱۸_۱۵-۲۳-۴۷.webp",
        "/photosSlider/pool/photo_۲۰۲۴-۰۳-۰۷_۰۰-۳۲-۴۳.webp",
        "/photosSlider/pool/photo_۲۰۲۵-۰۷-۰۱_۲۲-۴۴-۰۰.webp",
        "/photosSlider/pool/photo_2025-09-14_11-00-30.webp",
        "/photosSlider/pool/photo_2025-09-14_11-01-14.webp",
    ],
}

function ProjectImage() {

    const [img, setImg] = useState("cafe")

    const filterImg = imageData[img]

    console.log(filterImg)

    return (
        <div className={styles.container}>


            <div className={styles.all}>

                <div className={styles.nameProject}>
                    <div className={styles.headList}>
                        <h4>🎗️ پروژه های سقف کشسان</h4>
                        <p>بخشی از پروژه‌های انجام شده در فضاهای متفاوت</p>
                    </div>

                    <div className={styles.nameList}>
                        <ul>
                            <li className="" onClick={() => setImg("cafe")}>
                                <p className={`${img === "cafe" ? styles.selectImg : ""}`}>کافه</p>
                            </li>
                            <li className="" onClick={() => setImg("kitchen")}>
                                <p className={`${img === "kitchen" ? styles.selectImg : ""}`}>آشپزخانه</p>
                            </li>
                            <li className="" onClick={() => setImg("bedroom")}>
                                <p className={`${img === "bedroom" ? styles.selectImg : ""}`}>اتاق خواب</p>
                            </li>
                            <li className="" onClick={() => setImg("pool")}>
                                <p className={`${img === "pool" ? styles.selectImg : ""}`}>استخر</p>
                            </li>
                            <li className="" onClick={() => setImg("lobby")}>
                                <p className={`${img === "lobby" ? styles.selectImg : ""}`}>لابی</p>
                            </li>
                            <li className="" onClick={() => setImg("lightbox")}>
                                <p className={`${img === "lightbox" ? styles.selectImg : ""}`}>لایت باکس</p>
                            </li>
                            <li className="" onClick={() => setImg("bathroom")}>
                                <p className={`${img === "bathroom" ? styles.selectImg : ""}`}>حمام</p>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={styles.sliderDiv}>
                    {/* <img src="/hero.png" alt="" /> */}
                    <ImageSlider images={filterImg} />
                </div>
            </div>

        </div>
    )
}

export default ProjectImage