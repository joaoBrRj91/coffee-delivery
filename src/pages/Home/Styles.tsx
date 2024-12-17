import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const InfoContainer = styled.section`
  position: relative;
  img#home-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`;

export const InfoContent = styled.div`
  max-width: 1440px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 77px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const InfoHeaderContent = styled.div``;

export const Info = styled.div``;

export const CoffeeListContainer = styled.section``;
