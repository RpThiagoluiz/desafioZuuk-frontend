import { useState } from "react";
//Components
import ButtonBackPage from "../../components/ButtonBackPage";
import MainHeader from "../../components/MainHeader";

//Styles
import { Container, Form, FormTitle, Input, Button } from "./styles";

const RegisterCustomers = () => {
  const [name, setName] = useState();
  const [cep, setCep] = useState();
  const [address, setAddress] = useState();
  const [district, setDistrict] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  return (
    <>
      <MainHeader />
      <Container>
        <ButtonBackPage />
        <Form onSubmit={() => console.log(`HEyyy`)}>
          <FormTitle>Cadastro</FormTitle>
          <Input required type="text" placeholder="Nome" />
          <Input required type="number" placeholder="CEP" />
          <Input required type="text" placeholder="Endereço" />
          <Input required type="text" placeholder="Bairro" />
          <Input required type="text" placeholder="Cidade" />
          <Input required type="text" placeholder="UF" />
          <Input required type="phone" placeholder="Telefone" />
          <Input required type="e-mail" placeholder="Email" />
          <Button type="submit">Enviar Dados</Button>
        </Form>
      </Container>
    </>
  );
};
export default RegisterCustomers;
