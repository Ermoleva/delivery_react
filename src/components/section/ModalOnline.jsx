import styles from "../../styles/components/ModalOnline.module.scss"
import Image from "next/future/image";
import close from "../../images/closeModal.svg"

export default function ModalOnline(){
    return(
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.modal__close}>
                    <h2 className={styles.modal__mistake}>Заполните все поля правильно</h2>
                    <Image src={close}
                           alt="close" layout={'row'} className={styles.close__img}/>
                </div>
                <div className={styles.modal__wrapp}>
                    <div className={styles.modal__wrapp_left}>
                        <input
                            className={styles.number__input}
                            required
                            placeholder="имя"
                            name="name"
                            type="text"
                        />
                        <input
                            className={styles.number__input}
                            required
                            placeholder="Введите номер телефона"
                            name="tel"
                            type="text"
                        />
                        <div className={styles.modal__wrapp_adrress}>
                            <input
                                className={styles.number__input}
                                required
                                placeholder="Улица"
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.number__input}
                                required
                                placeholder="Дом:"
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.number__input}
                                required
                                placeholder="Этаж:"
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.number__input}
                                required
                                placeholder="Квартира: "
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.number__input}
                                required
                                placeholder="Парадное:"
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.number__input}
                                required
                                placeholder="Домофон: "
                                name="name"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className={styles.modal__wrapp_right}>

                    </div>
                </div>
                <div className={styles.modal__order}>
                    <div className={styles.modal__btn}>Заказать</div>
                    <div className={styles.modal__total}></div>
                </div>
            </div>
        </div>
    )
}