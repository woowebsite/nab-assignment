import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';
import { Route, Routes, useLocation } from 'react-router-dom';
import PrivateRoute from 'routes/PrivateRoute';
import { HOME_URI, NOT_FOUND } from './routes';

const Router = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path={HOME_URI} element={<PrivateRoute />}>
        <Route path={HOME_URI} element={<HomePage />} />
        <Route path={NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
