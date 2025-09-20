import styles from "./Benefits.module.css"


const benefitsData = [
    { src: "icon-1.webp", title: "نصب سریع" },
    { src: "icon-1.webp", title: "بیش از ۵۰ سال طول عمر مفید" },
    { src: "icon-1.webp", title: "مقاوم در برابر اشتعال" },
    { src: "icon-1.webp", title: "خاصیت ارتجاعی و کشسانی" },
    { src: "icon-1.webp", title: "ضد آب، ضد رطوبت" },
    { src: "icon-1.webp", title: "قابلیت جابجایی" },
    { src: "icon-1.webp", title: "آنتی باکتریال و ضد گرد و غبار" },
    { src: "icon-1.webp", title: "قابلیت نورپردازی" },
    { src: "icon-1.webp", title: "قابلیت شستشو" },
    { src: "icon-1.webp", title: "گواهینامه فنی" },
    { src: "icon-1.webp", title: "قابلیت چاپ" },
    { src: "icon-1.webp", title: "عدم دور ریز مصالح" },
    { src: "icon-1.webp", title: "تنوع رنگی بالا" },
    { src: "icon-1.webp", title: "تحمل وزن بالا" },
    { src: "icon-1.webp", title: "وزن کم" },
    { src: "icon-1.webp", title: "مقاوم در برابر آوار" },
]


function Benefits() {
    return (
        <div className={styles.container}>
            {/* <p>🔔📀💡📙✏️🧽🟠🟧🟨🔶</p> */}
            <div className={styles.all}>
                <h4>🎗️ مزایای سقف کشسان</h4>
                <p>سقف‌های وِندر    علاوه بر زیبایی و ماندگاری بالا، مزایای فراوانی دارند که شامل موارد زیر است.</p>
                <div className={styles.details}>
                    {
                        benefitsData.map((i,index) =>
                            <div key={index} className={styles.row}>
                                <img src={`/${i.src}`} alt="" />
                                <p>{i.title}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Benefits