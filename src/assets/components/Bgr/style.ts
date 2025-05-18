import styled from "styled-components";

interface InputType {
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

    hover?: string


    //mobile

    widthmob?: string
    heightmob?: string
    justifycontentmob?: string
    alignitemsmob?: string
    fontsizemob?: string
}

export const Input = styled.button<InputType>`
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
    text-align: ${props => props.textalign ? props.textalign : ""};
    cursor: pointer;    

    &:hover {
        background-color: ${props => props.hover ? props.hover : ""};
    }

    @media only screen and (max-width: 580px) {
        width: ${props => props.widthmob ? props.widthmob : ""};        
        height: ${props => props.heightmob ? props.heightmob : ""};
        justify-content: ${props => props.justifycontentmob ? props.justifycontentmob : ""};
        align-items: ${props => props.alignitemsmob ? props.alignitemsmob : ""};
        font-size: ${props => props.fontsizemob ? props.fontsizemob : ""};
    }
`;