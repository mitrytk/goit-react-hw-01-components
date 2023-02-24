import Profile from "./Profile/Profile";
import user from "../user.json";

import Statistics from "./Statistics/Statistics";
import data from "../data.json";
import Item from "./Statistics/Item/Item";

import FriendList from "./FriendList/FriendList";
import FriendListItem from "./FriendList/FriendListItem/FriendListItem";
import friends from "../friends.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import TransactionItem from "./TransactionHistory/TransactionItem/TransactionItem";
import transactions from "../transactions";


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
      <FriendList>
        {friends.map(({id, avatar, name, isOnline}) => (<FriendListItem
            key={id} 
            avatar={avatar}
            name={name}
            isOnline={isOnline}
        />))}
      </FriendList>

      <TransactionHistory>
          {transactions.map(({id, type, amount, currency}) => (<TransactionItem 
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />))}
      </TransactionHistory>
    </>
  );
};
