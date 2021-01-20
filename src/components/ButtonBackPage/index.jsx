import { useHistory } from "react-router-dom";
//Styles
import { Button } from "./styles";
//Image
import backButtonImg from "../../assets/images/back.svg";

const ButtonBackPage = () => {
  const { goBack } = useHistory();
  return (
    <Button onClick={goBack}>
      <img src={backButtonImg} alt="Voltar para pagina anterior" />
    </Button>
  );
};

export default ButtonBackPage;
