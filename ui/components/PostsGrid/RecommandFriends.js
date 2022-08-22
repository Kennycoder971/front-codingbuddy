import UserInfo from "../UserInfo/UserInfo";
import styles from "./PostsGrid.module.scss";

export default function RecommandFriends() {
  return (
    <ul className={styles.recommandFriend}>
      <h3 className={styles.heading}>Qui suivre :</h3>
      <li>
        <UserInfo userName={"Friend"} />
      </li>
      <li>
        <UserInfo userName={"Friend"} />
      </li>
    </ul>
  );
}
