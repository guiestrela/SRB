import styled from "styled-components";

interface DivFlexType {    
    gap?: string
    margintop?: string
    alignitems?: string
    justifycontent?: string
    width?: string
    height?: string
    flex?: string
    flexdirection?: string
    paddingTotal?: string 
    paddingleft?: string
    paddingright?: string
    paddingtop?: string
    paddingbottom?: string   
    border?: string
    borderradius?: string
    maxwidth?: string
    backgroundColor?: string
    backgroundimage?: string
    backgroundrepeat?: string
    backgroundposition?: string
    backgroundsize?: string
    margin?: string
    marginleft?: string
    marginright?: string
    marginbottom?: string


    ///Mobile
    justifycontentmob?: string
    alignitemsmob?: string
    heightmob?: string
    flexdirectionmob?: string
    paddingTotalmob?: string
    bordermob?: string
    borderradiusmob?: string
    marginmog?:string
    margintopmob?: string
    marginleftmob?: string
    marginrightmob?: string
    marginbottommob?: string
    gapmob?: string
    paddingleftmob?: string
    paddingrightmob?: string
    paddingtopmob?: string
    paddingbottommob?: string
}

interface DivFlexImageType {    
    gap?: string
    margintop?: string
    fontfamily?: string
    fontsize?: string
    alignitems?: string
    justifycontent?: string
    widthTotal?: string
    flex?: string
    flexdirection?: string
    paddingTotal?: string
    paddingleft?: string
    paddingright?: string
    paddingtop?: string
    paddingbottom?: string
    heightTotal?: string
    axwidth?: string
    border?: string
    borderradius?: string
    maxwidth?: string
    backgroundColor?: string

    ///Mobile
    justifycontentmob?: string
    alignitemsmob?: string
    widthmob?: string
    heightmob?: string
    flexdirectionmob?: string
    paddingTotalmob?: string
    bordermob?: string
    borderradiusmob?: string
    margintopmob?: string
    gapmob?: string
    paddingleftmob?: string
    paddingrightmob?: string
    paddingtopmob?: string
    paddingbottommob?: string
}

interface DivFlexLogoType {    
    gap?: string
    margintop?: string
    fontfamily?: string
    fontsize?: string
    alignitems?: string
    justifycontent?: string
    widthTotal?: string
    flex?: string
    flexdirection?: string
    paddingTotal?: string
    paddingleft?: string
    paddingright?: string
    paddingtop?: string
    paddingbottom?: string
    heightTotal?: string
    axwidth?: string
    border?: string
    borderradius?: string
    maxwidth?: string
    backgroundColor?: string

    ///Mobile
    justifycontentmob?: string
    alignitemsmob?: string
    widthmob?: string
    heightmob?: string
    flexdirectionmob?: string
    paddingTotalmob?: string
    bordermob?: string
    borderradiusmob?: string
    margintopmob?: string
    gapmob?: string
    paddingleftmob?: string
    paddingrightmob?: string
    paddingtopmob?: string
    paddingbottommob?: string
}

interface DivContainerTextType {    
    gap?: string
    margintop?: string
    fontfamily?: string
    fontsize?: string
    alignitems?: string
    justifycontent?: string
    widthTotal?: string
    flex?: string
    flexdirection?: string
    paddingTotal?: string
    paddingleft?: string
    paddingright?: string
    paddingtop?: string
    paddingbottom?: string
    heightTotal?: string
    axwidth?: string
    border?: string
    borderradius?: string
    maxwidth?: string
    backgroundColor?: string

    ///Mobile
    justifycontentmob?: string
    alignitemsmob?: string
    widthmob?: string
    heightmob?: string
    flexdirectionmob?: string
    paddingTotalmob?: string
    bordermob?: string
    borderradiusmob?: string
    margintopmob?: string
    gapmob?: string
    paddingleftmob?: string
    paddingrightmob?: string
    paddingtopmob?: string
    paddingbottommob?: string
}

interface ContainerButtonType {
    flex?: number
    paddingtop?: string
    paddingbottom?: string
    justifycontent?: string
    paddingleft?: string
    paddingright?: string
    flexdirection?: string
    gap?: string
    alignitems?: string 
    marginleft?: string
    marginright?: string
    width?: string

    //
    
    //mobile

    justifycontentmob?: string
    alignitemsmob?: string    
    paddingleftmob?:string
    paddingrightmob?:string
    paddingtopmob?:string
    paddingbottommob?:string
    marginleftmob?: string
    marginrightmob?: string
    flexdirectionmob?: string
    gapmob?: string

}


