import * as Styled from './PrimaryButton.styled';

type PrimaryButtonProps = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export const PrimaryButton = ({
  type = 'button',
  title,
  onClick = () => undefined,
  disabled,
}: PrimaryButtonProps) => {
  return (
    <Styled.Button type={type} onClick={onClick} disabled={disabled}>
      {title}
    </Styled.Button>
  );
};
