import css from './friendList.module.css';
import { FriendListItem } from 'components/friendlist/friendlistItem/friendListItem';

export const FriendList = ({ friends }) => {
  return  <ul className={css.friendList}>
        {friends.map(friend => {
          return  <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
        })}
</ul>
}