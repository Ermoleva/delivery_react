import styles from "../../styles/components/ShopItem.module.scss"
import Image from "next/future/image";
import CountLunch from "./CountLunch";
import img from "../../images/lunch-img.png"


export default function LunchItem({lunchItem, increase, decrease}){

    const {id, weight, title, price, priceTotal, count, info1, info2, info3} = lunchItem

    return(
        <div className={styles.product__item}>
            <Image src={img}
                   alt="product" layout={'raw'} className={styles.product__img}/>
            <h2 className={styles.product__title}>{title}</h2>
            <ul className={styles.product__item_info}>
                <li>{info1}</li>
                <li>{info2}</li>
                <li>{info3}</li>
            </ul>
            <div className={styles.product__count}>
                <CountLunch id={id} weight={weight} price={price} priceTotal={priceTotal} count={count} increase={increase} decrease={decrease}/>
            </div>
        </div>
    )
}