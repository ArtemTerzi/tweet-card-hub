import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import TweetsPage from 'pages/TweetsPage/TweetsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
