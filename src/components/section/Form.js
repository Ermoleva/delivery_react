import styles from "../../styles/components/Form.module.scss";
import Accordion from "./Accordion"

export default function Form() {
    return (
        <div className={styles.back}>
            <div className={styles.back__form}>
                <h1 className={styles.back__form_title}>Оформить заказ</h1>
                <h2 className={styles.back__form_subtitle}>
                    Обсудите все детали заказа по телефону или сами укажите все
                    подробности онлайн
                </h2>
                <div className={styles.back__form_name}>
                    <h2 className={styles.back__form_order_title}>Имя</h2>
                    <input
                        className={styles.back__form_name_input}
                        required
                        placeholder="Ваше имя"
                        name="name"
                        type="text"
                    />
                </div>
                <div className={styles.back__form_number}>
                    <h2 className={styles.back__form_order_title}>Номер телефона</h2>
                    <input
                        className={styles.back__form_number_input}
                        required
                        placeholder="Введите номер телефона"
                        name="tel"
                        type="text"
                    />
                </div>
                <div className={styles.back__form_checkbox_wrapp}>
                    <label className={styles.back__form_checkbox}>
                        <input type="checkbox" name="radio"/>
                        Тест-день! Получить скидку -30%?
                        <span className={styles.checkmark}> </span>
                    </label>
                </div>
                <div className={styles.back__form_checkbox_wrapp}>
                    <label className={styles.back__form_checkbox}>
                        <input type="checkbox" name="radio"/>
                        Согласен с условиями сотрудничества
                        <span className={styles.checkmark}></span>
                    </label>
                </div>
                <button className={styles.back__form_order_num}>
                    <a href="tel:+380689494919">Заказ по телефону</a>
                </button>
                <p className={styles.back__form_order_p}>ИЛИ</p>
                <button className={styles.back__form_order_onl}>
                    <a href="src/components/section/Form#"> Онлайн заказ</a>
                </button>
            </div>
            <Accordion/>
        </div>
    )
}