import { 
    DivContainerText, 
    DivFlex, 
    Texto, 
    Title } 
    from "../../../uiKit";

function Banner() {
    return(
        <>
            <DivFlex 
                width="100%" 
                justifycontent="center" 
                alignitems="center">
                <DivFlex 
                    width="1440px" 
                    paddingTotal="80px 0px" 
                    justifycontent="center" 
                    alignitems="center">            
                    <DivContainerText 
                        widthTotal="80%" 
                        widthmob="100%" 
                        alignitems="center" 
                        justifycontent="center"
                        flexdirection="column" 
                        gap="20px"
                        paddingTotalmob="0px 20px">
                        <Title 
                            fontsize="48px" 
                            fontweight="bold" 
                            textalign="center"
                            textalignmob="center">
                            Rapido, facil <span style={{ color: "#716FFA", fontWeight: "bold", textDecoration: "underline"}}>Removedor</span> de Background de Imagens.
                        </Title>

                        <Texto  
                            fontsize="20px" 
                            fontweight="400" 
                            textalign="center"
                            textalignmob="center"
                            paddingtop="50px">
                            Precisa remover o fundo de uma imagem? Faça isso de maneira rápida e fácil com nossa ferramenta online. Perfeito para criar artes, banners de produtos, avatares e muito mais, com qualidade e agilidade.
                        </Texto>
                    </DivContainerText>
                </DivFlex>
            </DivFlex>
        </>
    )
}

export default Banner;