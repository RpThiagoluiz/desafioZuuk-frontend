import { useAuth } from "../../hooks/auth";

//Styles
import { Container, Message, Profile, Button } from "./styles";
//Image
import avatarImg from "../../assets/images/avatar.svg";
import logoutImg from "../../assets/images/logout.svg";
const MainHeader = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Message>Olá,</Message>
      <Profile>
        <img src={avatarImg} alt="Avatar" />
        <h2>Zukk</h2>
      </Profile>
      <Button onClick={signOut}>
        <img src={logoutImg} alt="Sair do App" />
        Sair
      </Button>
    </Container>
  );
};

export default MainHeader;
