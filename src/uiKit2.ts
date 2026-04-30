import styled from "styled-components";

interface DivFlexType {    
    gap?: string
    marginTop?: string
    alignItems?: string
    justifyContent?: string
    width?: string
    height?: string
    flex?: string
    flexDirection?: string
    paddingTotal?: string 
    paddingLeft?: string
    paddingRight?: string
    paddingTop?: string
    paddingBottom?: string   
    border?: string
    borderRadius?: string
    maxWidth?: string
    backgroundColor?: string
    backgroundImage?: string
    backgroundRepeat?: string
    backgroundPosition?: string
    backgroundSize?: string
    margin?: string
    marginLeft?: string
    marginRight?: string
    marginBottom?: string
    // Deprecated typo; use border instead.
    borderTop?: string
    borderRight?: string
    borderBottom?: string
    borderLeft?: string
    
    // Tablet
    maxWidthTablet?: string
    widthTablet?: string
    heightTablet?: string

    // Mobile
    justifyContentMob?: string
    alignItemsMob?: string
    heightMob?: string
    flexDirectionMob?: string
    paddingTotalMob?: string
    borderMob?: string
    borderRadiusMob?: string
    marginMob?: string
    marginTopMob?: string
    marginLeftMob?: string
    marginRightMob?: string
    marginBottomMob?: string
    gapMob?: string
    paddingLeftMob?: string
    paddingRightMob?: string
    paddingTopMob?: string
    paddingBottomMob?: string
}

export const DivFlex = styled.div<DivFlexType>`
    display: flex;
    height: ${props => props.height ? props.height : ""};
    width: ${props => props.width ? props.width : ""};
    max-width: ${props => props.maxWidth ? props.maxWidth : ""};
    flex-direction: ${props => props.flexDirection ? props.flexDirection : ""};
    justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
    align-items: ${props => props.alignItems ? props.alignItems : ""};
    padding: ${props => props.paddingTotal ? props.paddingTotal : ""};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : ""};
    padding-right: ${props => props.paddingRight ? props.paddingRight : ""};
    padding-top: ${props => props.paddingTop ? props.paddingTop : ""};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : ""};
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
    gap: ${props => props.gap ? props.gap : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    background-image: ${props => props.backgroundImage ? props.backgroundImage : ""};
    background-repeat: ${props => props.backgroundRepeat ? props.backgroundRepeat : ""};
    background-position: ${props => props.backgroundPosition ? props.backgroundPosition : ""};
    background-size: ${props => props.backgroundSize ? props.backgroundSize : ""};
    margin: ${props => props.margin ? props.margin : ""};
    margin-top: ${props => props.marginTop ? props.marginTop : ""};
    margin-left: ${props => props.marginLeft ? props.marginLeft : ""};
    margin-right: ${props => props.marginRight ? props.marginRight : ""};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : ""};

    border-top: ${props => props.borderTop ? props.borderTop : ""};
    border-right: ${props => props.borderRight ? props.borderRight : ""};
    border-bottom: ${props => props.borderBottom ? props.borderBottom : ""};
    border-left: ${props => props.borderLeft ? props.borderLeft : ""};

    /* Tablet */
    @media only screen and (min-width: 581px) and (max-width: 1024px) {
        width: ${props => props.widthTablet ? props.widthTablet : ""};
        height: ${props => props.heightTablet ? props.heightTablet : ""};
        max-width: ${props => props.maxWidthTablet ? props.maxWidthTablet : ""};
    }

    /* Mobile */
    @media only screen and (max-width: 580px) {
        width: 100%;
        height: ${props => props.heightMob ? props.heightMob : ""};
        flex-direction: ${props => props.flexDirectionMob ? props.flexDirectionMob : ""};
        justify-content: ${props => props.justifyContentMob ? props.justifyContentMob : ""};
        align-items: ${props => props.alignItemsMob ? props.alignItemsMob : ""};
        padding: ${props => props.paddingTotalMob ? props.paddingTotalMob : ""};
        padding-left: ${props => props.paddingLeftMob ? props.paddingLeftMob : ""};
        padding-right: ${props => props.paddingRightMob ? props.paddingRightMob : ""};
        padding-top: ${props => props.paddingTopMob ? props.paddingTopMob : ""};
        padding-bottom: ${props => props.paddingBottomMob ? props.paddingBottomMob : ""};
        border: ${props => props.borderMob ? props.borderMob : ""};
        border-radius: ${props => props.borderRadiusMob ? props.borderRadiusMob : ""};
        gap: ${props => props.gapMob ? props.gapMob : ""};
        margin-top: ${props => props.marginTopMob ? props.marginTopMob : ""};
        margin-left: ${props => props.marginLeftMob ? props.marginLeftMob : ""};
        margin-right: ${props => props.marginRightMob ? props.marginRightMob : ""};
        margin-bottom: ${props => props.marginBottomMob ? props.marginBottomMob : ""};
        margin: ${props => props.marginMob ? props.marginMob : ""};
    }    
`;

