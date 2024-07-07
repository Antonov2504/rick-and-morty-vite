import { ErrorMockType, ErrorPageDescriptionEnum } from './ErrorPage.types';

export const errorsMock: ErrorMockType = {
  [ErrorPageDescriptionEnum.notFound]: {
    code: '404',
    title: 'Page Not Found',
  },
  [ErrorPageDescriptionEnum.forbidden]: {
    code: '403',
    title: 'Forbidden',
  },
};
