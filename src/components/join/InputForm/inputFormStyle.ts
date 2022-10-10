import styled from "styled-components";

const LabelText = styled.label`
  margin-bottom: 10px;
  display: block;
  font-size: 1.6rem;
  line-height: 2rem;
  color: var(--color-darkGrey);
`;

const Input = styled.input<{ width: string; onIcon?: string; offIcon?: string }>`
  width: ${({ width }) => width};
  padding: 16px;
  font-size: 1.6rem;
  line-height: 2rem;
  border-radius: 5px;
  border: 1px solid var(--color-grey);
  outline-color: var(--color-main);
  &:invalid ~ small {
    display: block;
  }
  background: url(${({ onIcon }) => onIcon}) no-repeat right 15px center;
  &:invalid {
    background: url(${({ offIcon }) => offIcon}) no-repeat right 15px center;
  }
`;

const ErrorText = styled.small`
  display: none;
  margin: 6px 0 0 10px;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-red);
`;

const InputPhoneBox = styled.div`
  div {
    display: flex;
    gap: 12px;
  }
`;

const InputPhone = styled(Input)``;

const InputEmailBox = styled.div`
  span {
    margin: 0 11px;
    color: var(--color-darkGrey);
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

export { LabelText, ErrorText, Input, InputPhoneBox, InputPhone, InputEmailBox };