interface FlexContainerBaseType {
    gap?: string
    marginTop?: string
    fontFamily?: string
    fontSize?: string
    alignItems?: string
    justifyContent?: string
    widthTotal?: string
    flex?: string
    flexDirection?: string
    paddingTotal?: string
    paddingLeft?: string
    paddingRight?: string
    paddingTop?: string
    paddingBottom?: string
    heightTotal?: string
    border?: string
    borderRadius?: string
    maxWidth?: string

    // Tablet
    maxWidthTablet?: string
    widthTablet?: string
    heightTablet?: string
    backgroundColor?: string

    // Mobile
    justifyContentMob?: string
    alignItemsMob?: string
    widthMob?: string
    heightMob?: string
    flexDirectionMob?: string
    paddingTotalMob?: string
    borderMob?: string
    borderRadiusMob?: string
    marginTopMob?: string
    gapMob?: string
    paddingLeftMob?: string
    paddingRightMob?: string
    paddingTopMob?: string
    paddingBottomMob?: string
}

export const DivFlexImage = styled.div<FlexContainerBaseType>`
    display: flex;
    height: ${props => props.heightTotal ? props.heightTotal : ""};
    width: ${props => props.widthTotal ? props.widthTotal : ""};
    max-width: ${props => props.maxWidth ? props.maxWidth : ""};
    flex-direction: ${props => props.flexDirection ? props.flexDirection : ""};
    justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
    align-items: ${props => props.alignItems ? props.alignItems : ""};
    padding: ${props => props.paddingTotal ? props.paddingTotal : ""};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : ""};
    padding-right: ${props => props.paddingRight ? props.paddingRight : ""};
    padding-top: ${props => props.paddingTop ? props.paddingTop : ""};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : ""};
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
    gap: ${props => props.gap ? props.gap : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    margin-top: ${props => props.marginTop ? props.marginTop : ""};

    /* Tablet */
    @media only screen and (min-width: 581px) and (max-width: 1024px) {
        width: ${props => props.widthTablet ? props.widthTablet : ""};
        height: ${props => props.heightTablet ? props.heightTablet : ""};
        max-width: ${props => props.maxWidthTablet ? props.maxWidthTablet : ""};
    }

    /* Mobile */
    @media only screen and (max-width: 580px) {
        width: ${props => props.widthMob ? props.widthMob : "100%"};
        height: ${props => props.heightMob ? props.heightMob : ""};    
        flex-direction: ${props => props.flexDirectionMob ? props.flexDirectionMob : ""};
        justify-content: ${props => props.justifyContentMob ? props.justifyContentMob : ""};
        align-items: ${props => props.alignItemsMob ? props.alignItemsMob : ""};
        padding: ${props => props.paddingTotalMob ? props.paddingTotalMob : ""};
        padding-left: ${props => props.paddingLeftMob ? props.paddingLeftMob : ""};
        padding-right: ${props => props.paddingRightMob ? props.paddingRightMob : ""};
        padding-top: ${props => props.paddingTopMob ? props.paddingTopMob : ""};
        padding-bottom: ${props => props.paddingBottomMob ? props.paddingBottomMob : ""};
        border: ${props => props.borderMob ? props.borderMob : ""};
        border-radius: ${props => props.borderRadiusMob ? props.borderRadiusMob : ""};
        gap: ${props => props.gapMob ? props.gapMob : ""};
        margin-top: ${props => props.marginTopMob ? props.marginTopMob : ""};    
    }  
`;

