import styled from "styled-components";

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;

  padding: 5px 10px;
  width: 270px;
  height: 30px;
  border-radius: 15px;

  .input__icon {
    font-size: 16px;
    margin-right: 8px;
  }

  .input__field {
    border: none;
    background: none;
    outline: none;
    width: 100%;
    color: #555;
    font-size: 14px;
  }

  .input__field::placeholder {
    color: #777;
    font-style: italic;
  }
`;
