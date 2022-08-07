import PropTypes from 'prop-types';
import st from './TransactionHistory.module.css';

export const TransactionHistoryItems = ({ type, amount, currency }) => {
  return (
    <tr className={st.row}>
      <td className={st.cell}>{type}</td>
      <td className={st.cell}>{amount}</td>
      <td className={st.cell}>{currency}</td>
    </tr>
  )
}

TransactionHistoryItems.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