export const DivFlexLogo = styled.div<FlexContainerBaseType>`
    display: flex;
    height: ${props => props.heightTotal ? props.heightTotal : ""};
    width: ${props => props.widthTotal ? props.widthTotal : ""};
    max-width: ${props => props.maxWidth ? props.maxWidth : ""};
    flex-direction: ${props => props.flexDirection ? props.flexDirection : ""};
    justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
    align-items: ${props => props.alignItems ? props.alignItems : ""};
    padding: ${props => props.paddingTotal ? props.paddingTotal : ""};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : ""};
    padding-right: ${props => props.paddingRight ? props.paddingRight : ""};
    padding-top: ${props => props.paddingTop ? props.paddingTop : ""};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : ""};
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
    gap: ${props => props.gap ? props.gap : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    margin-top: ${props => props.marginTop ? props.marginTop : ""};

    /* Tablet */
    @media only screen and (min-width: 581px) and (max-width: 1024px) {
        width: ${props => props.widthTablet ? props.widthTablet : ""};
        height: ${props => props.heightTablet ? props.heightTablet : ""};
        max-width: ${props => props.maxWidthTablet ? props.maxWidthTablet : ""};
    }

    /* Mobile */
    @media only screen and (max-width: 580px) {
        width: ${props => props.widthMob ? props.widthMob : "100%"};
        height: ${props => props.heightMob ? props.heightMob : ""};    
        flex-direction: ${props => props.flexDirectionMob ? props.flexDirectionMob : ""};
        justify-content: ${props => props.justifyContentMob ? props.justifyContentMob : ""};
        align-items: ${props => props.alignItemsMob ? props.alignItemsMob : ""};
        padding: ${props => props.paddingTotalMob ? props.paddingTotalMob : ""};
        padding-left: ${props => props.paddingLeftMob ? props.paddingLeftMob : ""};
        padding-right: ${props => props.paddingRightMob ? props.paddingRightMob : ""};
        padding-top: ${props => props.paddingTopMob ? props.paddingTopMob : ""};
        padding-bottom: ${props => props.paddingBottomMob ? props.paddingBottomMob : ""};
        border: ${props => props.borderMob ? props.borderMob : ""};
        border-radius: ${props => props.borderRadiusMob ? props.borderRadiusMob : ""};
        gap: ${props => props.gapMob ? props.gapMob : ""};
        margin-top: ${props => props.marginTopMob ? props.marginTopMob : ""};    
    }  
`;

interface ContainerButtonType {
    flex?: string
    paddingTop?: string
    paddingBottom?: string
    justifyContent?: string
    paddingLeft?: string
    paddingRight?: string
    flexDirection?: string
    gap?: string
    alignItems?: string
    marginLeft?: string
    marginRight?: string
    width?: string

    // Tablet
    widthTablet?: string

    // Mobile
    justifyContentMob?: string
    alignItemsMob?: string
    paddingLeftMob?: string
    paddingRightMob?: string
    paddingTopMob?: string
    paddingBottomMob?: string
    marginLeftMob?: string
    marginRightMob?: string
    flexDirectionMob?: string
    gapMob?: string
}

export const ContainerButton = styled.div<ContainerButtonType>`
    display: flex;
    width: ${props => props.width ? props.width : ""};
    
    flex: ${props => props.flex ? props.flex : ""};    
    justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : ""}; 
    padding-right: ${props => props.paddingRight ? props.paddingRight : ""};   
    padding-top: ${props => props.paddingTop ? props.paddingTop : ""};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : ""};
    flex-direction: ${props => props.flexDirection ? props.flexDirection : ""};
    margin-left: ${props => props.marginLeft ? props.marginLeft : ""};
    margin-right: ${props => props.marginRight ? props.marginRight : ""};

    gap: ${props => props.gap ? props.gap : ""};
    align-items: ${props => props.alignItems ? props.alignItems : ""};

    a {
        text-decoration: none;    
    }

    /* Tablet */
    @media only screen and (min-width: 581px) and (max-width: 1024px) {
        width: ${props => props.widthTablet ? props.widthTablet : ""};
    }

    /* Mobile */
    @media only screen and (max-width: 580px) {
        padding-left: ${props => props.paddingLeftMob ? props.paddingLeftMob : ""}; 
        padding-right: ${props => props.paddingRightMob ? props.paddingRightMob : ""};   
        padding-top: ${props => props.paddingTopMob ? props.paddingTopMob : ""};
        padding-bottom: ${props => props.paddingBottomMob ? props.paddingBottomMob : ""};
        justify-content: ${props => props.justifyContentMob ? props.justifyContentMob : ""};
        align-items: ${props => props.alignItemsMob ? props.alignItemsMob : ""};
        margin-left: ${props => props.marginLeftMob ? props.marginLeftMob : ""};
        margin-right: ${props => props.marginRightMob ? props.marginRightMob : ""};
        flex-direction: ${props => props.flexDirectionMob ? props.flexDirectionMob : ""};
        gap: ${props => props.gapMob ? props.gapMob : ""};
    }
`;

