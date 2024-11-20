import { HeaderContainer } from "./Styles";
import  logoCoffeDelivery  from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffeDelivery} alt="" />
            <nav>
                <span><ShoppingCart size={22} /></span>
                <span><MapPin size={22} /></span>
            </nav>
        </HeaderContainer>
    )
}