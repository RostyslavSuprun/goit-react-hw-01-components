import css from './transactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.column}>
          <th className={css.headEl}>Type</th>
          <th className={css.headEl}>Amount</th>
          <th className={css.headEl}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.bodyEl}>
        {items.map(item => {
          return (
            <tr className={css.row} key={item.id}>
              <td className={css.element}>{item.type}</td>
              <td className={css.element}>{item.amount}</td>
              <td className={css.element}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