interface ButtonType {
    border?: string
    borderRadius?: string
    padding?: string
    backgroundColor?: string
    fontFamily?: string
    fontSize?: string
    color?: string
    width?: string
    height?: string

    // Tablet
    maxWidthTablet?: string
    widthTablet?: string
    heightTablet?: string
    maxWidth?: string
    marginTop?: string
    justifyContent?: string
    alignItems?: string
    fontWeight?: string
    marginBottom?: string
    marginLeft?: string
    marginRight?: string
    gap?: string
    textAlign?: string

    hover?: string

    // Tablet
    fontSizeTablet?: string

    // Mobile
    widthMob?: string
    heightMob?: string
    justifyContentMob?: string
    alignItemsMob?: string
    fontSizeMob?: string
}

export const Button = styled.button<ButtonType>`
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
    align-items: ${props => props.alignItems ? props.alignItems : ""};    
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
    padding: ${props => props.padding ? props.padding : ""};
    width: ${props => props.width ? props.width : ""};
    height: ${props => props.height ? props.height : ""};
    max-width: ${props => props.maxWidth ? props.maxWidth : ""};
    margin-top: ${props => props.marginTop ? props.marginTop : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    font-family: ${props => props.fontFamily ? props.fontFamily : ""};
    font-size: ${props => props.fontSize ? props.fontSize : ""};
    font-weight: ${props => props.fontWeight ? props.fontWeight : ""};
    color: ${props => props.color ? props.color : ""};
    margin-left: ${props => props.marginLeft ? props.marginLeft : ""};
    margin-right: ${props => props.marginRight ? props.marginRight : ""};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : ""};
    gap: ${props => props.gap ? props.gap : ""};
    text-align: ${props => props.textAlign ? props.textAlign : ""};
    cursor: pointer; 

    a {
        text-decoration: none;    
    } 

    &:hover {
        background-color: ${props => props.hover ? props.hover : ""};
    }

    /* Tablet */
    @media only screen and (min-width: 581px) and (max-width: 1024px) {
        width: ${props => props.widthTablet ? props.widthTablet : ""};
        height: ${props => props.heightTablet ? props.heightTablet : ""};
        max-width: ${props => props.maxWidthTablet ? props.maxWidthTablet : ""};
        font-size: ${props => props.fontSizeTablet ? props.fontSizeTablet : ""};
    }

    /* Mobile */
    @media only screen and (max-width: 580px) {
        width: ${props => props.widthMob ? props.widthMob : ""};        
        height: ${props => props.heightMob ? props.heightMob : ""};
        justify-content: ${props => props.justifyContentMob ? props.justifyContentMob : ""};
        align-items: ${props => props.alignItemsMob ? props.alignItemsMob : ""};
        font-size: ${props => props.fontSizeMob ? props.fontSizeMob : ""};
    }
`;

export const LightButton = styled.button`
    background-color: transparent;
    border: 2px solid #000000;
    height: 35px;
    width: 45px;
    border-radius: 10px; 
    cursor: pointer;
`;

