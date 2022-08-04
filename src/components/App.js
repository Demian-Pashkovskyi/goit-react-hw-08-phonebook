import { Profile } from "../components/Profile/Profile";
// import data from "./data/user.json"

export const App = ({ data }) => {
  return (
      <Profile {...data.user} />
  );
}; 