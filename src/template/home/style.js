import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90vh;

  h1 {
    font-size: 3rem;
  }

  @media (max-width: 786px) {
    justify-content: center;
    flex-wrap: wrap;

    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;
