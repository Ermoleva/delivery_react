import advantage1 from "../../images/advantage_1.svg";
import advantage2 from "../../images/advantage_2.svg";
import advantage3 from "../../images/advantage_3.svg";
import advantage4 from "../../images/advantage_4.svg";
import advantage5 from "../../images/advantage_5.svg";
import advantage6 from "../../images/advantage_6.svg";

import Image from 'next/future/image';
import styles from "../../styles/components/Advantage.module.scss"

export default function Advantage() {
    return (
        <div className={styles.advantage}>
            <div className={styles.advantage__items}>
            <div className={styles.advantage__item}>
            <Image src={advantage1}
            alt="advantage" layout={'raw'} className={styles.advantage__img}/>
            <h2 className={styles.advantage__text}>
            Бережём природу. Эко-тара и проборы.
            </h2>
            </div>
            <div className={styles.advantage__item}>
            <Image src={advantage2}
            alt="advantage" layout={'raw'} className={styles.advantage__img}/>
            <h2 className={styles.advantage__text}>
            28 дней без повторения, более 300 блюд!
            </h2>
            </div>
            <div className={styles.advantage__item}>
            <Image src={advantage3}
            alt="advantage" layout={'raw'} className={styles.advantage__img}/>
            <h2 className={styles.advantage__text}>
            Бесплатно заменяем блюда и ингредиенты.
            </h2>
            </div>
            <div className={styles.advantage__item}>
            <Image src={advantage4}
            alt="advantage" layout={'raw'} className={styles.advantage__img}/>
            <h2 className={styles.advantage__text}>
            Готовим ночью, упаковываем и отправляем Вам!
            </h2>
            </div>
            <div className={styles.advantage__item}>
            <Image src={advantage5}
            alt="advantage" layout={'raw'} className={styles.advantage__img}/>
            <h2 className={styles.advantage__text}>
            Ежедневная удобная и бесплатная доставка с 6:00 до 10:00
            </h2>
            </div>
            <div className={styles.advantage__item}>
            <Image src={advantage6}
            alt="advantage" layout={'raw'} className={styles.advantage__img}/>
            <h2 className={styles.advantage__text}>
            Сохраняем Вашу энергию и до 14 часов в неделю освобождая от
            готовки!
            </h2>
            </div>
            </div>
            </div>
            )
        }