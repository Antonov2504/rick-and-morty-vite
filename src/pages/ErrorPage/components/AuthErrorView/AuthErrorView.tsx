import { Page } from '@constants/pages';
import { errorsMock } from '@pages/ErrorPage/ErrorPage.mocks';

import { ErrorPageDescriptionEnum, ErrorPageRoutePathEnum } from '@pages/ErrorPage/ErrorPage.types';

import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import * as Styled from './AuthErrorView.styled';

type AuthErrorViewProps = {
  status: ErrorPageDescriptionEnum;
};

export const AuthErrorView = ({ status }: AuthErrorViewProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const error = errorsMock[status];
  const { code, title } = error;

  const handleGoHome = () => {
    navigate(Page.home);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Code>{code}</Styled.Code>
        <Styled.Title>{title}</Styled.Title>
        <Button title='Go Home Page' onClick={handleGoHome} />
        {location.pathname === ErrorPageRoutePathEnum.forbidden && (
          <Styled.Footer>
            <Styled.FooterLink to={Page.login} replace state={location.state}>
              Sign in
            </Styled.FooterLink>
            <Styled.FooterLink to={Page.register} replace>
              Sign up
            </Styled.FooterLink>
          </Styled.Footer>
        )}
      </Styled.Content>
      <Styled.Background />
    </Styled.Container>
  );
};
