import { Navigate, Route, Routes } from 'react-router-dom';

import { ErrorPageRoutePathEnum } from '@pages/ErrorPage/ErrorPage.types';
import { EpisodesPage } from './components/EpisodesPage';
import { EpisodePage } from './components/EpisodePage';

export const EpisodesPages = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<EpisodesPage />} />
        <Route path=':id' element={<EpisodePage />} />
        <Route path='*' element={<Navigate to={ErrorPageRoutePathEnum.notFound} />} />
      </Route>
    </Routes>
  );
};
