import styled from 'styled-components';

const StyledInputText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 600;
  }

  input {
    padding: 10px;
    border: 1px solid #eee;
    font-size: 16px;
    border-radius: 4px;
  }
`;

type InputProps = {
  name: string;
  text: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputText({
  name,
  text,
  handleChange,
  placeholder,
}: InputProps) {
  return (
    <StyledInputText>
      <label htmlFor={name}>{text}</label>
      <input
        type="text"
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </StyledInputText>
  );
}
