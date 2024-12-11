import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 1440px;
  padding: 32px 25px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Aside = styled.aside`
  display: flex;
  gap: 15px;

  div {
    padding: 10px 8px;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 3px;

    background-color: ${({ theme }) => theme.colors.purpleLight};

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    span {
      color: ${({ theme }) => theme.colors.purpleDark};
    }
  }

  a {
    padding: 6px;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 3px;

    background-color: ${({ theme }) => theme.colors.yellowLight};
    color: ${({ theme }) => theme.colors.yellowDark};

    &[aria-disabled="true"] {
      pointer-events: none;
    }

    span {
    }
  }
`;
