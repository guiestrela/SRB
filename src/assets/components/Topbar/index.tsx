import { Button, ContainerButton, DivContainerText, DivFlex, Link, Texto, Title } from "../../../uiKit";

function TopBar() {
    return(
        <>
            <DivFlex width="100%" justifycontent="center">
                <DivFlex width="1539px" paddingTotal="40px 0px">

                    <DivContainerText widthTotal="100%" alignitems="start" justifycontent="start" paddingleft="20px">
                        <Title fontsize="30px" fontweight="400" textalign="start">
                            Background <span style={{ color: "#716FFA", fontWeight: "bold" }}>Remover</span>
                        </Title>
                    </DivContainerText>

                    <DivContainerText widthTotal="100%" alignitems="center" justifycontent="center" gap="50px">
                        <Link fontsize="20px" fontweight="400" textalign="start">
                            Como usar
                        </Link>
                        <Link fontsize="20px" fontweight="400" textalign="start">
                            Contato
                        </Link>
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