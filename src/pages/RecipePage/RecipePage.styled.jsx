import styled from 'styled-components';
import theme from '../../style/generalStyle';

export const ContanerRecipeList = styled.div`
 display:inline-block
 text-align; center; 
  width: 375px;
  padding: 0 8px 50px 8px;
  @media ${theme.device.tablet} {
    width: 768px;
  }
  @media ${theme.device.desktop} {
    width: 1441px;
  } ;
`;

export const Tabl = styled.div``;

export const TitltListWrap = styled.div`
  display: flex;
  width: 357px;
  background: #8baa36;
  border-radius: 8px;
  padding: 10px;
  color: #fafafa;
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 24px;

  @media ${theme.device.tablet} {
    width: 734px;
    font-size: 18px;
    line-height: 27px;
    padding: 20px;
    margin-bottom: 23px;
  }
  @media ${theme.device.desktop} {
    width: 1240px;
    padding: 21px 40px;
    margin-bottom: 50px;
  } ;
`;

export const TitleListIngredient = styled.span`
  margin-right: auto;
`;

export const TitleListNumber = styled.span`
  margin-right: 24px;

  @media ${theme.device.tablet} {
    margin-right: 78px;
  }

  @media ${theme.device.desktop} {
    margin-right: 124px;
  }
`;
