import { Profile } from "./Profile/Profile";
import user from "../data/user.json";
// import PropTypes from "prop-types";


export const App = () => {
  return (
		<Profile
		username={user.username}
		tag={user.tag}
		location={user.location}
		avatar={user.avatar}
		stats={user.stats}
	/>
  );
}; 