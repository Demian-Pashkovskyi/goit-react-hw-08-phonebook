// import PropTypes from 'prop-types';
// import mod from './Profile.module.css';

export const Profile = ({data: { username, tag, location, avatar, stats }}) => {
	return <div>
		<h2>{username}</h2>
	</div>
};


// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }),
// };

// export default Profile;