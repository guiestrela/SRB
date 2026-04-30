import styled from "styled-components";

interface InputType {
    border?: string
    borderRadius?: string
    padding?: string
    backgroundColor?: string
    fontFamily?: string
    fontSize?: string
    color?: string
    width?: string
    height?: string
    maxWidth?: string
    marginTop?: string
    fontWeight?: string
    marginBottom?: string
    marginLeft?: string
    marginRight?: string
    textAlign?: string
    hover?: string
    fontSizeMob?: string
}

export const Input = styled.input<InputType>`
    border: ${props => props.border ? props.border : ""};
    border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
    padding: ${props => props.padding ? props.padding : ""};
    width: ${props => props.width ? props.width : "100%"};
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
    text-align: ${props => props.textAlign ? props.textAlign : ""};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.hover ? props.hover : ""};
    }

    @media only screen and (max-width: 580px) {
        font-size: ${props => props.fontSizeMob ? props.fontSizeMob : ""};
    }
`;