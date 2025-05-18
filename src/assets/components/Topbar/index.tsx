import { Button, ContainerButton, DivContainerText, DivFlex, Title } from "../../../uiKit";

function TopBar() {
    return(
        <>
            <DivFlex width="100%" justifycontent="center">
                <DivFlex width="1440px" paddingTotal="20px 0px">

                    <DivContainerText widthTotal="100%" alignitems="center" justifycontent="start" paddingleft="20px"
                    >
                        <Title fontsize="20px" fontweight="400" textalign="start"
                        textalignmob="start">
                            Background <span style={{ color: "#716FFA", fontWeight: "bold" }}>Remover</span>
                        </Title>
                    </DivContainerText>
                    
                    <ContainerButton width="100%" justifycontent="end" alignitems="center" gap="20px" paddingright="20px">
                        <Button padding="10px" alignitems="center" justifycontent="center"
                        border="0px solid transparent"
                        backgroundColor="transparent"
                        borderradius="15px" hover="#716FFA">
                            Login
                        </Button>
                        <Button padding="10px" alignitems="center" justifycontent="center" 
                        border="2px solid #716FFA"
                        backgroundColor="#716FFA"
                        hover="#716ffa9d"
                        borderradius="15px" textalign="center">
                            Sign-Up
                        </Button>
                    </ContainerButton>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default TopBar;