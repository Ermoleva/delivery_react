import styles from '../../styles/components/Shop.module.scss';
import Link from 'next/link'
import Image from "next/future/image";
import first from "../../images/shop-candy.png"
import second from "../../images/shop-granols.png"


export default function Products() {
    return (
        <section className={styles.shop}>
            <div className={styles.container}>
                <div className={styles.shop__items}>
                    <div className={styles.shop__item}>
                        <Link href="/shopItem">
                            <a>
                                <Image src={first}
                                       alt="logo" layout={'raw'} className={styles.shop__img}/>
                            </a>
                        </Link>
                        <div className={styles.shop__name}>
                            <h2 className={styles.shop__title}>Полезные конфеты</h2>
                            <Link href="/shopItem">
                                <a className={styles.shop__more_link}>
                                    <button className={styles.shop__more_btn}>Ассортимент</button>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.shop__item_soon}>
                        <Link href="/shopItem">
                            <a>
                                <Image src={second}
                                       alt="logo" layout={'raw'} className={styles.shop__img}/>
                            </a>
                        </Link>
                        <div className={styles.shop__name}>
                            <h2 className={styles.shop__title}>Гранола</h2>
                            <Link href="/shopItem">
                                <a className={styles.shop__more_link_soon}>
                                    <button className={styles.shop__more_btn}>Ассортимент</button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
