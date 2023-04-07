import styled from 'styled-components';
//------------------------
export const SearchesForm = styled.form`
  display: flex;
  width: fit-content;
  position: relative;
  /* margin: 0 auto;
  justify-content: center;
  align-items: center; */
  margin-bottom: ${props => (props.marginBottom ? '24px' : 0)};
  /* margin-top: ${props => (props.marginTop ? '650px' : 0)}; */
  @media screen and (max-width: 767px) {
    margin: ${props => props.page === 'main' && '0px auto'};
  }
  @media screen and (min-width: 768px) {
    margin-left: ${props => props.page === 'main' && '32px'};
  }
  @media screen and (min-width: 1240px) {
    margin-left: ${props => props.page === 'main' && '100px'};
  }
  /* margin-top: 0px; */
`;

export const SearchInput = styled.input`
  background-color: #fafafa;
  border: none;
  outline: none;
  /* Secondary/Secondary1 */
  border-radius: 24px 44px;
  border: 1px solid #f0f0f0;
  height: 52px;
  /* width: 295px; */
  width: ${props => (props.page === 'main' ? '295px' : '283px')};
  padding-left: 17px;
  @media screen and (min-width: 768px) {
    width: ${props => props.page === 'main' && '330px'};
    height: ${props => props.page === 'main' && '59px'};
    font-size: ${props => props.page === 'main' && '16px'};
    padding-left: ${props => props.page === 'main' && '38px'};
  }
  @media screen and (min-width: 1240px) {
    width: ${props => props.page === 'main' && '465px'};
    height: ${props => props.page === 'main' && '70px'};
  }

  ::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: #bdbdbd;
    @media screen and (min-width: 768px) {
      font-size: ${props => props.page === 'main' && '16px'};
    }
  }
  /* ::placeholder {
    font: inherit;
    font-size: 18px;
  } */
`;
export const SearchBtn = styled.button`
  position: absolute;
  right: 0;
  width: 113px;
  height: 56px;
  /* border-color: transparent; */
  border-radius: 24px 44px;
  /* border: 1px solid rgba(34, 37, 42, 1); */
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  background-color: ${props => (props.green ? '#8BAA36' : '#22252a')};
  border: ${props => (props.green ? '1px solid #8BAA36' : '1px solid #22252a')};
  @media screen and (max-width: 767px) {
    width: ${props => props.page === 'main' && '113px'};
  }
  @media screen and (min-width: 768px) {
    width: ${props => props.page === 'main' && '161px'};
    height: ${props => props.page === 'main' && '59px'};
    font-size: ${props => props.page === 'main' && '16px'};
  }
  @media screen and (min-width: 1240px) {
    width: ${props => props.page === 'main' && '161px'};
    height: ${props => props.page === 'main' && '75px'};
    font-size: ${props => props.page === 'main' && '16px'};
  }
`;
