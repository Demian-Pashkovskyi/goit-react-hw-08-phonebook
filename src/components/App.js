import { Profile } from "../components/Profile/Profile";

export const App = ({ data }) => {
  return (
    <div>
			<Profile {...data.user} />
		</div>
  );
};
