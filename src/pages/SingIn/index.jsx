import { useState } from "react";

//
import { useAuth } from "../../hooks/auth";
//Styles
import { Container, Logo, Form, FormTitle, Input, Button } from "./styles";
//Image
import appIcon from "../../assets/images/appicon.svg";

const SingIn = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { singIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={appIcon} alt="" />
        <h1>Desafio Zukk frontend</h1>
      </Logo>
      <Form onSubmit={() => singIn(user, pass)}>
        <FormTitle>Entrar no App</FormTitle>
        <Input
          required
          type="text"
          placeholder="Usuário"
          onChange={(e) => setUser(e.target.value)}
        ></Input>
        <Input
          required
          type="password"
          placeholder="Senha"
          onChange={(e) => setPass(e.target.value)}
        ></Input>
        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default SingIn;
