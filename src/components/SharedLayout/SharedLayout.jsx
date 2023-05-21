import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  GlobalContainer,
  Header,
  NavList,
  Navlink,
} from './SharedLayout.styled';
import Footer from 'components/Footer';

const SharedLayout = () => {
  return (
    <GlobalContainer>
      <Header>
        <nav>
          <NavList>
            <li>
              <Navlink to="/"> Quotes</Navlink>
            </li>
            <li>
              <Navlink to="/tweets"> Tweets</Navlink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </GlobalContainer>
  );
};

export default SharedLayout;
