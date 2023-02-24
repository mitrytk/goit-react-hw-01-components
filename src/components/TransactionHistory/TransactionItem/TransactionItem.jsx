import style from "./transactionItem.module.scss"
import PropTypes from 'prop-types';

const TransactionItem = (props) => {
    const {
        type, 
        amount, 
        currency
    } = props;

    return (
        <tr className={style.item}>
            <td className={style.string}>{type}</td>
            <td className={style.string}>{amount}</td>
            <td className={style.string}>{currency}</td>
        </tr>
    )
}

TransactionItem.propTypes = {
    type: PropTypes.string, 
    amount: PropTypes.string, 
    currency: PropTypes.string
}

export default TransactionItem;