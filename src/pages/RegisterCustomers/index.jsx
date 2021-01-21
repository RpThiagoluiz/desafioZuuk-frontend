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
        <Form
          onSubmit={console.log(
            name,
            cep,
            address,
            district,
            city,
            state,
            phone,
            email
          )}
        >
          <FormTitle>Cadastro</FormTitle>
          <Input
            required
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            required
            type="number"
            placeholder="CEP"
            onChange={(e) => setCep(e.target.value)}
          />
          <Input
            required
            type="text"
            placeholder="Endereço"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            required
            type="text"
            placeholder="Bairro"
            onChange={(e) => setDistrict(e.target.value)}
          />
          <Input
            required
            type="text"
            placeholder="Cidade"
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            required
            type="text"
            placeholder="UF"
            onChange={(e) => setState(e.target.value)}
          />
          <Input
            required
            type="phone"
            placeholder="Telefone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            required
            type="e-mail"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Enviar Dados</Button>
        </Form>
      </Container>
    </>
  );
};
export default RegisterCustomers;
