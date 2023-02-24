import style from "./transactionHistory.module.scss";

const TransactionHistory = (props) => {
    const {
        children
    } = props;

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
                {children}
            </tbody>
        </table>
    )
}

export default TransactionHistory;