export const DivContainerText = styled.div<FlexContainerBaseType>`
    display: flex;
    height: ${props => props.heightTotal ? props.heightTotal : ""};
    width: ${props => props.widthTotal ? props.widthTotal : ""};
    max-width: ${props => props.maxWidth ? props.maxWidth : ""};
    flex-direction: ${props => props.flexDirection ? props.flexDirection : ""};
    justify-content: ${props => props.justifyContent ? props.justifyContent : ""};
    align-items: ${props => props.alignItems ? props.alignItems : ""};
    padding: ${props => props.paddingTotal ? props.paddingTotal : ""};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : ""};
    padding-right: ${props => props.paddingRight ? props.paddingRight : ""};
    padding-top: ${props => props.paddingTop ? props.paddingTop : ""};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : ""};
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
    gap: ${props => props.gap ? props.gap : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    margin-top: ${props => props.marginTop ? props.marginTop : ""};

    /* Tablet */
    @media only screen and (min-width: 581px) and (max-width: 1024px) {
        width: ${props => props.widthTablet ? props.widthTablet : ""};
        height: ${props => props.heightTablet ? props.heightTablet : ""};
        max-width: ${props => props.maxWidthTablet ? props.maxWidthTablet : ""};
    }

    /* Mobile */
    @media only screen and (max-width: 580px) {
        width: ${props => props.widthMob ? props.widthMob : "100%"};
        height: ${props => props.heightMob ? props.heightMob : ""};    
        flex-direction: ${props => props.flexDirectionMob ? props.flexDirectionMob : ""};
        justify-content: ${props => props.justifyContentMob ? props.justifyContentMob : ""};
        align-items: ${props => props.alignItemsMob ? props.alignItemsMob : ""};
        padding: ${props => props.paddingTotalMob ? props.paddingTotalMob : ""};
        padding-left: ${props => props.paddingLeftMob ? props.paddingLeftMob : ""};
        padding-right: ${props => props.paddingRightMob ? props.paddingRightMob : ""};
        padding-top: ${props => props.paddingTopMob ? props.paddingTopMob : ""};
        padding-bottom: ${props => props.paddingBottomMob ? props.paddingBottomMob : ""};
        border: ${props => props.borderMob ? props.borderMob : ""};
        border-radius: ${props => props.borderRadiusMob ? props.borderRadiusMob : ""};
        gap: ${props => props.gapMob ? props.gapMob : ""};
        margin-top: ${props => props.marginTopMob ? props.marginTopMob : ""};    
    }  
`;

interface TitleType {
    color?: string
    fontSize?: string
    fontFamily?: string
    marginTop?: string
    fontWeight?: string
    textAlign?: string
    paddingBottom?: string

    // Tablet
    fontSizeTablet?: string

    // Mobile
    fontSizeMob?: string
    textAlignMob?: string
    paddingBottomMob?: string
    paddingLeftMob?: string
    paddingRightMob?: string
    paddingTopMob?: string
}

export const Title = styled.h1<TitleType>`
    
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontSize ? props.fontSize : '40px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '600'};
    color: ${props => props.color ? props.color : ''};
    text-align: ${props => props.textAlign ? props.textAlign : 'center'};
    overflow-wrap: break-word;

    /* Tablet */
    @media only screen and (min-width: 581px) and (max-width: 1024px) {
        font-size: ${props => props.fontSizeTablet ? props.fontSizeTablet : ''};
    }
    
    /* Mobile */
    @media only screen and (max-width: 580px) {
        font-size: ${props => props.fontSizeMob ? props.fontSizeMob : '20px'};
        text-align: ${props => props.textAlignMob ? props.textAlignMob : 'center'};  
        padding-bottom: ${props => props.paddingBottomMob ? props.paddingBottomMob : ''};
        padding-left: ${props => props.paddingLeftMob ? props.paddingLeftMob : ''};
        padding-right: ${props => props.paddingRightMob ? props.paddingRightMob : ''};
        padding-top: ${props => props.paddingTopMob ? props.paddingTopMob : ''};
    }
`;

type TitleH2Type = TitleType

export const TitleH2 = styled.h2<TitleH2Type>`
    
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontSize ? props.fontSize : '40px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '600'};
    color: ${props => props.color ? props.color : ''};
    text-align: ${props => props.textAlign ? props.textAlign : 'center'};
    overflow-wrap: break-word;

    /* Tablet */
    @media only screen and (min-width: 581px) and (max-width: 1024px) {
        font-size: ${props => props.fontSizeTablet ? props.fontSizeTablet : ''};
    }
    
    /* Mobile */
    @media only screen and (max-width: 580px) {
        font-size: ${props => props.fontSizeMob ? props.fontSizeMob : '20px'};
        text-align: ${props => props.textAlignMob ? props.textAlignMob : 'center'};  
        padding-bottom: ${props => props.paddingBottomMob ? props.paddingBottomMob : ''};
        padding-left: ${props => props.paddingLeftMob ? props.paddingLeftMob : ''};
        padding-right: ${props => props.paddingRightMob ? props.paddingRightMob : ''};
        padding-top: ${props => props.paddingTopMob ? props.paddingTopMob : ''};
    }
`;

