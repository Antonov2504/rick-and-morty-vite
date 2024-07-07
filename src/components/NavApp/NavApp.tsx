import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PortalLayout } from '@src/layouts/PortalLayout';
import { AuthContextProvider } from '@src/contexts/AuthContextProvider';
import { PrivateRoute } from '@components/PrivateRoute';
import { Loader } from '@components/Loader';
import { Page } from '@constants/pages';
import { MantineProvider } from '@mantine/core';

const LoginPage = lazy(() =>
  import('@pages/LoginPage').then((module) => ({ default: module.LoginPage }))
);
const RegisterPage = lazy(() =>
  import('@pages/RegisterPage').then((module) => ({ default: module.RegisterPage }))
);
const HomePage = lazy(() =>
  import('@pages/HomePage').then((module) => ({ default: module.HomePage }))
);
const CharactersPages = lazy(() =>
  import('@pages/CharactersPages').then((module) => ({ default: module.CharactersPages }))
);
const EpisodesPages = lazy(() =>
  import('@pages/EpisodesPages').then((module) => ({ default: module.EpisodesPages }))
);
const LocationsPages = lazy(() =>
  import('@pages/LocationsPages').then((module) => ({ default: module.LocationsPages }))
);
const ErrorPage = lazy(() =>
  import('@pages/ErrorPage').then((module) => ({ default: module.ErrorPage }))
);
export const NavApp = () => {
  return (
    <MantineProvider>
      <Suspense fallback={<Loader />}>
        <AuthContextProvider>
          <Routes>
            <Route path={Page.login} element={<LoginPage />} />
            <Route path={Page.register} element={<RegisterPage />} />
            <Route element={<PortalLayout />}>
              <Route path={Page.index} element={<Navigate to={Page.home} replace />} />
              <Route path={Page.home} element={<HomePage />} />
              <Route element={<PrivateRoute />}>
                <Route path={`${Page.characters}/*`} element={<CharactersPages />} />
                <Route path={`${Page.episodes}/*`} element={<EpisodesPages />} />
                <Route path={`${Page.locations}/*`} element={<LocationsPages />} />
              </Route>
            </Route>
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </AuthContextProvider>
      </Suspense>
    </MantineProvider>
  );
};
