import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 14px 9px;
  border: 0;
  border-radius: 4px;
  background: #000;
  color: #fff;
  margin-top: 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 16px;

  .primary {
    color: #fff;
  }

  &:hover {
    opacity: 0.85;
  }
`;

type Props = {
  type: 'button' | 'reset' | 'submit' | undefined;
  text: string;
  variant: 'primary' | 'secondary';
};

export default function Button({ type, text, variant }: Props) {
  return (
    <StyledButton type={type} className={variant}>
      {text}
    </StyledButton>
  );
}
