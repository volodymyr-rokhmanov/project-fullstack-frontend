import styled from 'styled-components';
import theme from 'style/generalStyle';

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  height: 80px;
  z-index: 30;
  width: 100vw;
`;

export const HeaderBox = styled.header`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;

  @media ${theme.device.mobail} {
    width: 343px;
  }
  @media ${theme.device.tablet} {
    width: 704px;
  }
  @media ${theme.device.desktop} {
    width: 1240px;
  }
`;
