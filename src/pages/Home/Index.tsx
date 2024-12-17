import {
  InfoContainer,
  Info,
  CoffeeListContainer,
  InfoContent,
  InfoHeaderContent,
} from "./Styles";

import homeBackgroundImage from "../../../public/assets/pages/home/home-container-background.svg";
import homeCoffeePrincipalImage from "../../../public/assets/pages/home/home-coffee-principal.svg";

export function Home() {
  return (
    <div>
      <InfoContainer>
        <InfoContent>
          <InfoHeaderContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </InfoHeaderContent>
          <div>
            <Info>Compra simples e segura</Info>
            <Info>Embalagem mantém o café intacto</Info>
            <Info>Entrega rápida e rastreada</Info>
            <Info>O café chega fresquinho até você</Info>
          </div>
          <img
            id="principal-img"
            src={homeCoffeePrincipalImage}
            alt="Café do Coffee Delivery"
          />
        </InfoContent>
        <img id="home-bg" src={homeBackgroundImage} />
      </InfoContainer>

      <CoffeeListContainer>
        <h2>Nossos Cafés</h2>
        <div>
          <div>Expresso Tradicional</div>
          <div>Expresso Americano</div>
        </div>
      </CoffeeListContainer>
    </div>
  );
}
