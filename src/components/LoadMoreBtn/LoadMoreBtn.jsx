import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/selectors';
import { LoadMore } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ increaseUsers }) => {
  const userList = useSelector(selectUsers);

  return (
    <>
      {userList.length < 100 && (
        <LoadMore type="button" onClick={increaseUsers}>
          Load more
        </LoadMore>
      )}
    </>
  );
};

export default LoadMoreBtn;
