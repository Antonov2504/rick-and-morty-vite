import { InputHTMLAttributes } from 'react';
import { SizeTypes, VariantTypes } from './CustomInput.types';

import * as Styled from './CustomInput.styled';

type CustomInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  variant?: VariantTypes;
  size?: SizeTypes;
  radius?: SizeTypes;
  withIcon?: boolean;
};

export const CustomInput = ({
  id,
  label,
  description,
  error,
  variant = 'default',
  size = 'sm',
  radius = 'sm',
  required,
  withIcon,
  ...inputProps
}: CustomInputProps) => {
  return (
    <Styled.Field
      $variant={variant}
      $size={size}
      $radius={radius}
      $hasError={!!error}
      $withIcon={!!withIcon}
    >
      {!!label && (
        <Styled.Label htmlFor={id} required={!!required}>
          {label}
        </Styled.Label>
      )}
      {!!description && <Styled.Description>{description}</Styled.Description>}
      <Styled.Wrapper>
        {withIcon && <Styled.Icon />}
        <Styled.Input id={id} {...inputProps} />
      </Styled.Wrapper>
      {!!error && <Styled.Error>{error}</Styled.Error>}
    </Styled.Field>
  );
};
