import styled from 'styled-components';

export const MenuIcon = styled.div`
  position: relative;
  z-index: 999;
`;
export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity 0.5s linear;
  z-index: 988;
`;

export const ItemsMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  padding: 5px;

  a {
    text-decoration: none;

    &:hover {
      color: #f2f2f2;
    }
  }
`;
