import Photos from "../src/components/section/photos";
import Image from 'next/future/image';
import {useState, useEffect} from 'react'
import backArrow from "../src/images/article_back_arrow.svg"
import styles from "../src/styles/components/ShopItem.module.scss";
import CandyItem from "../src/components/section/CandyItem";
import CandyItemModal from "../src/components/section/CandyItemModal"

import data from "../src/dataCandy"
import Modal from "../src/components/section/ModalCandy";
import ModalNumber from "../src/components/section/ModalNumber";


export default function ShopItem() {
    const [cart, setCart] = useState(data);
    const [modalCandyActive, setModalCandyActive] = useState(false);
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
            return cart.map((candyItem) => {
                if (candyItem.id === id) {
                    return {
                        ...candyItem,
                        count: candyItem.count +1,
                        priceTotal: (candyItem.count+1) * candyItem.price
                    }
                }
                return candyItem;
            })
        })
    }




    const decrease = (id) => {
        setCart(() => {
            return cart.map((candyItem) => {
                if (candyItem.id === id) {
                    const newCount = candyItem.count - 1 > 0 ? candyItem.count - 1 : 1
                    return {
                        ...candyItem,
                        count: newCount,
                        priceTotal: newCount * candyItem.price
                    }
                }
                return candyItem
            })
        })
    }

    const candies = cart.map((candyItem) => {
        // eslint-disable-next-line react/jsx-key
        return <CandyItem  key={candyItem.id} candyItem={candyItem} increase={increase} decrease={decrease}/>
    })

    const candiesModal = cart.map((candyItem) => {
        // eslint-disable-next-line react/jsx-key
        return <CandyItemModal  key={candyItem.id} candyItem={candyItem} total={total} increase={increase} decrease={decrease}/>
    })


    return (
        <>
            <Modal active={modalCandyActive} setActive={setModalCandyActive} numberActive={numberActive} setNumberActive={setNumberActive} total={total} candiesModal={candiesModal} increase={increase} decrease={decrease}/>
            <ModalNumber active={numberActive} setActive={setNumberActive}/>

            <section className={styles.product__info}>
                <div className={styles.container}>
                    <h2 className={styles.product__info_title}>Полезные конфеты</h2>
                    <p className={styles.product__info_text}>
                        Представляем сладкую коллекцию полезных конфет. Созданы с любовью и
                        изготовлены из натуральных продуктов без добавления сахара - с
                        заботой о вас и ваших близких!
                        <br/><br/>

                        Стоимость доставки 60 грн по предварительному заказу (за 1 сутки).
                        Предварительный заказ предполагает доставку на следующий день с
                        6:00-10:00. Минимальный заказ - от 6 конфет. Вес 1 кофетки 25 г.
                        <br/><br/>
                        Заказы на завтрa принимаются до 11-00 текущего дня.
                        <br/><br/>

                        Конфеты доставляются в прозрачных пакетах со стикером. Вы можете
                        заказать подарочный бокс с лентой стоимостью 20 грн
                    </p>
                </div>
            </section>

            <section className={styles.product__main}>
                <div className={styles.container}>
                    <div className={styles.product__header}>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a href="/shop" className={styles.product__back}>

                            <Image src={backArrow}
                                   alt="logo" layout={'raw'} className={styles.product__back_arrow}/>
                            <p>Назад</p>
                        </a>
                        <button className={styles.product__order} onClick={() => setModalCandyActive(true)}>Оформить заказ</button>
                    </div>
                    <div className={styles.product__items}>

                        {candies}

                    </div>
                </div>
            </section>
            <Photos/>

        </>
    )
}