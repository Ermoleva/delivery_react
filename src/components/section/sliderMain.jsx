import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/components/SliderMain.module.scss";
import Image from 'next/future/image';
import slider1 from "../../images/slider1.png"
import slider2 from "../../images/slider2.png"
import slider3 from "../../images/slider3.png"
import slider4 from "../../images/slider4.png"
import prev from "../../images/arrow_prew.svg"
import next from "../../images/arrow_next.svg"



export default class slider extends Component {
    render() {
        const ArrowLeft = (props) => <button {...props} className={styles.arrow__left} />;
        const ArrowRight = (props) => <button {...props} className={styles.arrow__right} />;
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            nextArrow: <ArrowRight />,
            prevArrow: <ArrowLeft />,


        };
        return (
            <div className={styles.slider}>

                <Slider {...settings}>
                    <div className={styles.slider__item}>
                        <div className={styles.slider__wrapp}>
                            <div className={styles.slider__wrapp_text}>
                                <h1 className={styles.slider__title}>
                                    Detox программа – <span>вкусное очищение</span> организма
                                </h1>
                                <h2 className={styles.slider__subtitle}>
                                    8 бутылочек <span>натуральных</span> смузи и фрешей.
                                </h2>
                                <div className={styles.slider__link}>
                                    <button className={styles.slider__button}>
                                        <a href="src/components/section/sliderMain#">Заказать</a>
                                    </button>
                                    <p className={styles.slider__link_text}>Пробный день всего: 427 грн</p>
                                </div>
                            </div>
                            <div className={styles.slider__pic}>
                                <Image src={slider1}
                                       alt="sliderImage" layout={'raw'} className={styles.slider__img}/>

                            </div>
                        </div>
                    </div>
                    <div className={styles.slider__item}>
                        <div className={styles.slider__wrapp}>
                            <div className={styles.slider__wrapp_text}>
                                <h1 className={styles.slider__title}>
                                    Сервис правильного питания.
                                    <span> Худей быстро!</span>
                                </h1>
                                <div className={styles.slider__link}>
                                    <button className={styles.slider__button}>
                                        <a href="src/components/section/sliderMain#">Заказать</a>
                                    </button>
                                    <p className={styles.slider__link_text}>Пробный день -30%</p>
                                </div>
                            </div>
                            <div className={styles.slider__pic}>
                                <Image src={slider2}
                                       alt="sliderImage" layout={'raw'} className={styles.slider__img}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slider__item}>
                        <div className={styles.slider__wrapp}>
                            <div className={styles.slider__wrapp_text}>
                                <h1 className={styles.slider__title}>
                                    <span>Доверьтесь профессионалам. </span>
                                    Я Кобылинский Кирилл
                                </h1>
                                <h2 className={styles.slider__subtitle}>
                                    <span>Мастер спорта</span> Украины по тяжелой атлетике.<span>
                      Высшее образование</span
                                >
                                    института физкультуры(НуфвсУ).
                                </h2>
                                <div className={styles.slider__link}>
                                    <button className={styles.slider__button}>
                                        <a href="src/components/section/sliderMain#">Мой инстаграм</a>
                                    </button>
                                    <p className={styles.slider__link_text}>Всегда открыт для клиентов</p>
                                </div>
                            </div>
                            <div className={styles.slider__pic}>
                                <Image src={slider3}
                                       alt="sliderImage" layout={'raw'} className={styles.slider__img}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slider__item}>
                        <div className={styles.slider__wrapp}>
                            <div className={styles.slider__wrapp_text}>
                                <h1 className={styles.slider__title}>
                                    Кето питание -<span>вкусное и экстремальное</span> быстрое
                                    похудение
                                </h1>
                                <h2 className={styles.slider__subtitle}>4 приема пищи.</h2>
                                <div className={styles.slider__link}>
                                    <button className={styles.slider__button}>
                                        <a href="src/components/section/sliderMain#">Заказать</a>
                                    </button>
                                    <p className={styles.slider__link_text}>Пробный день от 490грн</p>
                                </div>
                            </div>
                            <div className={styles.slider__pic}>
                                <Image src={slider4}
                                       alt="sliderImage" layout={'raw'} className={styles.slider__img}/>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}