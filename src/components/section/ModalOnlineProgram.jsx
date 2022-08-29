import styles from "../../styles/components/ModalOnline.module.scss"
import {useState} from "react";
import Image from "next/future/image";
import close from "../../images/closeModal.svg";
import Select from "react-select";

export default function ModalOnlineProgram({active, setActive}){


    const time = [
        {
            value: '13:00',
            label: '13:00',
        },
        {
            value: '14:30',
            label: '14:30',
        },
        {
            value: '15:45',
            label: '15:45',
        },
        {
            value: '17:00',
            label: '17:00',
        },
    ]

    const [timeDelivery, setTimeDelivery] = useState(
        'Время доставки'
    )

    const getValueTime = () => {
        return timeDelivery ? time.find(c => c.value === timeDelivery) : ''
    }

    // const onChange = (newValue:any) => {
    //     setTimeDelivery(newValue.value)
    // }

    const pay = [
        {
            value: 'visa',
            label: 'visa',
        },
        {
            value: 'наложный',
            label: 'наложный',
        },
        {
            value: 'Privat24',
            label: 'Privat24',
        },

    ]
    const [payDelivery, setPayDelivery] = useState(
        'Время доставки'
    )

    const getValuePay = () => {
        return payDelivery ? time.find(c => c.value === payDelivery) : ''
    }

    const program = [
        {
            value: 'Express Fit',
            label: 'Express Fit',
        },
        {
            value: 'slim',
            label: 'slim',
        },
        {
            value: 'fitness',
            label: 'fitness',
        },
        {
            value: 'balance',
            label: 'balance',
        },
        {
            value: 'balance +',
            label: 'balance +',
        },
        {
            value: 'strong',
            label: 'strong',
        },
        {
            value: 'maxi fit',
            label: 'maxi fit',
        },
    ]

    const [programDelivery, setProgramDelivery] = useState(
        'Программы питания'
    )
    const getValueProgram = () => {
        return programDelivery ? program.find(c => c.value === programDelivery) : ''
    }

    const cutlery = [
        {
            value: 'Да, нужны',
            label: 'Да, нужны',
        },
        {
            value: 'Нет, не нужно',
            label: 'Нет, не нужно',
        },
    ]

    const [cutleryDelivery, setСutleryDelivery] = useState(
        'Программы питания'
    )
    const getValueСutlery = () => {
        return cutleryDelivery ? cutlery.find(c => c.value === cutleryDelivery) : ''
    }



    return (
        <div className={[active ? styles.modal__active : styles.modal]} onClick={() => setActive(false)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <div className={styles.modal__close}>
                    <h2 className={styles.modal__mistake} onClick={() => setActive(false)}>Заполните все поля правильно</h2>
                    <Image onClick={() => setActive(false)} src={close}
                           alt="close" layout={'row'} className={styles.modal__close_img}/>
                </div>
                <div className={styles.modal__wrapp}>
                    <div className={styles.modal__wrapp_left}>
                        <input
                            className={styles.modal__input}
                            required
                            placeholder="имя"
                            name="name"
                            type="text"
                        />
                        <input
                            className={styles.modal__input}
                            required
                            placeholder="Введите номер телефона"
                            name="tel"
                            type="text"
                        />
                        <input
                            className={styles.modal__input}
                            required
                            placeholder="Электронный адрес"
                            name="e-mail"
                            type="text"
                        />
                        <Select
                            classNamePrefix='modal__select'
                            // onChange={onChange}
                            value={getValueProgram()}
                            options={program}
                            placeholder='Программы питания'/>

                        <div className={styles.modal__wrapp_adrress}>
                            <input
                                className={styles.modal__input}
                                required
                                placeholder="Улица"
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.modal__input}
                                required
                                placeholder="Дом:"
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.modal__input}
                                required
                                placeholder="Этаж:"
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.modal__input}
                                required
                                placeholder="Квартира: "
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.modal__input}
                                required
                                placeholder="Парадное:"
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.modal__input}
                                required
                                placeholder="Домофон: "
                                name="name"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className={styles.modal__wrapp_right}>
                        <Select
                            classNamePrefix='modal__select'
                            // onChange={onChange}
                            value={getValueTime()}
                            options={time}
                            placeholder='Время доставки'/>
                        <input
                            className={styles.modal__input}
                            required
                            placeholder="Количество дней заказа "
                            name="days"
                            type="text"
                        />
                        <Select
                            classNamePrefix='modal__select'
                            value={getValuePay()}
                            options={pay}
                            placeholder='Способ оплаты'/>
                        <Select
                            classNamePrefix='modal__select'
                            value={getValueСutlery()}
                            options={cutlery}
                            placeholder='Мне нужны приборы'/>
                        <input
                            className={styles.modal__input}
                            required
                            placeholder="Пожелания"
                            name="text"
                            type="text"
                        />

                    </div>
                </div>
                <div className={styles.modal__order}>
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
                    <div className={styles.modal__btn} onClick={() => setActive(false)}>Заказать</div>
                </div>
            </div>
        </div>
    )
}