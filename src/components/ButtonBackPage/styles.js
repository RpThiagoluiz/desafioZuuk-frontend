import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 105px;
  left: 20px;

  width: 56px;
  height: 56px;

  padding: 12px;

  border-radius: 50%;

  background-color: #fe8a71;

  transition: all ease-in 0.3s;

  &:hover {
    background-color: #fe8a61;
    padding: 8px;
  }
`;
