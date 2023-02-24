import style from './friendList.module.scss';

const FriendList = (props) => {
    const {
        children
    } = props;
    return (
        <ul className={style.friendList}>
            {children}
        </ul>
    )
}
export default FriendList;