interface ButtonType {
    border?: string
    borderradius?: string
    padding?: string
    backgroundColor?: string
    fontfamily?: string
    fontsize?: string
    color?: string
    width?: string
    height?: string
    maxwidth?: string
    margintop?: string
    justifycontent?: string
    alignitems?: string
    fontweight?: string
    marginbotton?: string
    marginleft?: string
    marginright?: string
    gap?: string
    textalign?: string

    //

    //mobile

    widthmob?: string
    heightmob?: string
    justifycontentmob?: string
    alignitemsmob?: string
    fontsizemob?: string
}

interface TitleType {
    color?: string
    fontsize?: string
    fontfamily?: string
    margintop?: string
    fontweight?: string
    textalign?: string
    paddingbottom?: string

    ///Mobile

    fontsizemob?: string
    textalignmob?: string
    paddingbottommob?: string
    paddingleftmob?: string
    paddingrightmob?: string
    paddingtopmob?: string
}

interface TitleH2Type {
    color?: string
    fontsize?: string
    fontfamily?: string
    margintop?: string
    fontweight?: string
    textalign?: string
    paddingbottom?: string

    ///Mobile

    fontsizemob?: string
    textalignmob?: string
    paddingbottommob?: string
    paddingleftmob?: string
    paddingrightmob?: string
    paddingtopmob?: string
}

interface TextType {
    color?: string
    fontsize?: string
    fontfamily?: string
    margintop?: string
    fontweight?: string
    textalign?: string
    paddingtop?: string
    paddingbottom?: string

    ///Mobile

    fontsizemob?: string
    textalignmob?: string
    paddingtopmob?: string
    paddingleftmob?: string
    paddingrightmob?: string
    paddingbottommob?: string

}

interface ImgType {
    widthmob?: string
    heightmob?: string
}



export const DivFlex = styled.div<DivFlexType>`
    display: flex;
    height: ${props => props.height ? props.height : ""};
    width: ${props => props.width ? props.width : ""};
    max-width: ${props => props.maxwidth ? props.maxwidth : ""};
    flex-direction: ${props => props.flexdirection ? props.flexdirection : ""};
    justify-content: ${props => props.justifycontent ? props.justifycontent : ""};
    align-items: ${props => props.alignitems ? props.alignitems : ""};
    padding: ${props => props.paddingTotal ? props.paddingTotal : ""};
    padding-left: ${props => props.paddingleft ? props.paddingleft : ""};
    padding-right: ${props => props.paddingright ? props.paddingright : ""};
    padding-top: ${props => props.paddingtop ? props.paddingtop : ""};
    padding-bottom: ${props => props.paddingbottom ? props.paddingbottom : ""};
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderradius ? props.borderradius : ""};
    gap: ${props => props.gap ? props.gap : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    background-image: ${props => props.backgroundimage ? props.backgroundimage : ""};
    background-repeat: ${props => props.backgroundrepeat ? props.backgroundrepeat : ""};
    background-position: ${props => props.backgroundposition ? props.backgroundposition : ""};
    background-size: ${props => props.backgroundsize ? props.backgroundsize : ""};
    margin: ${props => props.margin ? props.margin : ""};
    margin-top: ${props => props.margintop ? props.margintop : ""};
    margin-left: ${props => props.marginleft ? props.marginleft : ""};
    margin-right: ${props => props.marginright ? props.marginright : ""};
    margin-bottom: ${props => props.marginbottom ? props.marginbottom : ""};
    


    @media only screen and (max-width: 580px) {
        width: 100%;
        height: ${props => props.heightmob ? props.heightmob : ""};    
        flex-direction: ${props => props.flexdirectionmob ? props.flexdirectionmob : ""};
        justify-content: ${props => props.justifycontentmob ? props.justifycontentmob : ""};
        align-items: ${props => props.alignitems ? props.alignitems : ""};
        padding: ${props => props.paddingTotalmob ? props.paddingTotalmob : ""};
        padding-left: ${props => props.paddingleftmob ? props.paddingleftmob : ""};
        padding-right: ${props => props.paddingrightmob ? props.paddingrightmob : ""};
        padding-top: ${props => props.paddingtopmob ? props.paddingtopmob : ""};
        padding-bottom: ${props => props.paddingbottommob ? props.paddingbottommob : ""};
        border: ${props => props.bordermob ? props.bordermob : ""};
        border-radius: ${props => props.borderradiusmob ? props.borderradiusmob : ""};
        gap: ${props => props.gapmob ? props.gapmob : ""};
        margin-top: ${props => props.margintopmob ? props.margintopmob : ""};
        margin-left: ${props => props.marginleftmob ? props.marginleftmob : ""};
        margin-right: ${props => props.marginrightmob ? props.marginrightmob : ""};
        margin-bottom: ${props => props.marginbottommob ? props.marginbottommob : ""};
        margin: ${props => props.marginmog ? props.marginmog : ""};
    }    
`;

