import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
//Components
import ButtonBackPage from "../../components/ButtonBackPage";
import MainHeader from "../../components/MainHeader";

//Styles
import { Container, Form, FormTitle, Input, Button } from "./styles";

const RegisterCustomers = () => {
  const history = useHistory();

  const [name, setName] = useState();
  const [cep, setCep] = useState();
  const [address, setAddress] = useState();
  const [district, setDistrict] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    let validCep = /^[0-9]{8}$/;
    if (cep !== "" && validCep.test(cep)) {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(
          (response) => (
            console.log(response.data),
            setAddress(response.data.logradouro),
            setDistrict(response.data.bairro),
            setCity(response.data.localidade),
            setState(response.data.uf)
          )
        )
        .catch((err) => (alert(`Cep invalido ${err}`), setCep()));
    }
  }, [cep]);

  const handleCEP = (e) => {
    setCep(e.target.value);
    setAddress("...");
    setDistrict("...");
    setCity("...");
    setState("...");
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    console.log(name, cep, address, district, city, state, phone, email);
    await axios.post("http://localhost:3333/clientes/cadastro", {
      name: name,
      cep: cep,
      address: address,
      district: district,
      city: city,
      state: state,
      phone: phone,
      email: email,
    });
    alert("Cadastro realizado com sucesso!");
    history.push("/");
  };

  return (
    <>
      <MainHeader />
      <Container>
        <ButtonBackPage />
        <Form onSubmit={handleSubmitForm}>
          <FormTitle>Cadastro</FormTitle>
          <Input
            required
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            required
            type="number"
            placeholder="CEP"
            value={cep}
            onChange={handleCEP}
          />
          <Input
            required
            type="text"
            placeholder="Endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            required
            type="text"
            placeholder="Bairro"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <Input
            required
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            required
            type="text"
            placeholder="UF"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <Input
            required
            type="tel"
            placeholder="(99) 9999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            required
            type="e-mail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Enviar Dados</Button>
        </Form>
      </Container>
    </>
  );
};
export default RegisterCustomers;
