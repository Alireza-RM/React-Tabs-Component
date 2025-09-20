
import styles from "./SubmitRequest.module.css"

function SubmitRequest() {
    return (
        <div className={styles.container}>
            {/* <p>🔔📀💡📙✏️🧽🟠🟧🟨🔶</p> */}
            <div className={styles.all}>
                <h4>🎗️ نحوه ثبت درخواست</h4>
                <div className={styles.details}>

                    <div className={styles.row}>
                        <img src="/icon-1.webp" alt="" />
                        <p>پیام به کارشناسان</p>
                    </div>

                    <img className={styles.arrow_bottom} src="/arrow-bottom.webp" alt="bottom" />
                    <img className={styles.arrow_left} src="/arrow-left.webp" alt="left" />
                    <div className={styles.row}>
                        <img src="/icon-1.webp" alt="" />
                        <p>تماس کارشناسان جهت مشاوره و اعلام قیمت</p>
                    </div>
                    <img className={styles.arrow_bottom} src="/arrow-bottom.webp" alt="bottom" />
                    <img className={styles.arrow_left} src="/arrow-left.webp" alt="left" />
                    <div className={styles.row}>
                        <img src="/icon-1.webp" alt="" />
                        <p>انتخاب نوع سقف مورد نظر و تولید آن</p>
                    </div>
                    <img className={styles.arrow_bottom} src="/arrow-bottom.webp" alt="bottom" />
                    <img className={styles.arrow_left} src="/arrow-left.webp" alt="left" />
                    <div className={styles.row}>
                        <img src="/icon-1.webp" alt="" />
                        <p>ارسال و نصب سقف</p>
                    </div>
                </div>
                <div className={styles.div_button}>
                    <button className={styles.consult_button}>دریافت مشاوره رایگان &nbsp; ←</button>
                </div>
            </div>
        </div>
    )
}

export default SubmitRequest