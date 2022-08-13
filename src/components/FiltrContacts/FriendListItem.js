import React from "react";
import PropTypes from 'prop-types';
import st from './FriendList.module.css';

export const FriendListItem = ({ friends }) => {
  return friends.map((friend) => (
		<li className={st.item} key={friend.id}>
			<span className={friend.isOnline ? st.isOnline : st.isOffline}>{friend.isOnline}</span>
			<img className={st.avatar} src={friend.avatar} alt="User avatar" width="48" />
			<p className={st.name}>{friend.name}</p>
		</li>
	));
};

FriendListItem.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		})
	),
};