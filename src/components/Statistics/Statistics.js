import React from "react";
import PropTypes from 'prop-types';
import st from './Statistics.module.css';


export const Statistics = ({ title, stats }) => (
	<section className={st.statistics}>
		{title && <h2 className={st.title}>{title}</h2>}
		<ul className={st.list}>
			{stats.map(stat => (
				<li key={stat.id} className={st.item} style={{
					backgroundColor: getRGB(),
					width: `calc(100%/${stats.length})`,
				}}>
					<span className={st.label}>{stat.label}</span>
        	<span className={st.percentage}>{stat.percentage}%</span>
				</li>
			))}
		</ul>
	</section>
)

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

function getRGB() {
	const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}