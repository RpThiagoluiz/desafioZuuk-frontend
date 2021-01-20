import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 90px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0 10px;

  background-color: #fe8a71;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    margin-top: -10px;
    margin-right: 5px;
    width: 32px;
    height: 32px;
  }
  > h2 {
  }
`;
export const Message = styled.h2`
  font-size: 36px;
  margin: 0 25px;
`;

export const Button = styled.button`
  position: absolute;
  right: 40px;

  display: flex;
  align-items: center;

  border: none;
  background: none;

  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  color: #000;

  opacity: 0.7;
  transition: all ease-in 0.5s;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }

  > img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;
