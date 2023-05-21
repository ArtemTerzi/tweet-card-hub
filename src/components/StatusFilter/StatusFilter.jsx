import { useDispatch } from 'react-redux';
import { ChangeFilter } from 'redux/filterSlice';
import { Option, Select } from './StatusFilter.styled';

const StatusFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = ({ currentTarget: { value } }) =>
    dispatch(ChangeFilter(value));

  return (
    <Select onChange={handleFilterChange}>
      <Option value="All">All</Option>
      <Option value="Follow">Follow</Option>
      <Option value="Followings">Followings</Option>
    </Select>
  );
};

export default StatusFilter;
