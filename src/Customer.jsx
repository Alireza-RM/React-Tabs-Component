import styles from "./Customer.module.css"
import Marquee from "./Marquee";

const customerData = [
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
    { src: "icon-1.webp" },
]


const logos = [
    { src: "/icon-1.webp", alt: "لوگو 1" },
    { src: "/icon-1.webp", alt: "لوگو 2" },
    { src: "/icon-1.webp", alt: "لوگو 3" },
    { src: "/icon-1.webp", alt: "لوگو 4" },
    { src: "/icon-1.webp", alt: "لوگو 5" },
    { src: "/icon-1.webp", alt: "لوگو 6" },
    { src: "/icon-1.webp", alt: "لوگو 7" },
    { src: "/icon-1.webp", alt: "لوگو 8" },
    { src: "/icon-1.webp", alt: "لوگو 9" },
];


const items = [
    "/icon-1.webp",
    "/icon-1.webp",
    "/icon-1.webp",
    "/icon-1.webp",
    "/icon-1.webp",
    "/icon-1.webp",
    "/icon-1.webp",
]

function Customer() {
    return (
        <div className={styles.container}>
            {/* <p>🔔📀💡📙✏️🧽🟠🟧🟨🔶</p> */}
            <div className={styles.all}>
                <h4>🎗️  برخی از مشتریان سقف وِندر    </h4>

                <div>
                    <Marquee />
                </div>
            </div>
        </div>
    )
}

export default Customer