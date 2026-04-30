import { 
    DivContainerText, 
    DivFlex, 
    Texto, 
    Title } 
    from "../../../uiKit2";

function Banner() {
    return(
        <>
            <DivFlex 
                width="100%" 
                justifyContent="center" 
                alignItems="center">
                <DivFlex 
                    width="1440px" 
                    paddingTotal="80px 0px" 
                    justifyContent="center" 
                    alignItems="center"
                    paddingTotalMob="55px 0px">            
                    <DivContainerText 
                        widthTotal="80%" 
                        widthMob="100%" 
                        alignItems="center" 
                        justifyContent="center"
                        flexDirection="column" 
                        gap="20px"
                        paddingTotalMob="0px 20px">
                        <Title 
                            fontSize="48px" 
                            fontWeight="bold" 
                            textAlign="center"
                            textAlignMob="center">
                            Rapido, facil <span style={{ color: "#716FFA", fontWeight: "bold", textDecoration: "underline"}}>Removedor</span> de Background de Imagens.
                        </Title>

                        <Texto  
                            fontSize="20px" 
                            fontWeight="400" 
                            textAlign="center"
                            textAlignMob="center"
                            paddingTop="50px">
                            Precisa remover o fundo de uma imagem? Faça isso de maneira rápida e fácil com nossa ferramenta online. Perfeito para criar artes, banners de produtos, avatares e muito mais, com qualidade e agilidade.
                        </Texto>
                    </DivContainerText>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default Banner;