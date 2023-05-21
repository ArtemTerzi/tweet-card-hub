import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './BackLink.styled';

export const BackLink = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <Button>
      <Link to={backLinkHref.current}> ☚ Go back</Link>
    </Button>
  );
};
