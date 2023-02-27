import PropTypes from 'prop-types';
import style from './statistics.module.scss';

import data from "../../data.json";
import Item from "./Item/Item";

const Statistics = (props) => {
    const {title} = props;

    return (
        <section className={style.statistics}>
            {title && (<h2 className={style.title}>{title}</h2>)}

            <ul className={style.stat}>
                {data.map(({id, label, percentage}) => (<Item key={id} label={label} percentage={percentage}/>))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
}

export default Statistics;