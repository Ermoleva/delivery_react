import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/future/image';

import photo1 from "../../images/photo1.png"
import photo2 from "../../images/photo2.png"
import photo3 from "../../images/photo3.png"
import photo4 from "../../images/photo4.png"
import photo5 from "../../images/photo5.png"
import photo6 from "../../images/photo6.png"
import styles from "../../styles/components/Photos.module.scss";


export default class MultipleItems extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            centerMode: true,
            slidesToShow: 4,
            slidesToScroll: 3,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className={styles.photos}>
                <h1 className={styles.photos__title}>Фото блюд</h1>
                <Slider  {...settings}>
                    <div>
                        <Image src={photo1}
                               alt="photo" layout={'raw'} className={styles.photos__img}/>
                    </div>
                    <div>
                        <Image src={photo2}
                               alt="photo" layout={'raw'} className={styles.photos__img}/>
                    </div>
                    <div>
                        <Image src={photo3}
                               alt="photo" layout={'raw'} className={styles.photos__img}/>
                    </div>
                    <div>
                        <Image src={photo4}
                               alt="photo" layout={'raw'} className={styles.photos__img}/>
                    </div>
                    <div>
                        <Image src={photo5}
                               alt="photo" layout={'raw'} className={styles.photos__img}/>
                    </div>
                    <div>
                        <Image src={photo6}
                               alt="photo" layout={'raw'} className={styles.photos__img}/>
                    </div>
                    <div>
                        <Image src={photo3}
                               alt="photo" layout={'raw'} className={styles.photos__img}/>
                    </div>
                    <div>
                        <Image src={photo4}
                               alt="photo" layout={'raw'} className={styles.photos__img}/>
                    </div>
                    <div>
                        <Image src={photo2}
                               alt="photo" layout={'raw'} className={styles.photos__img}/>
                    </div>
                    <div>
                        <Image src={photo5}
                               alt="photo" layout={'raw'} className={styles.photos__img}/>
                    </div>

                </Slider>
            </div>
        );
    }
}