import Profile from "./Profile/Profile";
import user from "../user.json";

import Statistics from "./Statistics/Statistics";

import FriendList from "./FriendList/FriendList";

import TransactionHistory from "./TransactionHistory/TransactionHistory";


export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />

      <Statistics
        title='Upload stats'>
      </Statistics>

      <FriendList />

      <TransactionHistory />
    </>
  );
};
