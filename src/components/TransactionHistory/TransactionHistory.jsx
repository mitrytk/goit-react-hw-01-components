import style from "./transactionHistory.module.scss";

import TransactionItem from "./TransactionItem/TransactionItem";
import transactions from "../../transactions";

const TransactionHistory = () => {

    return (
        <table className={style.transactionHistory}>
            <thead className={style.thead}>
                <tr>
                    <th className={style.thItem}>Type</th>
                    <th className={style.thItem}>Amount</th>
                    <th className={style.thItem}>Currency</th>
                </tr>
            </thead>

            <tbody className={style.tbody}>
                {transactions.map(({id, type, amount, currency}) => (<TransactionItem 
                key={id}
                type={type}
                amount={amount}
                currency={currency}
                />))}
            </tbody>
        </table>
    )
}

export default TransactionHistory;