import style from './friendList.module.scss';

import FriendListItem from "./FriendListItem/FriendListItem";
import friends from "../../friends.json";

const FriendList = () => {
    return (
        <ul className={style.friendList}>
            {friends.map(({id, avatar, name, isOnline}) => (<FriendListItem
            key={id} 
            avatar={avatar}
            name={name}
            isOnline={isOnline}
        />))}
        </ul>
    )
}
export default FriendList;