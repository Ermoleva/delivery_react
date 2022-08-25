export default function TabPrice(props){
    return(
        <>
            <div className="tab__content_price-item">
                <h2>{props.title1}</h2>
                <p className="tab__content_past-price lie__price">{props.sale}</p>
                <p className="tab__content_now-price">{props.price1}</p>
            </div>
            <div className="tab__content_price-item">
                <h2>{props.title2}</h2>
                <p className="tab__content_past-price"></p>
                <p className="tab__content_now-price">{props.price2}</p>
            </div>
            <div className="tab__content_price-item">
                <h2>{props.title3}</h2>
                <p className="tab__content_past-price lie__price">{props.sale}</p>
                <p className="tab__content_now-price">{props.price3}</p>
            </div>
            <div className="tab__content_price-item">
                <h2>{props.title4}</h2>
                <p className="tab__content_past-price lie__price">{props.sale}</p>
                <p className="tab__content_now-price">{props.price4}</p>
            </div>
            <div className="tab__content_price-item">
                <h2>{props.title5}</h2>
                <p className="tab__content_past-price lie__price">{props.sale}</p>
                <p className="tab__content_now-price">{props.price5}</p>
            </div>
            <div className="tab__content_price-item">
                <h2>{props.title6}</h2>
                <p className="tab__content_past-price">{props.sale1}</p>
                <p className="tab__content_now-price">{props.price6}</p>
            </div>
        </>
    )
}