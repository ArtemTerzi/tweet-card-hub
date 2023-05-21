const StatusFilter = () => {
  //   const dispatch = useDispatch();
  //   const filter = useSelector(getStatusFilter);

  //   const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <select>
      <option
      // selected={filter === statusFilters.all}
      // onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </option>
      <option
      // selected={filter === statusFilters.active}
      // onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </option>
      <option
      // selected={filter === statusFilters.completed}
      // onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </option>
    </select>
  );
};

export default StatusFilter;
