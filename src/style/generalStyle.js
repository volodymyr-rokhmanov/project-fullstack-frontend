export const theme = {
  device: {
    mobail: 'screen and (min-width: 375px)',
    tablet: 'screen and (min-width: 768px)',
    desktop: 'screen and (min-width: 1304px)',
  },

  // ${props => props.theme.color.footer.bavkgroundFooter}

  dark: {
    color: {
      primary: '#22252A',
      secondary: '#8BAA36',

      // background
      backgrounGlobal: '#1E1F28',

      header: {
        headerContainer: '#1E1F28',
        backgroun: '#1E1F28',
        textNavigation: '#FAFAFA',
      },

      mainPage: {
        mpHeroTitle: '#FAFAFA',
        mpHeroText: '#FAFAFA',
        mpHeroProductColor: '#FAFAFA',
        mpHeroProductBackground: '#2A2C36',
        recipeCategoryName: '#FAFAFA',
        mpButton: '#FAFAFA',
        searchBtn: '#8BAA36',
        searchBtnFocus: '#fafafa',
        searchInputBorder: 'rgba(250, 250, 250, 0.5)',
        searchInputHover: 'rgba(250, 250, 250)',
        searchInputBG: '#1E1F28',
        searchInputColor: '#FAFAFA',
        searchInputPlaceholder: 'rgba(250, 250, 250, 0.5)',
        searchBtncolorFocus: '#22252A',
      },
      dishCard: { dishTitleWrapper: '#2A2C36', dishTitle: '#FAFAFA' },
      searchPage: {
        searchTypeSpan: '#FAFAFA',
        customSelectBG: 'transparent',
        customSelectColor: '#FAFAFA',
        reactSelectMenuList: '#8BAA36',
        reactSelectOptionColor: 'rgba(250, 250, 250, 0.8)',
        reactSelectOptionHover: 'rgba(250, 250, 250)',
        SRLNoItemsText: '#FAFAFA',
        //-------------
        reactSelectContainer: '#ececec',
        reactSelectDropdown: '#8baa36',

        reactSelectOptionColorBG: 'transparent',
      },
      mainPageTitle: {
        colorTitle: '#FAFAFA',
      },

      favorit: {
        cardWrapper: '#2A2C36',
        cardTitle: '#FAFAFA',
        cardDescription: 'rgba(250, 250, 250, 0.6)',
        cardTime: '#FAFAFA',
        cardButtonSee: '#8BAA36',
        cardButtonSeeBorder: '#8BAA36',
        cardButtonSeeHover: '#22252A',
        cardButtonDelete: '#1E1F28',
        cardButtonDeleteHoverBackground: '#EBF3D4',
        cardButtonDeleteBorder: '#1E1F28',
        cardIconStroke: '#fafafa',
        cardIconStrokeHover: '#22252a',
        cardIconFill: '#1E1F28',
        cardIconFillHover: '#EBF3D4',
      },

      shoppingList: {
        colorImageContainer: '#2A2C36',
        borderItemContainer: 'rgba(250, 250, 250, 0.3)',
        titleProduct: '#FAFAFA',
        strokeRemoveSvg: '#FAFAFA',
        ImgIngradientsText: ' #FAFAFA',
      },

      footer: {
        bavkgroundFooter: '#8BAA36',
      },
    },
  },

  white: {
    color: {
      primary: '#8BAA36',
      secondary: '#22252A',

      // background
      backgrounGlobal: '#FFFFFF',

      header: {
        headerContainer: 'rgb(255, 255, 255)',
        backgroun: '#FAFAFA',
        textNavigation: '#23262A',
      },

      mainPage: {
        mpHeroTitle: '#22252a',
        mpHeroText: '#23262a',
        mpHeroProductColor: '#3E4462',
        mpHeroProductBackground: '#ffffff',
        recipeCategoryName: '#001833',
        mpButton: '#22252a',
        searchBtn: '#22252A',
        searchBtnFocus: '#8BAA36',
        searchInputBorder: '#F0F0F0',
        searchInputHover: '#dfdfdf',
        searchInputBG: '#fafafa',
        searchInputColor: 'rgb(62, 68, 98)',
        searchInputPlaceholder: '#3e4462',
        searchBtncolorFocus: '#fafafa',
      },
      dishCard: { dishTitleWrapper: '#ffffff', dishTitle: '#3e4462' },
      searchPage: {
        searchTypeSpan: '#001833',
        customSelectBG: '#ececec', //#D9D9D9
        customSelectColor: '#000000',
        reactSelectMenuList: '#FAFAFA',
        reactSelectOptionColor: 'rgba(0, 0, 0, 0.5)',
        reactSelectOptionHover: '#000000',
        //-------------
        SRLNoItemsText: '#000000',
        reactSelectContainer: '#ececec',
        reactSelectDropdown: '#8baa36',

        reactSelectOptionColorBG: 'transparent',
      },

      mainPageTitle: {
        colorTitle: '#001833',
      },

      favorit: {
        cardWrapper: '#FFFFFF',
        cardTitle: '#3e4462',
        cardDescription: '#23262A',
        cardTime: '#3e4462',
        cardButtonSee: '#22252A',
        cardButtonSeeBorder: 'rgb(250, 250, 250)',
        cardButtonSeeHover: '#8BAA36',
        cardButtonDelete: '#ebf3d4',
        cardButtonDeleteHoverBackground: '#1e1f28',
        cardButtonDeleteBorder: '#EBF3D4',
        cardIconStroke: '#22252a',
        cardIconStrokeHover: '#fafafa',
        cardIconFill: '#ebf3d4',
        cardIconFillHover: '#22252a',
      },

      shoppingList: {
        colorImageContainer: '#EBF3D4',
        borderItemContainer: '#e0e0e0',
        titleProduct: '#3e4462',
        strokeRemoveSvg: '#333333',
      },
      footer: {
        bavkgroundFooter: '#22252A',
      },

      //  text
    },
  },
};

export default theme;
