import PropTypes from 'prop-types';
import st from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
		<ul className={st.list}>
			<FriendListItem friends={friends} />
		</ul>
	)
}

FriendListItem.propTypes = {
	friends: PropTypes.array.isRequired,
};
