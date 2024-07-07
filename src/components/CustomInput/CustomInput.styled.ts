import styled, { css } from 'styled-components';
import IconSVG from '@src/assets/icons/icon-at.svg?react';
import { SizeTypes, VariantTypes } from './CustomInput.types';

export const Label = styled.label<{ required: boolean }>`
  color: inherit;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.55;

  ${({ required }) => {
    if (required) {
      return css`
        &::after {
          content: '*';
          color: red;
          position: relative;
          left: 4px;
        }
      `;
    }

    return null;
  }}
`;

export const Description = styled.p`
  margin: 0;
  color: #868e96;
  font-size: 12px;
  line-height: 1.2;
`;

export const Error = styled(Description)`
  color: red;
`;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Icon = styled(IconSVG)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 9px;
  margin: auto;
`;

export const Input = styled.input`
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  resize: none;
  display: block;
  width: 100%;
  transition: border-color 0.3s ease-in-out;
  text-align: left;
  color: inherit;
  font-family: inherit;
  height: 36px;
  font-size: 14px;
  line-height: 2.43;
  border-radius: 4px;
  padding: 0;
  cursor: text;
  box-sizing: border-box;

  &::placeholder {
    color: #adb5bd;
  }

  &:focus {
    color: inherit;
    outline: none;
    border-color: transparent;
  }
`;

export const Field = styled.div<{
  $variant: VariantTypes;
  $size: SizeTypes;
  $radius: SizeTypes;
  $hasError: boolean;
  $withIcon: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
  color: #54aa59;

  ${Icon} {
    path {
      stroke: ${({ $hasError }) => ($hasError ? 'red' : '#ced4da')};
    }
  }

  ${Input} {
    color: ${({ $hasError }) => ($hasError ? 'red' : 'inherit')};

    &:focus {
      color: inherit;
      outline: none;
      border-color: ${({ $variant }) => ($variant === 'unstyled' ? 'transparent' : '#228be6')};
    }

    ${({ $variant, $hasError }) => {
      switch ($variant) {
        case 'filled':
          return css`
            border: 1px solid ${() => ($hasError ? 'red' : '#f1f3f5')};
            background-color: #f1f3f5;
          `;
        case 'unstyled':
          return css`
            border: 1px solid transparent;
            background-color: transparent;
          `;
        case 'default':
        default:
          return css`
            border: 1px solid ${() => ($hasError ? 'red' : '#ced4da')};
            background-color: #ffffff;
          `;
      }
    }}

    &:disabled {
      color: #868e96;
      background-color: #f1f3f5;
      cursor: not-allowed;
    }
  }

  ${({ $variant, $size }) => {
    switch ($size) {
      case 'xs':
        return css`
          ${Label}, ${Input} {
            font-size: 12px;
          }
          ${Description} {
            font-size: 10px;
          }
          ${Input} {
            height: 30px;
            padding: 0 ${() => ($variant === 'unstyled' ? 0 : '10px')};
          }
        `;
      case 'md':
        return css`
          ${Label}, ${Input} {
            font-size: 16px;
          }
          ${Description} {
            font-size: 14px;
          }
          ${Input} {
            height: 42px;
            padding: 0 ${() => ($variant === 'unstyled' ? 0 : '14px')};
          }
        `;
      case 'lg':
        return css`
          ${Label}, ${Input} {
            font-size: 18px;
          }
          ${Description} {
            font-size: 16px;
          }
          ${Input} {
            height: 50px;
            padding: 0 ${() => ($variant === 'unstyled' ? 0 : '16px')};
          }
        `;
      case 'xl':
        return css`
          ${Label}, ${Input} {
            font-size: 20px;
          }
          ${Description} {
            font-size: 18px;
          }
          ${Input} {
            height: 60px;
            padding: 0 ${() => ($variant === 'unstyled' ? 0 : '20px')};
          }
        `;
      case 'sm':
      default:
        return css`
          ${Label}, input {
            font-size: 14px;
          }
          ${Description} {
            font-size: 12px;
          }
          ${Input} {
            height: 36px;
            padding: 0 ${() => ($variant === 'unstyled' ? 0 : '12px')};
          }
        `;
    }
  }}

  ${({ $radius }) => {
    switch ($radius) {
      case 'xs':
        return css`
          ${Input} {
            border-radius: 2px;
          }
        `;
      case 'md':
        return css`
          ${Input} {
            border-radius: 8px;
          }
        `;
      case 'lg':
        return css`
          ${Input} {
            border-radius: 16px;
          }
        `;
      case 'xl':
        return css`
          ${Input} {
            border-radius: 32px;
          }
        `;
      case 'sm':
      default:
        return css`
          ${Input} {
            border-radius: 4px;
          }
        `;
    }
  }}

  ${({ $withIcon }) => {
    if ($withIcon) {
      return css`
        ${Input} {
          padding-left: 34px;
        }
      `;
    }

    return null;
  }}
`;