export const DivFlexImage = styled.div<DivFlexImageType>`
    display: flex;
    height: ${props => props.heightTotal ? props.heightTotal : ""};
    width: ${props => props.widthTotal ? props.widthTotal : ""};
    max-width: ${props => props.maxwidth ? props.maxwidth : ""};
    flex-direction: ${props => props.flexdirection ? props.flexdirection : ""};
    justify-content: ${props => props.justifycontent ? props.justifycontent : ""};
    align-items: ${props => props.alignitems ? props.alignitems : ""};
    padding: ${props => props.paddingTotal ? props.paddingTotal : ""};
    padding-left: ${props => props.paddingleft ? props.paddingleft : ""};
    padding-right: ${props => props.paddingright ? props.paddingright : ""};
    padding-top: ${props => props.paddingtop ? props.paddingtop : ""};
    padding-bottom: ${props => props.paddingbottom ? props.paddingbottom : ""};
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderradius ? props.borderradius : ""};
    gap: ${props => props.gap ? props.gap : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    margin-top: ${props => props.margintop ? props.margintop : ""};

    @media only screen and (max-width: 580px) {
        width: ${props => props.widthmob ? props.widthmob : "100%"};
        height: ${props => props.heightmob ? props.heightmob : ""};    
        flex-direction: ${props => props.flexdirectionmob ? props.flexdirectionmob : ""};
        justify-content: ${props => props.justifycontentmob ? props.justifycontentmob : ""};
        align-items: ${props => props.alignitems ? props.alignitems : ""};
        padding: ${props => props.paddingTotalmob ? props.paddingTotalmob : ""};
        padding-left: ${props => props.paddingleftmob ? props.paddingleftmob : ""};
        padding-right: ${props => props.paddingrightmob ? props.paddingrightmob : ""};
        padding-top: ${props => props.paddingtopmob ? props.paddingtopmob : ""};
        padding-bottom: ${props => props.paddingbottommob ? props.paddingbottommob : ""};
        border: ${props => props.bordermob ? props.bordermob : ""};
        border-radius: ${props => props.borderradiusmob ? props.borderradiusmob : ""};
        gap: ${props => props.gapmob ? props.gapmob : ""};
        margin-top: ${props => props.margintopmob ? props.margintopmob : ""};    
    }  
`

