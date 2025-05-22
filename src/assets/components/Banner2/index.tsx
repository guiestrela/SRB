import { DivContainerText, DivFlex, DivFlexImage, Img, Title } from "../../../uiKit";

import image2 from "../../images/image 2.png"

function Banner2() {
    return(
        <>
            <DivFlex 
                width="100%" 
                justifycontent="center" 
                alignitems="center">
                <DivFlex 
                    width="1440px" 
                    justifycontent="center" 
                    alignitems="center"
                    flexdirection="row"
                    gap="100px"
                    paddingbottom="80px"
                    flexdirectionmob="column"
                    paddingTotalmob="20px"
                    gapmob="20px">                                
                    <DivContainerText 
                        widthmob="100%" 
                        alignitems="center" 
                        justifycontent="center"
                        flexdirection="column" 
                        gap="20px"      
                        paddingleft="80px"                  
                        paddingTotalmob="0px 20px">
                        <Title 
                            fontsize="38px" 
                            fontweight="bold" 
                            textalign="center"
                            textalignmob="center">
                            Remova o Background em apenas um click.
                        </Title>         
                    </DivContainerText>
                    <DivFlexImage 
                    justifycontent="center" 
                    alignitems="center"
                    paddingright="80px"
                    paddingTotalmob="0px">
                        <Img src={image2}/>
                    </DivFlexImage>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default Banner2;

//