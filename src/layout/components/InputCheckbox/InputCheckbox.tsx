import styled from 'styled-components';

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
`;

type Props = {
  text: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputCheckbox({ text, name, handleChange }: Props) {
  return (
    <>
      <StyledCheckbox className="action__forgot">
        <input
          id="remember"
          type="checkbox"
          name={name}
          onChange={handleChange}
        />
        <label htmlFor="remember">{text}</label>
      </StyledCheckbox>
    </>
  );
}