export const DivFlexLogo = styled.div<DivFlexLogoType>`
    display: flex;
    height: ${props => props.heightTotal ? props.heightTotal : ""};
    width: ${props => props.widthTotal ? props.widthTotal : ""};
    max-width: ${props => props.maxwidth ? props.maxwidth : ""};
    flex-direction: ${props => props.flexdirection ? props.flexdirection : ""};
    justify-content: ${props => props.justifycontent ? props.justifycontent : ""};
    align-items: ${props => props.alignitems ? props.alignitems : ""};
    padding: ${props => props.paddingTotal ? props.paddingTotal : ""};
    padding-left: ${props => props.paddingleft ? props.paddingleft : ""};
    padding-right: ${props => props.paddingright ? props.paddingright : ""};
    padding-top: ${props => props.paddingtop ? props.paddingtop : ""};
    padding-bottom: ${props => props.paddingbottom ? props.paddingbottom : ""};
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderradius ? props.borderradius : ""};
    gap: ${props => props.gap ? props.gap : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    margin-top: ${props => props.margintop ? props.margintop : ""};

    @media only screen and (max-width: 580px) {
        width: ${props => props.widthmob ? props.widthmob : "100%"};
        height: ${props => props.heightmob ? props.heightmob : ""};    
        flex-direction: ${props => props.flexdirectionmob ? props.flexdirectionmob : ""};
        justify-content: ${props => props.justifycontentmob ? props.justifycontentmob : ""};
        align-items: ${props => props.alignitems ? props.alignitems : ""};
        padding: ${props => props.paddingTotalmob ? props.paddingTotalmob : ""};
        padding-left: ${props => props.paddingleftmob ? props.paddingleftmob : ""};
        padding-right: ${props => props.paddingrightmob ? props.paddingrightmob : ""};
        padding-top: ${props => props.paddingtopmob ? props.paddingtopmob : ""};
        padding-bottom: ${props => props.paddingbottommob ? props.paddingbottommob : ""};
        border: ${props => props.bordermob ? props.bordermob : ""};
        border-radius: ${props => props.borderradiusmob ? props.borderradiusmob : ""};
        gap: ${props => props.gapmob ? props.gapmob : ""};
        margin-top: ${props => props.margintopmob ? props.margintopmob : ""};    
    }  
`
export const ContainerButton = styled.div<ContainerButtonType>`
    display: flex;
    width: ${props => props.width ? props.width : ""};
    
    flex: ${props => props.flex ? props.flex : ""};    
    justify-content: ${props => props.justifycontent ? props.justifycontent : ""};
    padding-left: ${props => props.paddingleft ? props.paddingleft : ""}; 
    padding-right: ${props => props.paddingright ? props.paddingright : ""};   
    padding-top: ${props => props.paddingtop ? props.paddingtop : ""};
    padding-bottom: ${props => props.paddingbottom ? props.paddingbottom : ""};
    flex-direction: ${props => props.flexdirection ? props.flexdirection : ""};
    margin-left: ${props => props.marginleft ? props.marginleft : ""};
    margin-right: ${props => props.marginright ? props.marginright : ""};

    gap: ${props => props.gap ? props.gap : ""};
    align-items: ${props => props.alignitems ? props.alignitems : ""};

    @media only screen and (max-width: 580px) {
        padding-left: ${props => props.paddingleftmob ? props.paddingleftmob : ""}; 
        padding-right: ${props => props.paddingrightmob ? props.paddingrightmob : ""};   
        padding-top: ${props => props.paddingtopmob ? props.paddingtopmob : ""};
        padding-bottom: ${props => props.paddingbottommob ? props.paddingbottommob : ""};
        justify-content: ${props => props.justifycontentmob ? props.justifycontentmob : ""};
        align-items: ${props => props.alignitemsmob ? props.alignitemsmob : ""};
        margin-left: ${props => props.marginleftmob ? props.marginleftmob : ""};
        margin-right: ${props => props.marginrightmob ? props.marginrightmob : ""};
        flex-direction: ${props => props.flexdirectionmob ? props.flexdirectionmob : ""};
        gap: ${props => props.gapmob ? props.gapmob : ""};

    }
`;

export const Button = styled.button<ButtonType>`
    display: flex;
    justify-content: ${props => props.justifycontent ? props.justifycontent : ""};
    align-items: ${props => props.alignitems ? props.alignitems : ""};    
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderradius ? props.borderradius : ""};
    padding: ${props => props.padding ? props.padding : ""};
    width: ${props => props.width ? props.width : ""};
    height: ${props => props.height ? props.height : ""};
    max-width: ${props => props.maxwidth ? props.maxwidth : ""};
    margin-top: ${props => props.margintop ? props.margintop : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    font-family: ${props => props.fontfamily ? props.fontfamily : ""};
    font-size: ${props => props.fontsize ? props.fontsize : ""};
    font-weight: ${props => props.fontweight ? props.fontweight : ""};
    color: ${props => props.color ? props.color : ""};
    margin-left: ${props => props.marginleft ? props.marginleft : ""};
    margin-right: ${props => props.marginright ? props.marginright : ""};
    margin-bottom: ${props => props.marginbotton ? props.marginbotton : ""};
    gap: ${props => props.gap ? props.gap : ""};

    cursor: pointer;
    text-align: ${props => props.textalign ? props.textalign : ""};

    @media only screen and (max-width: 580px) {
        width: ${props => props.widthmob ? props.widthmob : ""};        
        height: ${props => props.heightmob ? props.heightmob : ""};
        justify-content: ${props => props.justifycontentmob ? props.justifycontentmob : ""};
        align-items: ${props => props.alignitemsmob ? props.alignitemsmob : ""};
        font-size: ${props => props.fontsizemob ? props.fontsizemob : ""};

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

export const DivContainerText = styled.div<DivContainerTextType>`
    display: flex;
    height: ${props => props.heightTotal ? props.heightTotal : ""};
    width: ${props => props.widthTotal ? props.widthTotal : ""};
    max-width: ${props => props.maxwidth ? props.maxwidth : ""};
    flex-direction: ${props => props.flexdirection ? props.flexdirection : ""};
    justify-content: ${props => props.justifycontent ? props.justifycontent : ""};
    align-items: ${props => props.alignitems ? props.alignitems : ""};
    padding: ${props => props.paddingTotal ? props.paddingTotal : ""};
    padding-left: ${props => props.paddingleft ? props.paddingleft : ""};
    padding-right: ${props => props.paddingright ? props.paddingright : ""};
    padding-top: ${props => props.paddingtop ? props.paddingtop : ""};
    padding-bottom: ${props => props.paddingbottom ? props.paddingbottom : ""};
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderradius ? props.borderradius : ""};
    gap: ${props => props.gap ? props.gap : ""};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    margin-top: ${props => props.margintop ? props.margintop : ""};

    @media only screen and (max-width: 580px) {
        width: ${props => props.widthmob ? props.widthmob : "100%"};
        height: ${props => props.heightmob ? props.heightmob : ""};    
        flex-direction: ${props => props.flexdirectionmob ? props.flexdirectionmob : ""};
        justify-content: ${props => props.justifycontentmob ? props.justifycontentmob : ""};
        align-items: ${props => props.alignitems ? props.alignitems : ""};
        padding: ${props => props.paddingTotalmob ? props.paddingTotalmob : ""};
        padding-left: ${props => props.paddingleftmob ? props.paddingleftmob : ""};
        padding-right: ${props => props.paddingrightmob ? props.paddingrightmob : ""};
        padding-top: ${props => props.paddingtopmob ? props.paddingtopmob : ""};
        padding-bottom: ${props => props.paddingbottommob ? props.paddingbottommob : ""};
        border: ${props => props.bordermob ? props.bordermob : ""};
        border-radius: ${props => props.borderradiusmob ? props.borderradiusmob : ""};
        gap: ${props => props.gapmob ? props.gapmob : ""};
        margin-top: ${props => props.margintopmob ? props.margintopmob : ""};    
    }  
