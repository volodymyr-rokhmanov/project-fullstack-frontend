import styled from 'styled-components';
import search_mob from '../../images/mainPagePhoto/search_mob_opt.png';
import search_tabl from '../../images/mainPagePhoto/search_tabl_opt.png';
import theme from '../../style/generalStyle';
// import theme from '../../style/generalStyle';
// export const GridContainer = styled.div`
//   width: 100%;
//   display: grid;
//   /* grid-template-columns: repeat(auto-fit, 343px); */
//   gap: 28px;
//   padding-top: 42px;
//   padding-bottom: 40px;
// `;
export const GridContainer = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 28px;
  /* padding-bottom: 40px; */
  @media ${theme.device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    /* padding-bottom: 50px; */
  }

  @media ${theme.device.desktop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    grid-column-gap: 13px;
    grid-row-gap: 100px;
  }
`;

export const SRLNoItems = styled.div`
  display: flex;
  margin: 0 auto;

  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    width: 228px;
    height: 180px;
    background-image: url('${search_mob}');
    background-position: center top 10px;
    background-size: 208px;
  }
  @media ${theme.device.tablet} {
    width: 380px;
    height: 320px;
    background-image: url('${search_tabl}');
    background-position: center top 15px;
    background-size: 350px;
  }

  @media ${theme.device.desktop} {
  }
`;
export const SRLNoItemsText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;

  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.color.searchPage.SRLNoItemsText};
  opacity: 0.5;
  margin-left: 10px;
  @media screen and (max-width: 767px) {
    margin-top: 160px;
    font-size: 14px;
  }
  @media ${theme.device.tablet} {
    font-size: 24px;
    margin-top: 266px;
  }

  @media ${theme.device.desktop} {
  }
`;

export const ErrorComponent = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;

  line-height: 1;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;
  margin-left: 10px;
  @media screen and (max-width: 767px) {
    margin-top: 160px;
    font-size: 14px;
  }
  @media ${theme.device.tablet} {
    font-size: 24px;
    margin-top: 266px;
  }

  @media ${theme.device.desktop} {
  }
`;

export const imgNoItems = styled.div`
  width: 380px;
  height: 291px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  @media ${theme.device.tablet} {
    margin-top: 50px;
  }
`;
