import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

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
  const theme = useTheme();

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
            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors.yellowDark }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors.baseText }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors.yellow }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors.purple }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </InfoHeaderContent>

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
