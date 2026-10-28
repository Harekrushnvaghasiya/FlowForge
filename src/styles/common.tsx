import styled from "styled-components";


export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-inline: var(--spacing-72);
  @media (max-width: 1179px) {
    padding-inline: var(--spacing-24);
  }
  @media (max-width: 767px) {
    padding-inline: var(--spacing-20);
  }
`;
