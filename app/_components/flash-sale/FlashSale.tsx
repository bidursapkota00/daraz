import Product from "./Product";
import Timer from "./Timer";

import styles from './flash-sale.module.css'

export default function FlashSale() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Flash Sale</h1>
            <div className={styles.on_sale}>
                <span className={styles.on_sale_text}>On Sale Now</span>
                <div className={styles.timer_container}>
                    <span>Ending in</span>
                    <Timer />
                </div>
                <button className={styles.button}>SHOP MORE</button>
            </div>
            <Product />
        </div>
    )
}
