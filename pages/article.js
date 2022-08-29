import styles from "../src/styles/components/Article.module.scss"
import Image from "next/future/image";
import article1 from "../src/images/articles_1.png"
import inst from "../src/images/inst_icon.svg";
import facebook from "../src/images/facebook_icon.svg";
import back from "../src/images/article_back_arrow.svg";
import mainImage from "../src/images/article.png"

export default function Article() {
    return (

        <section className={styles.article}>
            <div className={styles.container}>
                <Image src={mainImage}
                       alt="logo" layout={'raw'} className={styles.article__img}/>

                <div className={styles.article__name}>
                    <div className={styles.article__title_wrapp}>
                        <a href="/blog" className={styles.article__back}
                        >
                            <Image src={back}
                                   alt="logo" layout={'raw'} className={styles.article__back_img}/>
                        </a>
                        <div className={styles.article__name__wrapp}>
                            <h2 className={styles.article__title}>
                                Как поменять свои пищевые привычки?
                            </h2>
                            <p className={styles.article__date}>29.05.2020</p>
                        </div>
                    </div>
                    <div className={styles.article__share}>
                        <p>Поделиться:</p>
                        <div className={styles.article__social_item}>
                            <a href="#" className={styles.article__social_img_link}
                            ><Image src={inst}
                                    alt="logo" layout={'raw'} className={styles.article__social_img}/></a>
                        </div>
                        <div className={styles.article__social_item}>
                            <a href="#" className={styles.article__social_img_link}
                            ><Image src={facebook}
                                    alt="logo" layout={'raw'} className={styles.footer__social_img}/></a>
                        </div>
                    </div>
                </div>
                <p className={styles.article__text}>
                    Привычка — это неосознанное, то, что мы делаем на автомате.
                    <br/><br/>
                    Например, это такие обыденные вещи, как чистка зубов утром или
                    пристегнуться, садясь в автомобиль.
                    <br/><br/>
                    Большинству из этих привычек мы не отдаем отчета. Именно этот
                    бессознательный фактор и является той сложностью, которая не
                    позволяет вам легко и просто изменить эту самую привычку в итоге.
                    <br/><br/>
                    В такой момент ваш мозг не думает, а стоит ли ему это делать. Он
                    просто берет и делает. Пищевые привычки действуют так же.
                </p>
                <img
                    className={styles.article__info_img}
                    src="../src/images/article-info.png"
                    alt=""
                />
                <p className={styles.article__text}>
                    Их нужно перевести на автомат. И если вы считаете, что для этого
                    нужна невероятная сила воли или сверхстрогий самоконтроль, то вовсе
                    нет. У меня для вас есть несколько простых постепенных шагов,
                    которые помогут вам сделать ваши пищевые привычки осознанными и
                    подконтрольными.
                    <br/><br/>
                    Первое, с чего стоит начать — это прекратите покупать вредные
                    продукты. Запомните: то, чего нет, того и не съешь. В свою очередь,
                    ставим на стол на самое видное место тарелочку с ломтиками моркови,
                    сухофруктами и орешками.
                    <br/><br/>
                    Второе — это создаем себе препятствия на пути к вредностям — ходите
                    домой другой дорогой, проходите мимо отдела сладостей или офисной
                    кухни, если ощущаете манящий запах выпечки — просто понюхайте
                    запястье, на которое утром нанесли духи.
                    <br/><br/>
                    Третье и очень важное правило — полезные продукты в вашей квартире и
                    на работе должны стать доступнее и заметнее. Например, яблоко или
                    морковь вместо печенья и конфет на столе, сделайте заготовку из
                    нарезанных листьев салатов в холодильнике, заранее очистите овощей и
                    нарежьте ломтиками.
                </p>
                <img
                    className={styles.article__info_img}
                    src="../src/images/article-info2.png"
                    alt=""
                />
                <p className={styles.article__text}>
                    Четвертое — используйте посуду для еды меньшего размера. Да-да,
                    придется отказаться от любимых блюдец на пол-стола, но оно того
                    стоит. Также не берите добавки. Ведь многие исследования доказывают,
                    что мы делаем выводы о своем насыщении, основываясь не на своих
                    чувствах сытости, а видя, что тарелка уже пуста.
                    <br/><br/>
                    Пятое — всегда начинайте еду с овощей.
                    <br/><br/>
                    Очень рекомендую менять привычки не только с себя, а сразу с семьей.
                    Поддержка близких очень важна будет для вас.
                    <br/><br/>
                    И, конечно же, для смены пищевых привычек очень рекомендуем
                    попробовать рационы здорового питания GastroChef.
                </p>

                <div className={styles.article__footer}>
                    <a className={styles.article__footer_back_link} href="./blog.html">

                        <Image src={back}
                               alt="logo" layout={'raw'} className={styles.article__footer_back_img}/>

                        Назад
                    </a>
                    <div className={styles.article__footer_button}>
                        <button className={styles.article__footer_btn}>
                            <a href="./home.html">Программы питания</a>
                        </button>
                    </div>
                    <div className={styles.article__share}>
                        <p>Поделиться:</p>
                        <div className={styles.article__social_item}>
                            <a href="#" className={styles.article__social_img_link}
                            > <Image src={inst}
                                     alt="logo" layout={'raw'} className={styles.article__social_img}/></a>
                        </div>
                        <div className={styles.article__social_item}>
                            <a href="#" className={styles.article__social_img_link}
                            ><Image src={facebook}
                                    alt="logo" layout={'raw'} className={styles.article__social_img}/></a>
                        </div>
                    </div>
                </div>

                <div className={styles.article__more}>
                    <h2 className={styles.article__more_title}>Вас может заинтересовать:</h2>
                    <div className={styles.article__more_items}>
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
            </div>
        </section>
    )
}