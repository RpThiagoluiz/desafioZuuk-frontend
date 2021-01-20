import { Link } from "react-router-dom";

//Components
import MainHeader from "../../components/MainHeader";
import Content from "../../components/Content";
//Styles
import { Container, Header, Button } from "./styles";

//Images
import appIconImg from "../../assets/images/appicon.svg";
import plusIconImg from "../../assets/images/plus.svg";

const ListCustomers = () => {
  return (
    <Container>
      <MainHeader />
      <Content>
        <Header>
          <img src={appIconImg} alt="" />
          <input type="text" placeholder="Pesquisa" />
          <Button>
            <Link to="/clientes/cadastro">
              <img src={plusIconImg} alt="" />
            </Link>
          </Button>
        </Header>
      </Content>
    </Container>
  );
};
export default ListCustomers;
