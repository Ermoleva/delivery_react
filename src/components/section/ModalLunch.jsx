import styles from "../../styles/components/ModalCandy.module.scss"
import Image from "next/future/image";
import close from "../../images/closeModal.svg"


export default function ModalLunch({active, setActive, increase, decrease,setNumberActive, setOnlineActive, lunchModal, total}){
    const {count, price} = total

    return(
        <div className={[active ? styles.modal__active : styles.modal]} onClick={() => setActive(false)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <div className={styles.modal__close}  onClick={() => setActive(false)}>
                    <Image src={close} alt="close" layout={'raw'} className={styles.modal__close_img}/>
                </div>
                <div className={styles.modal__wrapp}>
                    {
                        lunchModal.map((elem) => {
                            return elem;
                        })
                    }
                </div>
                <div className={styles.modal__order_wrapp}>
                    <div className={styles.modal__order}>
                        <div className={styles.modal__order_online}>
                            <a href="#" onClick={() => {
                                setActive(false)
                                setOnlineActive(true)
                            }}>
                                Онлайн заказ
                            </a>
                        </div>
                        <div className={styles.modal__order_tel}>
                            <a href="#"  onClick={() => {
                                setActive(false),
                                    setNumberActive(true)
                            }}>
                                Заказ по телефону
                            </a>
                        </div>
                    </div>
                    <div className={styles.modal__total_price}>
                        <div className={styles.modal__amount}>{count} шт /</div>
                        <div className={styles.modal__sum}>{price} грн</div>
                    </div>
                </div>

            </div>
        </div>
    )
}