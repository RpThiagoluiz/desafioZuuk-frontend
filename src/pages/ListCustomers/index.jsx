//Components
import MainHeader from "../../components/MainHeader";
import Content from "../../components/Content";
//Styles
import { Container, Header } from "./styles";

const ListCustomers = () => {
  return (
    <Container>
      <MainHeader />
      <Content>
        <Header>
          <input type="text" placeholder="Pesquisa" />
          <button>Cadastrar</button>
        </Header>
      </Content>
    </Container>
  );
};
export default ListCustomers;
