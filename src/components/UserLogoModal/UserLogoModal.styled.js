import styled from 'styled-components';

export const UserLogoPopup = styled.div`
  cursor: auto;
  position: absolute;
  top: 70px;
  right: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 18px;

  background: #fafafa;
  position: fixed;
  z-index: 20;
  border: 1px solid #8baa36;
  border-radius: 8px;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    border: none;
    background-color: transparent;
  }

  button:first-child {
    gap: 38px;
    margin-bottom: 28px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    line-height: 22px;

    color: #23262a;
  }
  button:last-child {
    gap: 6px;
    font-size: 14px;
    padding: 12px 26px;
    border-radius: 24px 44px;
    border: 1px solid rgb(250, 250, 250);
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    background-color: #8baa36;
    line-height: 21px;

    color: #fafafa;
  }
`;