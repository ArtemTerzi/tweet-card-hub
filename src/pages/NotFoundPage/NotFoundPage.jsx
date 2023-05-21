import errorImg from 'images/404-error.png';
import { ErrImg, ErrWrapper } from './NotFoundPage.styled';
import BackLink from 'components/BackLink';

const NotFoundPage = () => {
  return (
    <main>
      <BackLink />
      <ErrWrapper>
        <h1>Page not found</h1>
        <ErrImg src={errorImg} alt="error 404" width={480} />
      </ErrWrapper>
    </main>
  );
};

export default NotFoundPage;
