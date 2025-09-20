import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header_container}>
            <div className={styles.fix_top}>
                <div className={styles.top_bar}>

                    <div className={styles.logo}>
                        <img src="/vender_logo.webp" alt="Lekler Logo" />
                    </div>

                    <div className={styles.logo_name}>
                        <span className={styles.fa}> وِندر |</span> <span className={styles.fa}>   VENDER</span>
                    </div>

                </div>
            </div>



            <div className={styles.hero_section}>

                <div className={styles.hero_content}>
                    <h1>
                        <span className={styles.fa}> وِندر  &nbsp; |&nbsp; </span> <span className={styles.fa}>   VENDER</span>
                    </h1>
                    <h2>نسل جدید سقف‌های مدرن</h2>
                    <div className={styles.text_div}>
                        <p>
                            سقف وِندر   ، با بهره‌گیری از جزئیات زیبا و متونوی چون قابلیت نورپردازی اختصاصی و چاپ تصاویر
                            &nbsp; دلخواه داخلی خانه یا محیط کار شما را به دنیایی جذاب و زیبا تبدیل می‌کند. سقف  وِندر  &nbsp;  
                            علاوه بر نصب سریع و آسان، انواع مختلفی نیز دارد که با توجه به محیط‌ها و سلایق گوناگون، قابل
                            انتخاب بوده و در صورت نیاز امکان تعویض آن نیز وجود دارد.
                        </p>
                    </div>
                    <button className={styles.consult_button}>دریافت مشاوره رایگان &nbsp; ←</button>
                    <div className={styles.consult_text}>
                        <div className={styles.stats}>
                            <span>250+ <br /> پروژه موفق</span>
                            <span>170000+ <br /> سال سابقه و تجربه</span>
                        </div>
                    </div>
                </div>

                <div className={styles.hero_image}>
                    <img src="/_FJ75642 copy(1).webp" alt="" />
                </div>

            </div>
        </header>
    );
};

export default Header;