import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Components
import MainHeader from "../../components/MainHeader";
import Content from "../../components/Content";
//Api
import api from "../../services/api";
//Styles
import {
  Container,
  Header,
  Button,
  Body,
  DataCustomer,
  ButtonEdit,
  ButtonDelete,
} from "./styles";
//Images
import appIconImg from "../../assets/images/appicon.svg";
import plusIconImg from "../../assets/images/plus.svg";
import deleteIconImg from "../../assets/images/delete.svg";
import editIconImg from "../../assets/images/edit.svg";

const ListCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api.get("http://localhost:3333/clientes").then((response) => {
      setCustomers(response.data);
    });
  }, [customers]);

  const handleDeleteButton = async (id, e) => {
    await axios.delete(`http://localhost:3333/clientes/cadastro/${id}`);
    console.log(`clicado ${id}`);
  };

  return (
    <Container>
      <MainHeader />
      <Content>
        <Header>
          <img src={appIconImg} alt="" />
          <input type="text" placeholder="Pesquisa" />
          <Link to="/clientes/cadastro">
            <Button>
              <img src={plusIconImg} alt="" />
            </Button>
          </Link>
        </Header>
        <Body>
          {customers.map((customer) => (
            <DataCustomer key={customer.id}>
              <h3>Nome: {customer.name}</h3>
              <h3>CEP: {customer.cep} </h3>
              <h3>Endereco: {customer.address} </h3>
              <h3>Bairro: {customer.district}</h3>
              <h3>Cidade: {customer.city}</h3>
              <h3>Uf: {customer.state}</h3>
              <h3>Telefone: {customer.phone}</h3>
              <h3>Email: {customer.email}</h3>
              <ButtonEdit>
                <img src={editIconImg} alt="Editar" />
              </ButtonEdit>
              <ButtonDelete onClick={(e) => handleDeleteButton(customer.id, e)}>
                <img src={deleteIconImg} alt="Deletar" />
              </ButtonDelete>
            </DataCustomer>
          ))}
        </Body>
      </Content>
    </Container>
  );
};
export default ListCustomers;
