import styles from '../src/styles/components/ShopItem.module.scss'
import Photos from "../src/components/section/photos";
import Image from "next/future/image";
import LunchItem from "../src/components/section/lunchItem";
import LunchItemModal from "../src/components/section/LunchItemModal"

import data from "../src/dataLunch"
import CandyItem from "../src/components/section/CandyItem";
import {useState, useEffect} from "react";
import Modal from "../src/components/section/ModalLunch";
import ModalNumber from "../src/components/section/ModalNumber";
import ModalOnline from "../src/components/section/ModalOnline";


export default function Lunch() {

    const [cart, setCart] = useState(data);
    const [modalLunchActive, setModalLunchActive] = useState(false);
    const [numberActive, setNumberActive] = useState(false);
    const [onlineActive, setOnlineActive] = useState(false);

    const [total, setTotal] = useState({
        price: cart.reduce((prev, curr)=>{return prev + curr.priceTotal}, 0),
        count: cart.reduce((prev, curr)=>{return prev + curr.count}, 0)
    })

    useEffect(()=>{
        setTotal({
            price: cart.reduce((prev, curr)=>{return prev + curr.priceTotal}, 0),
            count: cart.reduce((prev, curr)=>{return prev + curr.count}, 0)
        })
    }, [cart])

    const increase = (id) => {
        setCart(() => {
            return cart.map((lunchItem) => {
                if (lunchItem.id === id) {
                    return {
                        ...lunchItem,
                        count: lunchItem.count +1,
                        priceTotal: (lunchItem.count+1) * lunchItem.price
                    }
                }
                return lunchItem;
            })
        })
    }

    const decrease = (id) => {
        setCart(() => {
            return cart.map((lunchItem) => {
                if (lunchItem.id === id) {
                    const newCount = lunchItem.count - 1 >= 0 ? lunchItem.count - 1 : 0
                    return {
                        ...lunchItem,
                        count: newCount,
                        priceTotal: newCount * lunchItem.price
                    }
                }
                return lunchItem
            })
        })
    }

    const lunch = cart.map((lunchItem) => {
        // eslint-disable-next-line react/jsx-key
        return <LunchItem key={lunchItem.id} lunchItem={lunchItem} increase={increase} decrease={decrease}/>
    })
    const lunchModal = cart.map((lunchItem) => {
        // eslint-disable-next-line react/jsx-key
        return <LunchItemModal key={lunchItem.id} lunchItem={lunchItem} total={total} increase={increase} decrease={decrease}/>
    })


    return (
        <>
            <Modal active={modalLunchActive} setActive={setModalLunchActive} total={total} lunchModal={lunchModal} increase={increase} decrease={decrease} numberActive={numberActive}
                   setNumberActive={setNumberActive} onlineActive={onlineActive}
                   setOnlineActive={setOnlineActive}/>
            <ModalNumber active={numberActive} setActive={setNumberActive}/>
            <ModalOnline total={total} active={onlineActive} setActive={setOnlineActive}  />
            <section className={styles.product__info}>
                <div className={styles.container}>
                    <h2 className={styles.product__info_title}>Бизнес-ланчи</h2>
                    <p className={styles.product__info_text}>
                        Представляем сладкую коллекцию полезных конфет. Созданы с любовью и
                        изготовлены из натуральных продуктов без добавления сахара - с
                        заботой о вас и ваших близких!
                        <br/><br/>
                        Стоимость доставки 60 грн по предварительному заказу (за 1 сутки).
                        Предварительный заказ предполагает доставку на следующий день с
                        6:00-10:00. Минимальный заказ - от 6 конфет. Вес 1 кофетки 25 г.
                        <br/><br/>
                        Заказы на завтра принимаются до 11-00 текущего дня.
                        <br/><br/>
                        Конфеты доставляются в прозрачных пакетах со стикером. Вы можете
                        заказать подарочный бокс с лентой стоимостью 20 грн
                    </p>
                </div>
            </section>
            <section className={styles.product__main}>
                <div className={styles.container}>
                    <div className={styles.product__header}>
                        <button className={styles.product__order} onClick={() => setModalLunchActive(true)}>Оформить заказ</button>
                    </div>
                    <div className={styles.product__items}>
                        {lunch}


                    </div>
                </div>
            </section>
            <Photos />
        </>
    )
}
