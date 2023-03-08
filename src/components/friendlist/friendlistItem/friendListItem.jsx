import css from '../friendlistItem/friendListItem.module.css';

function statusCheck(status) {
  if (status) {
    return css.isOnline;
  } else {
    return css.isOffline;
  }
}

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={statusCheck(isOnline)}> ●</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
