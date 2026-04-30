import { 
    DivContainerText, 
    DivFlex, 
    Texto } 
    from "../../../uiKit2";

function TextInfo() {
    return(
        <>
            <DivFlex 
                width="100%" 
                justifyContent="center"               
                alignItems="center"
                >
                <DivFlex 
                    width="1440px"  
                    paddingTotal="10px 0px"
                    backgroundColor="#c9c6f0"
                    flexDirectionMob="column"
                    alignItemsMob="center"
                    justifyContentMob="center"
                    borderTop="2px solid #FFFFFF">

                    <DivContainerText 
                        widthTotal="100%" 
                        alignItems="center" 
                        justifyContent="center" 
                        paddingLeft="20px"
                        justifyContentMob="center">
                        <Texto 
                            fontSize="20px"     
                            fontWeight="500" 
                            textAlign="center"
                            textAlignMob="center">
                            @2025 - Projeto em desenvolvimento
                        </Texto>
                    </DivContainerText>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default TextInfo;