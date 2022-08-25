import styles from "../../styles/components/Articles.module.scss"
import Image from "next/future/image";
import article1 from "../../images/articles_1.png"


export default function Articles() {
    return (
        <section className={styles.articles}>
            <div className={styles.container}>
                <div className={styles.articles__items}>
                    <div className={styles.articles__item}>
                        <a href="/article" className={styles.articles__link}>
                            <Image src={article1}
                                   alt="image" layout={'raw'} className={styles.articles__img}/>

                        </a>
                        <h2 className={styles.articles__title}>
                            Как поменять свои пищевые привычки?
                        </h2>
                        <div className={styles.articles__info}>
                            <p className={styles.articles__date}>29.05.2020</p>
                            <button className={styles.articles__btn}>
                                <a href="/article">Подробнее</a>
                            </button>
                        </div>
                    </div>
                    <div className={styles.articles__item}>
                        <a href="/article" className={styles.articles__link}>
                            <Image src={article1}
                                   alt="image" layout={'raw'} className={styles.articles__img}/>
                        </a>
                        <h2 className={styles.articles__title}>
                            Как поменять свои пищевые привычки?
                        </h2>
                        <div className={styles.articles__info}>
                            <p className={styles.articles__date}>29.05.2020</p>
                            <button className={styles.articles__btn}>
                                <a href="/article">Подробнее</a>
                            </button>
                        </div>
                    </div>
                    <div className={styles.articles__item}>
                        <a href="/article" className={styles.articles__link}>
                            <Image src={article1}
                                   alt="image" layout={'raw'} className={styles.articles__img}/>
                        </a>
                        <h2 className={styles.articles__title}>
                            Как поменять свои пищевые привычки?
                        </h2>
                        <div className={styles.articles__info}>
                            <p className={styles.articles__date}>29.05.2020</p>
                            <button className={styles.articles__btn}>
                                <a href="/article">Подробнее</a>
                            </button>
                        </div>
                    </div>
                    <div className={styles.articles__item}>
                        <a href="/article" className={styles.articles__link}>
                            <Image src={article1}
                                   alt="image" layout={'raw'} className={styles.articles__img}/>
                        </a>
                        <h2 className={styles.articles__title}>
                            Как поменять свои пищевые привычки?
                        </h2>
                        <div className={styles.articles__info}>
                            <p className={styles.articles__date}>29.05.2020</p>
                            <button className={styles.articles__btn}>
                                <a href="/article">Подробнее</a>
                            </button>
                        </div>
                    </div>
                    <div className={styles.articles__item}>
                        <a href="/article" className={styles.articles__link}>
                            <Image src={article1}
                                   alt="image" layout={'raw'} className={styles.articles__img}/>
                        </a>
                        <h2 className={styles.articles__title}>
                            Как поменять свои пищевые привычки?
                        </h2>
                        <div className={styles.articles__info}>
                            <p className={styles.articles__date}>29.05.2020</p>
                            <button className={styles.articles__btn}>
                                <a href="/article">Подробнее</a>
                            </button>
                        </div>
                    </div>
                    <div className={styles.articles__item}>
                        <a href="/article" className={styles.articles__link}>
                            <Image src={article1}
                                   alt="image" layout={'raw'} className={styles.articles__img}/>
                        </a>
                        <h2 className={styles.articles__title}>
                            Как поменять свои пищевые привычки?
                        </h2>
                        <div className={styles.articles__info}>
                            <p className={styles.articles__date}>29.05.2020</p>
                            <button className={styles.articles__btn}>
                                <a href="/article">Подробнее</a>
                            </button>
                        </div>
                    </div>
                    <div className={styles.articles__item}>
                        <a href="/article" className={styles.articles__link}>
                            <Image src={article1}
                                   alt="image" layout={'raw'} className={styles.articles__img}/>
                        </a>
                        <h2 className={styles.articles__title}>
                            Как поменять свои пищевые привычки?
                        </h2>
                        <div className={styles.articles__info}>
                            <p className={styles.articles__date}>29.05.2020</p>
                            <button className={styles.articles__btn}>
                                <a href="/article">Подробнее</a>
                            </button>
                        </div>
                    </div>
                    <div className={styles.articles__item}>
                        <a href="/article" className={styles.articles__link}>
                            <Image src={article1}
                                   alt="image" layout={'raw'} className={styles.articles__img}/>
                        </a>
                        <h2 className={styles.articles__title}>
                            Как поменять свои пищевые привычки?
                        </h2>
                        <div className={styles.articles__info}>
                            <p className={styles.articles__date}>29.05.2020</p>
                            <button className={styles.articles__btn}>
                                <a href="/article">Подробнее</a>
                            </button>
                        </div>
                    </div>
                    <div className={styles.articles__item}>
                        <a href="/article" className={styles.articles__link}>
                            <Image src={article1}
                                   alt="image" layout={'raw'} className={styles.articles__img}/>
                        </a>
                        <h2 className={styles.articles__title}>
                            Как поменять свои пищевые привычки?
                        </h2>
                        <div className={styles.articles__info}>
                            <p className={styles.articles__date}>29.05.2020</p>
                            <button className={styles.articles__btn}>
                                <a href="/article">Подробнее</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}