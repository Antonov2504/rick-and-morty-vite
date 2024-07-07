import { ChangeEvent, FormEvent, useState } from 'react';

import { CustomInput } from '@components/CustomInput';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@src/contexts/AuthContextProvider';
import { Page } from '@constants/pages';
import { Button } from '@mantine/core';
import { SignupForm } from './RegisterPage.types';
import * as Styled from './RegisterPage.styled';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const { onSignUp } = useAuthContext();

  const [values, setValues] = useState<SignupForm>({
    username: '',
    password: '',
    repeatPassword: '',
  });

  const [errors, setErrors] = useState<SignupForm>({
    username: '',
    password: '',
    repeatPassword: '',
  });

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

    if (values.repeatPassword !== values.password) {
      setErrors((prevState) => ({
        ...prevState,
        password: 'The passwords entered do not match',
        repeatPassword: 'The passwords entered do not match',
      }));

      return;
    }

    onSignUp(values, () => {
      navigate(Page.login, {
        replace: true,
      });
    });
  };

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Title>Sign up</Styled.Title>
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

        <CustomInput
          id='repeatPassword'
          type='password'
          name='repeatPassword'
          label='Repeat password'
          size='xl'
          onChange={handleChange}
          value={values.repeatPassword}
          error={errors.repeatPassword}
          autoComplete='off'
          required
        />
        <Button type='submit' disabled={isSubmitDisabled}>
          Submit
        </Button>
        <Styled.Footer>
          <Styled.Text>Have an account?</Styled.Text>
          <Styled.Signup to={Page.login}>Sign in</Styled.Signup>
        </Styled.Footer>
      </Styled.Form>
      <Styled.Background />
    </Styled.Container>
  );
};
