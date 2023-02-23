import Profile from "./Profile/Profile";
import user from "../user.json";

import Statistics from "./Statistics/Statistics";
import data from "../data.json";
import Item from "./Statistics/Item/Item";


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
        {data.map(({id, label, percentage}) => (<Item key={id} label={label} percentage={percentage}/>))}
      </Statistics>
    </>
  );
};
