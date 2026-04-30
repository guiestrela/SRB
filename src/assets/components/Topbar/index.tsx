import { 
    Button, 
    ContainerButton, 
    DivContainerText, 
    DivFlex, 
    Title } 
    from "../../../uiKit2";

function TopBar() {
    return(
        <>
            <DivFlex 
                width="100%" 
                justifyContent="center">
                <DivFlex 
                    width="1440px" 
                    paddingTotal="20px 0px">
                    <DivContainerText 
                        widthTotal="100%" 
                        alignItems="center" 
                        justifyContent="start" 
                        paddingLeft="20px"
                    >
                        <Title 
                            fontSize="20px" 
                            fontWeight="400" 
                            textAlign="start"
                            textAlignMob="start">
                            Background <span style={{ color: "#716FFA", fontWeight: "bold" }}>Remover</span>
                        </Title>
                    </DivContainerText>
                    
                    <ContainerButton 
                        width="100%" 
                        justifyContent="end" 
                        alignItems="center" 
                        gap="20px" 
                        paddingRight="20px">
                        <Button 
                            padding="10px" 
                            alignItems="center" 
                            justifyContent="center"
                            border="0px solid transparent"
                            backgroundColor="transparent"
                            borderRadius="15px" 
                            hover="#716FFA">
                            Login
                        </Button>
                        <Button 
                            padding="10px" 
                            alignItems="center" 
                            justifyContent="center" 
                            border="2px solid #716FFA"
                            backgroundColor="#716FFA"
                            hover="#716ffa9d"
                            borderRadius="15px" 
                            textAlign="center">
                            Sign-Up
                        </Button>
                    </ContainerButton>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default TopBar;