interface TextoType {
    color?: string
    fontSize?: string
    fontFamily?: string
    marginTop?: string
    fontWeight?: string
    textAlign?: string
    paddingTop?: string
    paddingBottom?: string

    // Tablet
    fontSizeTablet?: string

    // Mobile
    fontSizeMob?: string
    textAlignMob?: string
    paddingTopMob?: string
    paddingLeftMob?: string
    paddingRightMob?: string
    paddingBottomMob?: string
}

export const Texto = styled.p<TextoType>`
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontSize ? props.fontSize : '40px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '600'};
    color: ${props => props.color ? props.color : ''};
    text-align: ${props => props.textAlign ? props.textAlign : 'center'};
    padding-top: ${props => props.paddingTop ? props.paddingTop : ''};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : ''};

    /* Tablet */
    @media only screen and (min-width: 581px) and (max-width: 1024px) {
        font-size: ${props => props.fontSizeTablet ? props.fontSizeTablet : ''};
    }

    
    /* Mobile */
    @media only screen and (max-width: 580px) {
        font-size: ${props => props.fontSizeMob ? props.fontSizeMob : '20px'};
        text-align: ${props => props.textAlignMob ? props.textAlignMob : 'center'};
        padding-top: ${props => props.paddingTopMob ? props.paddingTopMob : ''};
        padding-left: ${props => props.paddingLeftMob ? props.paddingLeftMob : ''};
        padding-right: ${props => props.paddingRightMob ? props.paddingRightMob : ''};
        padding-bottom: ${props => props.paddingBottomMob ? props.paddingBottomMob : ''};
    }
`;

interface LinkType {
    color?: string
    fontSize?: string
    fontFamily?: string
    marginTop?: string
    fontWeight?: string
    textAlign?: string
    paddingTop?: string
    paddingBottom?: string

    // Tablet
    fontSizeTablet?: string
    hoverDecoration?: string

    // Mobile
    fontSizeMob?: string
    textAlignMob?: string
    paddingTopMob?: string
    paddingLeftMob?: string
    paddingRightMob?: string
    paddingBottomMob?: string
}

export const Link = styled.a<LinkType>`
    text-decoration:none;
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontSize ? props.fontSize : '40px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '600'};
    color: ${props => props.color ? props.color : ''};
    text-align: ${props => props.textAlign ? props.textAlign : 'center'};
    padding-top: ${props => props.paddingTop ? props.paddingTop : ''};
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : ''};

    /* Tablet */
    @media only screen and (min-width: 581px) and (max-width: 1024px) {
        font-size: ${props => props.fontSizeTablet ? props.fontSizeTablet : ''};
    }

    &:hover {
        text-decoration: ${props => props.hoverDecoration ? props.hoverDecoration : 'underline'};
    }

    /* Mobile */
    @media only screen and (max-width: 580px) {
        font-size: ${props => props.fontSizeMob ? props.fontSizeMob : '20px'};
        text-align: ${props => props.textAlignMob ? props.textAlignMob : 'center'};
        padding-top: ${props => props.paddingTopMob ? props.paddingTopMob : ''};
        padding-left: ${props => props.paddingLeftMob ? props.paddingLeftMob : ''};
        padding-right: ${props => props.paddingRightMob ? props.paddingRightMob : ''};
        padding-bottom: ${props => props.paddingBottomMob ? props.paddingBottomMob : ''};
    }
`;

interface ImgType {
    // Tablet
    widthTablet?: string
    heightTablet?: string

    // Mobile
    widthMob?: string
    heightMob?: string
}

export const Img = styled.img<ImgType>`
    width: 100%;
    height: 100%;

    @media only screen and (min-width: 581px) and (max-width: 1024px) {
        width: ${props => props.widthTablet ? props.widthTablet : ""};
        height: ${props => props.heightTablet ? props.heightTablet : ""};
    }

    @media only screen and (max-width: 580px) {
        width: ${props => props.widthMob ? props.widthMob : ""};
        height: ${props => props.heightMob ? props.heightMob : ""};
    }
`;  