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

export const Body = styled.body`
  margin: 50px;
`;

export const DataCustomer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: left;

  color: #4a4e4d;
  padding: 5px;
  margin: 25px;

  > h3 {
    padding: 10px;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    margin: 2px auto;
    border-bottom: 2px solid #fe8a71;
  }
`;

export const ButtonEdit = styled.button`
  width: 36px;
  height: 36px;

  border-radius: 5px;
  padding: 2px;
  background-color: #00b712;
  background-image: linear-gradient(315deg, #00b712 0%, #5aff15 74%);

  opacity: 0.5;
  transition: opacity ease-in 0.2s;
  > img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 1;
  }
`;
export const ButtonDelete = styled.button`
  width: 36px;
  height: 36px;

  border-radius: 5px;
  padding: 2px;
  background-color: #f7b42c;
  background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);

  opacity: 0.5;
  transition: opacity ease-in 0.2s;

  > img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 1;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 100%;

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
