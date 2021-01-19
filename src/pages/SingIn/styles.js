import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fe8a71;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;

  > h1 {
    color: #fff;
    margin-left: 7px;
  }

  > img {
    width: 42px;
    height: 42px;

    margin-top: -10px;
  }
`;
export const Form = styled.form`
  width: 300px;
  height: 300px;

  padding: 30px;
  border-radius: 10px;
  background-color: #4a4e4d;

  box-shadow: 3px 3px 10px black;
`;
export const FormTitle = styled.h2`
  text-align: center;
  color: #fff;

  margin-bottom: 40px;

  &:after {
    content: "";
    display: block;
    width: 100%;
    margin: 2px auto;
    border-bottom: 2px solid #fe8a71;
  }
`;

export const Input = styled.input`
  width: 100%;

  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
`;
export const Button = styled.button`
  width: 100%;

  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;

  background-color: #8bc92d;

  text-transform: uppercase;
  font-weight: bold;

  opacity: 0.7;
  transition: opacity ease-in 0.3s;

  &:hover {
    opacity: 1;
  }
`;
