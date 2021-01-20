import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 150px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
  min-height: 450px;

  padding: 20px;

  border-radius: 12px;

  background-color: #4a4e4d;
`;

export const FormTitle = styled.h2`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;

  margin-bottom: 20px;

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

  margin: 7px 0;
  padding: 10px;

  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;

  margin: 25px 0;
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
