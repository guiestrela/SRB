import { Button, ContainerButton, DivContainerText, DivFlex, Texto, Title } from "../../../uiKit";

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
                        <Texto fontsize="30px" fontweight="400" textalign="start">
                            Como usar
                        </Texto>
                        <Texto fontsize="30px" fontweight="400" textalign="start">
                            Contato
                        </Texto>
                    </DivContainerText>

                    <ContainerButton width="100%" justifycontent="end" alignitems="center" gap="20px" paddingright="20px">
                        <Button padding="10px" alignitems="center" justifycontent="center" borderradius="15px">
                            Login
                        </Button>
                        <Button padding="10px" alignitems="center" justifycontent="center" borderradius="15px" textalign="center">
                            Sign-Up
                        </Button>
                    </ContainerButton>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default TopBar;