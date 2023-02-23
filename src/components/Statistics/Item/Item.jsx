import PropTypes from 'prop-types';
import style from './item.module.scss';

const Item = (props) => {
    const {label, percentage} = props;

    return (
        <li className={style.item}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
        </li>
    );
}

Item.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}

export default Item;