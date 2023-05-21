import LoadMoreBtn from '../../components/LoadMoreBtn';
import UserList from '../../components/UserList/UserList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operation';
import BackLink from 'components/BackLink';
import StatusFilter from 'components/StatusFilter';
import { selectErrorStatus } from 'redux/selectors';
import { InstrumentsBar } from './TweetsPage.styled';

const TweetsPage = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(4);
  const error = useSelector(selectErrorStatus);

  useEffect(() => {
    dispatch(fetchUsers({ page: 1, limit }));
  }, [dispatch, limit]);

  const increaseUsers = () => setLimit(limit + 4);

  return (
    <main>
      <InstrumentsBar>
        <BackLink />
        <StatusFilter />
      </InstrumentsBar>
      {(error && <b>{error}</b>) || (
        <>
          <UserList />
          <LoadMoreBtn increaseUsers={increaseUsers} />
        </>
      )}
    </main>
  );
};

export default TweetsPage;
