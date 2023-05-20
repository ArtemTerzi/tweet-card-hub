import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';
import UserCard from '../UserCard/UserCard';
import { CardList } from './UserList.styled';

const UserList = () => {
  const userList = useSelector(selectUsers);

  return (
    <CardList>
      {userList &&
        userList.map(user => {
          return (
            <li key={user.id}>
              <UserCard {...user} />
            </li>
          );
        })}
    </CardList>
  );
};

export default UserList;
