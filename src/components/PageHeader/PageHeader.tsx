import { SortTypes } from '@src/types';
import { PrimaryButton } from '@components/PrimaryButton';
import * as Styled from './PageHeader.styled';

type PageHeaderProps = {
  title: string;
  showBackButton?: boolean;
  onClickBack?: () => void;
  sortButton?: {
    currentSort: SortTypes;
    onSort: () => void;
  };
};

export const PageHeader = ({
  title,
  showBackButton = false,
  onClickBack = () => undefined,
  sortButton,
}: PageHeaderProps) => {
  return (
    <Styled.Container>
      <Styled.Side>
        {showBackButton && (
          <Styled.BackButton onClick={onClickBack}>
            <Styled.BackIcon />
          </Styled.BackButton>
        )}

        <Styled.Title>{title}</Styled.Title>
      </Styled.Side>
      {sortButton && (
        <Styled.Side>
          <Styled.Label>Sort:</Styled.Label>
          <PrimaryButton title={sortButton.currentSort ?? 'default'} onClick={sortButton.onSort} />
        </Styled.Side>
      )}
    </Styled.Container>
  );
};
