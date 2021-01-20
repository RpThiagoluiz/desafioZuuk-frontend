import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  background-color: #4a4e4d;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;

  margin-top: 15px;

  > img {
    width: 36px;
    height: 36px;
  }

  > input {
    width: 50%;
    height: 38px;
    padding: 5px;

    background-color: #4a4e4d;
    color: #fff;

    border-radius: 5px;
  }
`;

export const Button = styled.button`
  width: 120px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #4a4e4d;
  color: #fff;

  border-radius: 5px;
  padding: 2px;
  z-index: 10;

  img {
    width: 22px;
    height: 22px;
  }
`;
