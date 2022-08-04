import PropTypes from 'prop-types';
import st from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
	return <div className={st.profile}>
  <div className={st.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={st.avatar}
    />
    <p className={st.name}>{username}</p>
    <p className={st.tag}>@{tag}</p>
    <p className={st.location}>{location}</p>
  </div>

  <ul className={st.stats}>
    <li>
      <span className={st.label}>Followers</span>
      <span className={st.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={st.label}>Views</span>
      <span className={st.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={st.label}>Likes</span>
      <span className={st.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;