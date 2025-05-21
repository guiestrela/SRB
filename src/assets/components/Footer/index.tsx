import { 
    DivContainerText, 
    DivFlex, 
    DivFlexLogo, 
    Img, 
    Link, 
    Title } 
    from "../../../uiKit";

import github from "../../icons/github.svg"
import linkedin from "../../icons/linkedin.svg"


function Footer() {
    return(
        <>
            <DivFlex 
                width="100%" 
                justifycontent="center"               
                alignitems="center">
                <DivFlex 
                    width="1440px"  
                    paddingTotal="80px 0px"
                    backgroundColor="#c9c6f0"
                    flexdirectionmob="column"
                    alignitemsmob="center"
                    justifycontentmob="center">

                    <DivContainerText 
                        widthTotal="100%" 
                        alignitems="center" 
                        justifycontent="start" 
                        paddingleft="20px"
                        justifycontentmob="center">
                        <Title 
                            fontsize="30px"     
                            fontweight="400" 
                            textalign="start"
                            textalignmob="start"
                            fontsizemob="30px">
                            Background <span style={{ color: "#716FFA", fontWeight: "bold" }}>Remover</span>
                        </Title>
                    </DivContainerText>
                    <DivFlex 
                        justifycontentmob="center" 
                        alignitemsmob="center"
                        paddingtopmob="30px">
                        <DivFlexLogo 
                            widthTotal="50px" 
                            paddingright="20px"
                            widthmob="50px">
                            <Link href="https://github.com/guiestrela" target="_blank">
                            <Img src={github} alt="github"/> 
                            </Link>   
                        </DivFlexLogo>   
                        <DivFlexLogo 
                            widthTotal="50px" 
                            paddingright="20px"
                            widthmob="50px">
                            <Link href="https://www.linkedin.com/in/guilherme-estrela-4166a539/" target="_blank">
                            <Img src={linkedin} alt="linkedin"/>
                            </Link>     
                        </DivFlexLogo>       
                    </DivFlex>                                    
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default Footer;