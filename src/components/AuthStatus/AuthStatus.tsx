import { Page } from '@constants/pages';
import { useAuthContext } from '@src/contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import * as Styled from './AuthStatus.styled';

export const AuthStatus = () => {
  const navigate = useNavigate();

  const { user, onSignOut } = useAuthContext();

  const handleSignOut = () => {
    onSignOut(() => {
      navigate('/');
    });
  };

  if (user === null) {
    return (
      <Styled.Container>
        <Styled.Text>You are not logged in.</Styled.Text>
        <Styled.TextLink to={Page.login}>Sign in</Styled.TextLink>
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      <Styled.Text>Welcome, dear {user}!</Styled.Text>
      <Button onClick={handleSignOut}>Sign out</Button>
    </Styled.Container>
  );
};
