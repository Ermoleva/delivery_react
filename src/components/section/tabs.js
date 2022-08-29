import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import TabPrice from "./tabPrice";
import TabTable from "./tabTable";
import {useState} from "react";
import Modal from "../section/ModalOnlineProgram"


const Tabss = () => {

    const [onlineActive, setOnlineActive] = useState(false);

    return (
        <>
            <Modal active={onlineActive} setActive={setOnlineActive}/>

            <Tabs class="react-tabs" forceRenderTabPanel defaultIndex={1}>
                <h1 className="tab__title">Программы питания</h1>
                <TabList>
                    <Tab>
                        <div className="tab__program_name"></div>
                        <p>Express Fit</p>
                        <p> 800 ккал</p>
                    </Tab>
                    <Tab>
                        <div className="tab__program_name"></div>
                        <p>slim</p>
                        <p> 1000 ккал</p>
                    </Tab>
                    <Tab>
                        <div className="tab__program_name"></div>
                        <p>fitness</p>
                        <p> 1300 ккал</p>
                    </Tab>
                    <Tab>
                        <div className="tab__program_name"></div>
                        <p>balance</p>
                        <p> 1600 ккал</p>
                    </Tab>
                    <Tab>
                        <div className="tab__program_name"></div>
                        <p>balance +</p>
                        <p> 1800 ккал</p>
                    </Tab>
                    <Tab>
                        <div className="tab__program_name"></div>
                        <p>strong</p>
                        <p> 2000 ккал</p>
                    </Tab>
                    <Tab>
                        <div className="tab__program_name"></div>
                        <p>maxi fit</p>
                        <p> 2400 ккал</p>
                    </Tab>
                </TabList>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <div className="tab__content_info">
                            <div className="tab__content_info-text">
                                <h2>EXPRESS FIT <span>1300 ккал</span></h2>
                                <p>
                                    Программа здорового питания Express Fit. Идеально для:
                                    похудения в кратчайшие сроки, повышения энергии и сил,
                                    снижения веса при сидячем образе жизни.
                                </p>
                            </div>
                            <div className="tab__content_price">
                                <TabPrice
                                    sale="510 грн"
                                    sale1="-15%"
                                    title1="Тестовый день"
                                    price1="357 грн"
                                    title2="1 день"
                                    price2="510 грн"
                                    title3="от 7 дней"
                                    price3="490 грн"
                                    title4="от 14 дней"
                                    price4="470 грн"
                                    title5="от 30 дней"
                                    price5="445 грн"
                                    title6="Завтрак и ужин"
                                    price6="433 грн"
                                />
                            </div>
                            <div className="tab__content_btn" onClick={() => setOnlineActive(true)}>Заказать</div>
                        </div>
                        <div className="tab__wrapp">
                            <TabList>

                                <Tab className="tab__days"><p className="tab__days_name">ПН</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">ср</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">чт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">пт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">сб</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вс</p></Tab>
                            </TabList>

                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                        </div>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <div className="tab__content_info">
                            <div className="tab__content_info-text">
                                <h2>EXPRESS FIT <span>1300 ккал</span></h2>
                                <p>
                                    Программа здорового питания Express Fit. Идеально для:
                                    похудения в кратчайшие сроки, повышения энергии и сил,
                                    снижения веса при сидячем образе жизни.
                                </p>
                            </div>
                            <div className="tab__content_price">
                                <TabPrice
                                    sale="510 грн"
                                    sale1="-15%"
                                    title1="Тестовый день"
                                    price1="357 грн"
                                    title2="1 день"
                                    price2="510 грн"
                                    title3="от 7 дней"
                                    price3="490 грн"
                                    title4="от 14 дней"
                                    price4="470 грн"
                                    title5="от 30 дней"
                                    price5="445 грн"
                                    title6="Завтрак и ужин"
                                    price6="433 грн"
                                />
                            </div>
                            <div className="tab__content_btn" onClick={() => setOnlineActive(true)}>Заказать</div>
                        </div>
                        <div className="tab__wrapp">
                            <TabList>

                                <Tab className="tab__days"><p className="tab__days_name">ПН</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">ср</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">чт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">пт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">сб</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вс</p></Tab>
                            </TabList>

                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                        </div>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <div className="tab__content_info">
                            <div className="tab__content_info-text">
                                <h2>EXPRESS FIT <span>1300 ккал</span></h2>
                                <p>
                                    Программа здорового питания Express Fit. Идеально для:
                                    похудения в кратчайшие сроки, повышения энергии и сил,
                                    снижения веса при сидячем образе жизни.
                                </p>
                            </div>
                            <div className="tab__content_price">
                                <TabPrice
                                    sale="510 грн"
                                    sale1="-15%"
                                    title1="Тестовый день"
                                    price1="357 грн"
                                    title2="1 день"
                                    price2="510 грн"
                                    title3="от 7 дней"
                                    price3="490 грн"
                                    title4="от 14 дней"
                                    price4="470 грн"
                                    title5="от 30 дней"
                                    price5="445 грн"
                                    title6="Завтрак и ужин"
                                    price6="433 грн"
                                />
                            </div>
                            <div className="tab__content_btn" onClick={() => setOnlineActive(true)}>Заказать</div>
                        </div>
                        <div className="tab__wrapp">
                            <TabList>

                                <Tab className="tab__days"><p className="tab__days_name">ПН</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">ср</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">чт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">пт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">сб</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вс</p></Tab>
                            </TabList>

                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                        </div>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <div className="tab__content_info">
                            <div className="tab__content_info-text">
                                <h2>EXPRESS FIT <span>1300 ккал</span></h2>
                                <p>
                                    Программа здорового питания Express Fit. Идеально для:
                                    похудения в кратчайшие сроки, повышения энергии и сил,
                                    снижения веса при сидячем образе жизни.
                                </p>
                            </div>
                            <div className="tab__content_price">
                                <TabPrice
                                    sale="510 грн"
                                    sale1="-15%"
                                    title1="Тестовый день"
                                    price1="357 грн"
                                    title2="1 день"
                                    price2="510 грн"
                                    title3="от 7 дней"
                                    price3="490 грн"
                                    title4="от 14 дней"
                                    price4="470 грн"
                                    title5="от 30 дней"
                                    price5="445 грн"
                                    title6="Завтрак и ужин"
                                    price6="433 грн"
                                />
                            </div>
                            <div className="tab__content_btn" onClick={() => setOnlineActive(true)}>Заказать</div>
                        </div>
                        <div className="tab__wrapp">
                            <TabList>

                                <Tab className="tab__days"><p className="tab__days_name">ПН</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">ср</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">чт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">пт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">сб</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вс</p></Tab>
                            </TabList>

                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                        </div>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <div className="tab__content_info">
                            <div className="tab__content_info-text">
                                <h2>EXPRESS FIT <span>1300 ккал</span></h2>
                                <p>
                                    Программа здорового питания Express Fit. Идеально для:
                                    похудения в кратчайшие сроки, повышения энергии и сил,
                                    снижения веса при сидячем образе жизни.
                                </p>
                            </div>
                            <div className="tab__content_price">
                                <TabPrice
                                    sale="510 грн"
                                    sale1="-15%"
                                    title1="Тестовый день"
                                    price1="357 грн"
                                    title2="1 день"
                                    price2="510 грн"
                                    title3="от 7 дней"
                                    price3="490 грн"
                                    title4="от 14 дней"
                                    price4="470 грн"
                                    title5="от 30 дней"
                                    price5="445 грн"
                                    title6="Завтрак и ужин"
                                    price6="433 грн"
                                />
                            </div>
                            <div className="tab__content_btn" onClick={() => setOnlineActive(true)}>Заказать</div>
                        </div>
                        <div className="tab__wrapp">
                            <TabList>

                                <Tab className="tab__days"><p className="tab__days_name">ПН</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">ср</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">чт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">пт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">сб</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вс</p></Tab>
                            </TabList>

                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                        </div>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <div className="tab__content_info">
                            <div className="tab__content_info-text">
                                <h2>EXPRESS FIT <span>1300 ккал</span></h2>
                                <p>
                                    Программа здорового питания Express Fit. Идеально для:
                                    похудения в кратчайшие сроки, повышения энергии и сил,
                                    снижения веса при сидячем образе жизни.
                                </p>
                            </div>
                            <div className="tab__content_price">
                                <TabPrice
                                    sale="510 грн"
                                    sale1="-15%"
                                    title1="Тестовый день"
                                    price1="357 грн"
                                    title2="1 день"
                                    price2="510 грн"
                                    title3="от 7 дней"
                                    price3="490 грн"
                                    title4="от 14 дней"
                                    price4="470 грн"
                                    title5="от 30 дней"
                                    price5="445 грн"
                                    title6="Завтрак и ужин"
                                    price6="433 грн"
                                />
                            </div>
                            <div className="tab__content_btn" onClick={() => setOnlineActive(true)}>Заказать</div>
                        </div>
                        <div className="tab__wrapp">
                            <TabList>

                                <Tab className="tab__days"><p className="tab__days_name">ПН</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">ср</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">чт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">пт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">сб</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вс</p></Tab>
                            </TabList>

                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                        </div>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs forceRenderTabPanel>
                        <div className="tab__content_info">
                            <div className="tab__content_info-text">
                                <h2>EXPRESS FIT <span>1300 ккал</span></h2>
                                <p>
                                    Программа здорового питания Express Fit. Идеально для:
                                    похудения в кратчайшие сроки, повышения энергии и сил,
                                    снижения веса при сидячем образе жизни.
                                </p>
                            </div>
                            <div className="tab__content_price">
                                <TabPrice
                                    sale="510 грн"
                                    sale1="-15%"
                                    title1="Тестовый день"
                                    price1="357 грн"
                                    title2="1 день"
                                    price2="510 грн"
                                    title3="от 7 дней"
                                    price3="490 грн"
                                    title4="от 14 дней"
                                    price4="470 грн"
                                    title5="от 30 дней"
                                    price5="445 грн"
                                    title6="Завтрак и ужин"
                                    price6="433 грн"
                                />
                            </div>
                            <div className="tab__content_btn" onClick={() => setOnlineActive(true)}>Заказать</div>
                        </div>
                        <div className="tab__wrapp">
                            <TabList>

                                <Tab className="tab__days"><p className="tab__days_name">ПН</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">ср</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">чт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">пт</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">сб</p></Tab>
                                <Tab className="tab__days"><p className="tab__days_name">вс</p></Tab>
                            </TabList>

                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                            <TabPanel>
                                <TabTable
                                    title1="Завтрак"
                                    time1="7:00 - 9:00"
                                    info1="-Фриттата с сыром и кабачками"
                                    price1="170гр"
                                    title2="2-й завтрак"
                                    time2="10:00-12:00"
                                    info2="-Фермерский йогурт"
                                    info3="-Полезное печенье из сухофруктов и орехов"
                                    price2="200гр"
                                    count2="2 шт"
                                    title3="2-й завтрак"
                                    time3="10:00-12:00"
                                    info4="-Люля-кебаб из индейки"
                                    info5="-Летний салат с маслинами и сыром"
                                    price3="100гр"
                                    price4="100гр"
                                    title4="Полдник"
                                    time4="16:00-17:30"
                                    info6="-Творожное суфле с какао и вишей"
                                    price5="100гр"
                                    title5="Ужин"
                                    time5="19:00-20:00"
                                    info7="-Рыбный терен"
                                    info8="-Овощи гриль"
                                    price6="100гр"
                                    price7="150гр"
                                />
                            </TabPanel>
                        </div>
                    </Tabs>
                </TabPanel>
            </Tabs>
        </>
    )
};

export default Tabss;