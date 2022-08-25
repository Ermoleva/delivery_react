import styles from "../../styles/components/OurHistory.module.scss";

import Image from 'next/future/image';
import history from "../../images/history_img.png"
import photo from "../../images/photo_team.png"

export default function OurHistory() {
    return (
        <>
            <section className={styles.history}>
                <Image src={history}
                       alt="image" layout={'raw'} className={styles.history__img}/>

                <div className={styles.history__info}>
                    <h2 className={styles.history__info_title}>
                        История GastroChef началась более 6-ти лет назад...
                    </h2>
                    <p className={styles.history__info_text}>
                        Долгое время я наблюдал как людям не хватает времени для правильного
                        и здорового питания, какое правильного, просто питания регулярного.
                    </p>
                    <p className={styles.history__info_text}>
                        Они могли позавтракать, в обед съесть что-то типа шаурмы или снэка,
                        а вечером в силу голода наесться, что плохо сказывалось на их обмене
                        веществ и естественно здоровье.
                    </p>
                    <p className={styles.history__info_text}>
                        Желание хоть как-то изменить ситуацию и помочь людям не давало мне
                        покоя и я решил открыть доставку еды правильного питания.
                    </p>
                    <p className={styles.history__info_text}>
                        Я со своим 17-и летним опытом в спорте и проф. образованием, вместе
                        с диетологом разработали рационы правильного питания с подсчетом
                        калорий (КБЖУ).
                    </p>
                    <h3 className={styles.history__info_subtitle}>
                        Знакомтесь! Команда GastroChef!
                    </h3>
                </div>


            </section>
            <section className="photo">
                <Image src={photo}
                       alt="image" layout={'raw'} className={styles.photo__img}/>
            </section>
        </>
    )
}