`

export const Title = styled.h1<TitleType>`
    
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontsize ? props.fontsize : '40px'};
    font-weight: ${props => props.fontweight ? props.fontweight : '600'};
    color: ${props => props.color ? props.color : ''};
    text-align: ${props => props.textalign ? props.textalign : 'center'};
    overflow-wrap: break-word;
    
    @media only screen and (max-width: 580px) {
        font-size: ${props => props.fontsizemob ? props.fontsizemob : '20px'};
        text-align: ${props => props.textalignmob ? props.textalignmob : 'center'};  
        padding-bottom: ${props => props.paddingbottommob ? props.paddingbottommob : ''};
        padding-left: ${props => props.paddingleftmob ? props.paddingleftmob : ''};
        padding-right: ${props => props.paddingrightmob ? props.paddingrightmob : ''};
        padding-top: ${props => props.paddingtopmob ? props.paddingtopmob : ''};
    }
`;

export const TitleH2 = styled.h2<TitleH2Type>`
    
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontsize ? props.fontsize : '40px'};
    font-weight: ${props => props.fontweight ? props.fontweight : '600'};
    color: ${props => props.color ? props.color : ''};
    text-align: ${props => props.textalign ? props.textalign : 'center'};
    overflow-wrap: break-word;
    
    @media only screen and (max-width: 580px) {
        font-size: ${props => props.fontsizemob ? props.fontsizemob : '20px'};
        text-align: ${props => props.textalignmob ? props.textalignmob : 'center'};  
        padding-bottom: ${props => props.paddingbottommob ? props.paddingbottommob : ''};
        padding-left: ${props => props.paddingleftmob ? props.paddingleftmob : ''};
        padding-right: ${props => props.paddingrightmob ? props.paddingrightmob : ''};
        padding-top: ${props => props.paddingtopmob ? props.paddingtopmob : ''};
    }
`;

export const Text = styled.p<TextType>`
    font-family: 'Poppins', sans-serif;
    font-size: ${props => props.fontsize ? props.fontsize : '40px'};
    font-weight: ${props => props.fontweight ? props.fontweight : '600'};
    color: ${props => props.color ? props.color : ''};
    text-align: ${props => props.textalign ? props.textalign : 'center'};
    padding-top: ${props => props.paddingtop ? props.paddingtop : ''};
    padding-bottom: ${props => props.paddingbottom ? props.paddingbottom : ''};

    
    @media only screen and (max-width: 580px) {
        font-size: ${props => props.fontsizemob ? props.fontsizemob : '20px'};
        text-align: ${props => props.textalignmob ? props.textalignmob : 'center'};
        padding-top: ${props => props.paddingtopmob ? props.paddingtopmob : ''};
        padding-left: ${props => props.paddingleftmob ? props.paddingleftmob : ''};
        padding-right: ${props => props.paddingrightmob ? props.paddingrightmob : ''};
        padding-bottom: ${props => props.paddingbottommob ? props.paddingbottommob : ''};



    }
`

export const Img = styled.img<ImgType>`
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 580px) {
        width: ${props => props.widthmob ? props.widthmob : ""};
        height: ${props => props.heightmob ? props.heightmob : ""};
    }
`;  