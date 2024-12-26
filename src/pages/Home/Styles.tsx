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
  max-width: 1200px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 77px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const InfoHeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme.colors.baseTitle}
  }

  > span {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors.baseSubtitle};
    margin-bottom: 66px;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`;

export const CoffeeListContainer = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 45px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors.baseSubtitle}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`;
