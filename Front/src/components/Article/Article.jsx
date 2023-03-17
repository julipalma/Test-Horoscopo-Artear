import { useEffect, useState } from 'react';
import moment from 'moment/moment';
const today = new Date(moment().format())
const year = today.getFullYear();

function Article(props) {
    const [aliveStyle, setAliveStyle] = useState('');
    useEffect(() => {               
        const initDate = new Date(moment(`${props.data.init_date}-${year}`.split("-").reverse().join("-")).format());
        const endDate = new Date(moment(`${props.data.end_date}-${year}`.split("-").reverse().join("-")).format());
       // eslint-disable-next-line no-unused-expressions
         (today >= initDate & today <= endDate) ? setAliveStyle('alive'): "" ;
    }, [props.data])

    return (
        <li className={`item-list__item-container ${aliveStyle}`}>
            <div className="item-list__item-container__item">
                
                <div className="item-list__item-container__item__item-lt-col">
                    <h3 className="item-list__item-container__item__item-lt-col__item-title">{props.data.name}</h3>
                    <div className="item-list__item-container__item__item-lt-col__item-img-wrapper">
                        <img src={process.env.REACT_APP_API + props.data.image} alt={props.data.name} width='100%'/>
                    </div>
                </div>
                <div className="item-list__item-container__item__item-rt-col">
                    <p className="item-list__item-container__item__item-rt-col__item-desc">{props.data.prediction}</p>
                </div>
            </div>
        </li>
    )
}

export default Article;