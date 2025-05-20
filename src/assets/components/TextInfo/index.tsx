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
                        <Texto 
                            fontsize="30px"     
                            fontweight="400" 
                            textalign="start"
                            textalignmob="start">
                            Background <span style={{ color: "#716FFA", fontWeight: "bold" }}>Remover</span>
                        </Texto>
                    </DivContainerText>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default TextInfo;