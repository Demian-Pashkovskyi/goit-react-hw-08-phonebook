import PropTypes from 'prop-types';
import st from './Statistics.module.css';

export const Statistics = ({ title, data }) => {
	const renderData = () =>
	data.mape(({ id, label, percentage }) => (
			<li className={st.item}
			key={id}>
      <span className={st.label}>{label}</span>
      <span className={st.percentage}>{percentage}%</span>
    </li>
	));
	return (
    <section className={st.statistics}>
      {title && <h2 className={st.title}>{title}</h2>}
      <ul className={st.list}>{data && renderData()}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;