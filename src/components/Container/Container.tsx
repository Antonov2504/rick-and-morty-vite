import { MutableRefObject, ReactNode } from 'react';

import { LoadingOverlay } from '@mantine/core';
import * as Styled from './Container.styled';

type ContainerProps = {
  children: ReactNode;
  isLoading?: boolean;
  innerRef?: MutableRefObject<HTMLDivElement | null>;
};

export const Container = ({ isLoading, children, innerRef }: ContainerProps) => {
  if (isLoading) {
    return <LoadingOverlay visible zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />;
  }

  return <Styled.Container ref={innerRef}>{children}</Styled.Container>;
};
