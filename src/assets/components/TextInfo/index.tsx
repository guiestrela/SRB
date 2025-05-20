import { DivContainerText, DivFlex, Texto } from "../../../uiKit";

function TextInfo() {
    return(
        <>
            <DivFlex 
                width="100%" 
                justifycontent="center"               
                alignitems="center">
                <DivFlex 
                    width="1440px"  
                    paddingTotal="20px 0px"
                    backgroundColor="#c9c6f0"
                    flexdirectionmob="column"
                    alignitemsmob="center"
                    justifycontentmob="center">

                    <DivContainerText 
                        widthTotal="100%" 
                        alignitems="center" 
                        justifycontent="center" 
                        paddingleft="20px"
                        justifycontentmob="center">
                        <Texto 
                            fontsize="20px"     
                            fontweight="500" 
                            textalign="center"
                            textalignmob="center">
                            @2025 - Projeto em desenvolvimento
                        </Texto>
                    </DivContainerText>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default TextInfo;