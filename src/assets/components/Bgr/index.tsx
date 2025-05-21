import { useState } from "react";
import { Button, ContainerButton, DivContainerText, DivFlex, DivFlexImage, Img, Link, Title } from "../../../uiKit";
import mainBannerImage from "../../images/main_banner 1.png";
import camera from "../../icons/camera.svg";
import { Input } from "./style"; // Make sure Input is a styled.input, not styled.button

function Bgr() {
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setLoading(true);
        setResult(null);

        const formData = new FormData();
        formData.append("image_file", file);
        formData.append("size", "auto");

        try {
            const response = await fetch("https://api.remove.bg/v1.0/removebg", {
                method: "POST",
                headers: {
                    "X-Api-Key": "Ww7KWdxYbBg4BuEraMLeFQfv",
                },
                body: formData,
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error("Erro na API: " + errorText);
            }

            const blob = await response.blob();
            setResult(URL.createObjectURL(blob));
        } catch (error) {
            alert(`Erro ao remover fundo: ${error instanceof Error ? error.message : error}`);
        } finally {
            setLoading(false);
        }
    };   


    return (
        <>
            <DivFlex 
                    width="100%" 
                    justifycontent="center" 
                    alignitems="center">
                <DivFlex 
                    width="1440px" 
                    paddingTotal="80px 0px" 
                    justifycontent="center" 
                    alignitems="center" 
                    gap="100px" 
                    flexdirectionmob="column">                    
                    <DivFlexImage 
                        justifycontent="center" 
                        alignitems="center"
                        paddingTotalmob="0px 20px">
                        <Img src={mainBannerImage} />
                    </DivFlexImage>
                    <DivFlex 
                        width="499px" 
                        height="100%" 
                        justifycontent="center" alignitems="center" 
                        flexdirection="column" 
                        border="dashed 2px black">
                        <DivFlexImage 
                            justifycontent="center" alignitems="center" 
                            widthTotal="73px" 
                            paddingtop="26px" 
                            widthmob="70px">
                            <Img src={camera} />
                        </DivFlexImage>                        
                        <DivContainerText 
                            widthTotal="100%" 
                            alignitems="center" justifycontent="center" paddingleft="20px" 
                            paddingtop="20px">
                            <Title 
                                fontsize="20px" 
                                fontweight="400" 
                                textalign="center" 
                                textalignmob="center">
                                {!result ? (
                                    <>
                                        <span style={{ color: "#716FFA", fontWeight: "bold" }}>Upload </span>
                                        a sua imagem aqui!
                                    </>
                                ) : (
                                    <>
                                        Sua imagem está <span style={{ color: "#716FFA", fontWeight: "bold" }}> pronta</span>
                                    </>                                    
                                )}
                            </Title>
                        </DivContainerText>
                        <ContainerButton 
                            justifycontent="center" 
                            alignitems="center"
                            paddingtop={!result ? "80px" : "20px"}                             
                            flexdirection="column" 
                            gap="20px"
                            paddingbottom="26px">                          
                            {!loading && !result && (
                            <label htmlFor="upload-input" style={{ width: "100%" }}>
                                <Input
                                    as="input"
                                    id="upload-input"
                                    padding="10px"
                                    alignitems="center"
                                    justifycontent="center"
                                    border="2px solid #716FFA"
                                    backgroundColor="#716FFA"
                                    hover="#716ffa9d"
                                    borderradius="15px"
                                    textalign="center"
                                    fontsize="20px"
                                    fontsizemob="10px"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    disabled={loading}
                                />
                            </label>
                            )}
                            {loading && <p>Processando...</p>}
                            {result && (
                                <DivFlex 
                                    width="100%" 
                                    justifycontent="center" 
                                    alignitems="center" 
                                    flexdirection="column">
                                    <DivFlexImage 
                                        justifycontent="center" 
                                        alignitems="center" 
                                        widthTotal="200px"
                                        >
                                        <Img src={result} alt="Sem fundo" />       
                                    </DivFlexImage>                                                                 
                                    <Link href={result} download="imagem-sem-fundo.png">
                                        <ContainerButton 
                                            justifycontent="center" 
                                            alignitems="center" 
                                            paddingtop="20px" 
                                            flexdirection="column" 
                                            gap="20px">
                                            <Button 
                                                disabled={loading} 
                                                padding="10px" alignitems="center" justifycontent="center" 
                                                border="2px solid #716FFA"
                                                backgroundColor="#716FFA"
                                                hover="#716ffa9d"
                                                borderradius="15px" textalign="center"
                                                fontsize="20px"
                                                color="#FFFFFF"
                                                fontweight="bold">
                                                    Baixar imagem
                                            </Button>
                                        </ContainerButton>
                                    </Link>
                                </DivFlex>
                            )}
                        </ContainerButton>
                    </DivFlex>
                </DivFlex>
            </DivFlex>
        </>
    );
}

export default Bgr;
//