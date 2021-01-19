//Styles
import { Container, Logo, Form, FormTitle, Input, Button } from "./styles";
//Image
import appIcon from "../../assets/images/appicon.svg";

const SingIn = () => (
  <Container>
    <Logo>
      <img src={appIcon} alt="" />
      <h1>Desafio Zukk frontend</h1>
    </Logo>
    <Form>
      <FormTitle>Entrar no App</FormTitle>
      <Input type="text" placeholder="Usuário"></Input>
      <Input type="text" placeholder="Senha"></Input>
      <Button type="submit">Acessar</Button>
    </Form>
  </Container>
);
export default SingIn;
