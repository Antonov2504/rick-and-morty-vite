import { Navigate, Route, Routes } from 'react-router-dom';

import { ErrorPageRoutePathEnum } from '@pages/ErrorPage/ErrorPage.types';
import { LocationsPage } from './components/LocationsPage';
import { LocationPage } from './components/LocationPage';

export const LocationsPages = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<LocationsPage />} />
        <Route path=':id' element={<LocationPage />} />
        <Route path='*' element={<Navigate to={ErrorPageRoutePathEnum.notFound} />} />
      </Route>
    </Routes>
  );
};
