import { Link } from "react-router-dom";
import { ShoppingCart, MapPin } from "@phosphor-icons/react";

import { HeaderContainer, Aside } from "./Styles";
import logoCoffeDelivery from "../../../public/logo.svg";

interface Product {
  name: string;
  value: number;
}

const cart: Product[] = [{ name: "Latte", value: 120.42 }];

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffeDelivery} alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Estado, (UF)</span>
        </div>

        <Link to="/" aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </Aside>
    </HeaderContainer>
  );
}
