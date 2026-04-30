import { DivContainerText, DivFlex, DivFlexImage, Img, Title } from "../../../uiKit2";

import image2 from "../../images/image 2.png"

function Banner2() {
    return(
        <>
            <DivFlex 
                width="100%" 
                justifyContent="center" 
                alignItems="center">
                <DivFlex 
                    width="1440px" 
                    justifyContent="center" 
                    alignItems="center"
                    flexDirection="row"
                    gap="100px"
                    paddingBottom="80px"
                    flexDirectionMob="column"
                    paddingTotalMob="20px"
                    gapMob="20px">                                
                    <DivContainerText 
                        widthMob="100%" 
                        alignItems="center" 
                        justifyContent="center"
                        flexDirection="column" 
                        gap="20px"      
                        paddingLeft="80px"                  
                        paddingTotalMob="0px 20px">
                        <Title 
                            fontSize="38px" 
                            fontWeight="bold" 
                            textAlign="center"
                            textAlignMob="center">
                            Remova o Background em apenas um click.
                        </Title>         
                    </DivContainerText>
                    <DivFlexImage 
                    justifyContent="center" 
                    alignItems="center"
                    paddingRight="80px"
                    paddingTotalMob="0px">
                        <Img src={image2}/>
                    </DivFlexImage>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default Banner2;

//