import { ChangeEvent, FormEvent, useState } from 'react';

import { CustomInput } from '@components/CustomInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '@src/contexts/AuthContextProvider';
import { UserData } from '@src/types';
import { Page } from '@constants/pages';
import { Button } from '@mantine/core';
import { SigninForm } from './LoginPage.types';
import * as Styled from './LoginPage.styled';

export const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { onSignIn } = useAuthContext();

  const [values, setValues] = useState<SigninForm>({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState<SigninForm>({
    username: '',
    password: '',
  });

  const from = location.state?.from || '/';

  const isSubmitDisabled = !Object.values(values)
    .map((value) => value.trim())
    .every(Boolean);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users: Record<string, UserData> =
      JSON.parse(localStorage.getItem('users') as string) || null;
    console.log({ users });
    const user = users?.[values.username];

    if (!user || user.password !== values.password) {
      setErrors({
        username: ' ',
        password: 'Wrong login or password',
      });

      return;
    }

    onSignIn(values.username, () => {
      navigate(from, {
        replace: true,
      });
    });
  };

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Title>Sign in</Styled.Title>
        <CustomInput
          type='text'
          id='username'
          name='username'
          label='Login'
          size='xl'
          value={values.username}
          onChange={handleChange}
          error={errors.username}
          autoComplete='off'
          required
        />

        <CustomInput
          id='password'
          type='password'
          name='password'
          label='Password'
          size='xl'
          onChange={handleChange}
          value={values.password}
          error={errors.password}
          autoComplete='off'
          required
        />
        <Button type='submit' disabled={isSubmitDisabled}>
          Submit
        </Button>
        <Styled.Footer>
          <Styled.Text>Do not have an account?</Styled.Text>
          <Styled.Signup to={Page.register}>Sign up</Styled.Signup>
        </Styled.Footer>
      </Styled.Form>
      <Styled.Background />
    </Styled.Container>
  );
};
