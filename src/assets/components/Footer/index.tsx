import { 
    DivContainerText, 
    DivFlex, 
    DivFlexLogo, 
    Img, 
    Link, 
    Title } 
    from "../../../uiKit2";

import github from "../../icons/github.svg"
import linkedin from "../../icons/linkedin.svg"


function Footer() {
    return(
        <>
            <DivFlex 
                width="100%" 
                justifyContent="center"               
                alignItems="center">
                <DivFlex 
                    width="1440px"  
                    paddingTotal="80px 0px"
                    backgroundColor="#c9c6f0"
                    flexDirectionMob="column"
                    alignItemsMob="center"
                    justifyContentMob="center">

                    <DivContainerText 
                        widthTotal="100%" 
                        alignItems="center" 
                        justifyContent="start" 
                        paddingLeft="20px"
                        justifyContentMob="center">
                        <Title 
                            fontSize="30px"     
                            fontWeight="400" 
                            textAlign="start"
                            textAlignMob="start"
                            fontSizeMob="30px">
                            Background <span style={{ color: "#716FFA", fontWeight: "bold" }}>Remover</span>
                        </Title>
                    </DivContainerText>
                    <DivFlex 
                        justifyContentMob="center" 
                        alignItemsMob="center"
                        paddingTopMob="30px">
                        <DivFlexLogo 
                            widthTotal="50px" 
                            paddingRight="20px"
                            widthMob="50px">
                            <Link href="https://github.com/guiestrela" target="_blank">
                            <Img src={github} alt="github"/> 
                            </Link>   
                        </DivFlexLogo>   
                        <DivFlexLogo 
                            widthTotal="50px" 
                            paddingRight="20px"
                            widthMob="50px">
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