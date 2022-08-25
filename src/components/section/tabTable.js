import {TabPanel} from "react-tabs";

export default function TabTable(props) {
    return (


                <div className="tab__content_table">
                    <div className="tab__content_table-item">
                        <div className="tab__content_table-name">
                            <h2 className="tab__content_table-title">{props.title1}</h2>
                            <p className="tab__content_table-subtitle">{props.time1}</p>
                        </div>
                        <div className="tab__content_table-info">
                            <p>{props.info1}</p>
                        </div>
                        <div className="tab__content_table-price">
                            <p>{props.price1}</p>
                        </div>
                    </div>
                    <div className="tab__content_table-item">
                        <div className="tab__content_table-name">
                            <h2 className="tab__content_table-title">{props.title2}</h2>
                            <p className="tab__content_table-subtitle">{props.time2}</p>
                        </div>
                        <div className="tab__content_table-info">
                            <p>{props.info2}</p>
                            <p>{props.info3}</p>
                        </div>
                        <div className="tab__content_table-price">
                            <p>{props.price2}</p>
                            <p>{props.count2}</p>
                        </div>
                    </div>
                    <div className="tab__content_table-item">
                        <div className="tab__content_table-name">
                            <h2 className="tab__content_table-title">{props.title3}</h2>
                            <p className="tab__content_table-subtitle">{props.time3}</p>
                        </div>
                        <div className="tab__content_table-info">
                            <p>{props.info4}</p>
                            <p>{props.info5}</p>
                        </div>
                        <div className="tab__content_table-price">
                            <p>{props.price3}</p>
                            <p>{props.price4}</p>
                        </div>
                    </div>
                    <div className="tab__content_table-item">
                        <div className="tab__content_table-name">
                            <h2 className="tab__content_table-title">{props.title4}</h2>
                            <p className="tab__content_table-subtitle">{props.time4}</p>
                        </div>
                        <div className="tab__content_table-info">
                            <p>{props.info6}</p>
                        </div>
                        <div className="tab__content_table-price">
                            <p>{props.price5}</p>
                        </div>
                    </div>
                    <div className="tab__content_table-item">
                        <div className="tab__content_table-name">
                            <h2 className="tab__content_table-title">{props.title5}</h2>
                            <p className="tab__content_table-subtitle">{props.time5}</p>
                        </div>
                        <div className="tab__content_table-info">
                            <p>{props.info7}</p>
                            <p>{props.info8}</p>
                        </div>
                        <div className="tab__content_table-price">
                            <p>{props.price6}</p>
                            <p>{props.price7}</p>
                        </div>
                    </div>
                </div>


    )
}