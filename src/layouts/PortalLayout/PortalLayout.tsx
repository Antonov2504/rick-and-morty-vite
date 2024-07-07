import { Outlet, useLocation } from 'react-router-dom';

import { Page } from '@constants/pages';
import { AuthStatus } from '@components/AuthStatus';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { NavLink } from '@mantine/core';
import * as Styled from './PortalLayout.styled';

export const PortalLayout = () => {
  const location = useLocation();

  const menuData = [
    { label: 'Home', href: Page.home },
    { label: 'Characters', href: Page.characters },
    { label: 'Locations', href: Page.locations },
    { label: 'Episodes', href: Page.episodes },
  ];

  const menuItems = menuData.map((item) => (
    <NavLink
      href={item.href}
      key={item.label}
      active={item.href === `/${location.pathname.split('/')[1]}`}
      label={item.label}
      color='#c4dd52'
    />
  ));

  return (
    <Styled.Container>
      <Styled.OutletWrapper>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Styled.OutletWrapper>

      <Styled.Sidebar>
        <AuthStatus />
        <Styled.Nav>
          <Styled.NavList>{menuItems}</Styled.NavList>
        </Styled.Nav>
      </Styled.Sidebar>

      <Styled.Background $path={`/${location.pathname.split('/')[1]}`} />
    </Styled.Container>
  );
};
