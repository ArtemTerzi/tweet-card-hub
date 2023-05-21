import { useSelector } from 'react-redux';
import { selectFilter, selectUsers } from 'redux/selectors';
import UserCard from 'components/UserCard';
import { CardList } from './UserList.styled';

const UserList = () => {
  const userList = useSelector(selectUsers);
  const filter = useSelector(selectFilter);

  const getFilteredUsers = (users, statusFilter) => {
    switch (statusFilter) {
      case 'Follow':
        return userList.filter(user => !user.isFollowing);
      case 'Followings':
        return userList.filter(user => user.isFollowing);
      default:
        return users;
    }
  };

  return (
    <CardList>
      {getFilteredUsers(userList, filter) &&
        getFilteredUsers(userList, filter).map(user => {
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
