import styles from "../../styles/components/ShopItem.module.scss"
import Image from "next/future/image";
import CountCandy from "./CountCandy";
import img from "../../images/product-img.png"

export default function CandyItem({candyItem, increase, decrease}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const {title, info, info1, info2, info3, info4, count, id, price, priceTotal} = candyItem;

    return(
        <div className={styles.product__item}>

            <Image src={img}
                   alt="candy" layout={'fill'} className={styles.product__img}/>
            <h2 className={styles.product__title}>{title}</h2>
            <p className={styles.product__item_info}>
                {info}
            </p>
            <div className={styles.product__item_wrapp}>
                <p className={styles.product__item_cont}> Белки - {info1} </p>
                <p className={styles.product__item_cont}>Жиры - {info2}</p>
                <p className={styles.product__item_cont}>Углеводы - {info3}</p>
                <p className={styles.product__item_cont}>{info4} ккал</p>
            </div>
            <div className={styles.product__count}>
                <CountCandy {...{count , increase, id, price, priceTotal, decrease}}/>
            </div>
        </div>
    )
}