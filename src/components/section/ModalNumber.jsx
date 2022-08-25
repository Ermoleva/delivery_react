import styles from "../../styles/components/ModalNumber.module.scss"

export default function ModalNumber({active, setActive}){
    return(


        <div className={[active ? styles.number__active : styles.number]}  onClick={() => setActive(false)}>

            <div className={styles.number__wrapp}>
                <div className={styles.number__data}>
                    <h2 className={styles.number__title}>Имя</h2>
                    <input
                        className={styles.number__input}
                        required
                        placeholder="Ваше имя"
                        name="name"
                        type="text"
                    />

                </div>
                <div className={styles.number__data}>
                    <h2 className={styles.number__title}>Номер телефона</h2>
                    <input
                        className={styles.number__input}
                        required
                        placeholder="Введите номер телефона"
                        name="tel"
                        type="text"
                    />
                </div>
                <div className={styles.number__button} onClick={() => setNumberActive(false)}>Заказать</div>


            </div>
        </div>
    )
}