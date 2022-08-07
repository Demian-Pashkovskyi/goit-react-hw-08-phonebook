import PropTypes from 'prop-types';
import st from './TransactionHistory.module.css';
import { TransactionHistoryItems } from './TransactionItems';

export const TransactionHistory = ({ transactions }) => {
	return (
		<table className={st.transactionTbl}>
			<thead className={st.heder}>
				<tr>
					<th className={st.column}>Type</th>
					<th className={st.column}>Amount</th>
					<th className={st.column}>Currency</th>
				</tr>
			</thead>
			<tbody>
				{transactions.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItems
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
			</tbody>
		</table>
	);
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
