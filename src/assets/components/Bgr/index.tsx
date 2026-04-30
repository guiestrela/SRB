import { useState, useEffect } from "react";
import { 
    Button, 
    ContainerButton, 
    DivContainerText, 
    DivFlex, 
    DivFlexImage, 
    Img, 
    Link, 
    Title }
    from "../../../uiKit2";
    
import mainBannerImage from "../../images/main_banner 1.png";
import camera from "../../icons/camera.svg";
import { Input } from "./style";
import { removeBgService } from "../../../services/removeBgService";

function Bgr() {
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // Limpar URL de objeto quando componente desmontar
    useEffect(() => {
        return () => {
            if (result) {
                removeBgService.revokeObjectUrl(result);
            }
        };
    }, [result]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setLoading(true);
        setResult(null);

        const response = await removeBgService.removeBackground(file);

        if ('success' in response && response.success) {
            const objectUrl = removeBgService.createObjectUrl(response.blob);
            setResult(objectUrl);
        } else {
            const errorMessage = 'message' in response ? response.message : 'Erro desconhecido';
            alert(`Erro ao remover fundo: ${errorMessage}`);
        }

        setLoading(false);
    };
    return (
        <>
            <DivFlex 
                    width="100%" 
                    justifyContent="center" 
                    alignItems="center">
                <DivFlex 
                    width="1440px" 
                    paddingTotal="80px 80px" 
                    justifyContent="center" 
                    alignItems="center" 
                    gap="100px" 
                    flexDirectionMob="column"
                    paddingTotalMob="40px 20px"
                    gapMob="60px">                    
                    <DivFlexImage 
                        justifyContent="center" 
                        alignItems="center"
                        paddingTotalMob="0px 20px">
                        <Img src={mainBannerImage} />
                    </DivFlexImage>
                    <DivFlex 
                        width="499px" 
                        height="100%" 
                        justifyContent="center" 
                        alignItems="center" 
                        flexDirection="column" 
                        border="dashed 2px black">
                        <DivFlexImage 
                            justifyContent="center" 
                            alignItems="center" 
                            widthTotal="73px" 
                            paddingTop="26px" 
                            widthMob="70px">
                            <Img src={camera} />
                        </DivFlexImage>                        
                        <DivContainerText 
                            widthTotal="100%" 
                            alignItems="center" 
                            justifyContent="center" 
                            paddingLeft="20px" 
                            paddingTop="20px">
                            <Title 
                                fontSize="20px" 
                                fontWeight="400" 
                                textAlign="center" 
                                textAlignMob="center">
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
                            justifyContent="center" 
                            alignItems="center"
                            paddingTop={!result ? "80px" : "20px"}                             
                            flexDirection="column" 
                            gap="20px"
                            paddingBottom="26px">                          
                            {!loading && !result && (
                            <label htmlFor="upload-input" style={{ width: "100%" }}>
                                <Input
                                    id="upload-input"
                                    padding="10px"
                                    border="2px solid #716FFA"
                                    backgroundColor="#716FFA"
                                    hover="#716ffa9d"
                                    borderRadius="15px"
                                    textAlign="center"
                                    fontSize="20px"
                                    fontSizeMob="10px"
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
                                    justifyContent="center" 
                                    alignItems="center" 
                                    flexDirection="column">
                                    <DivFlexImage 
                                        justifyContent="center" 
                                        alignItems="center" 
                                        widthTotal= "300px"
                                        widthMob="180px"
                                        >
                                        <Img src={result} alt="Sem fundo" />       
                                    </DivFlexImage>                                                                 
                                    <Link href={result} download="imagem-sem-fundo.png">
                                        <ContainerButton 
                                            justifyContent="center" 
                                            alignItems="center" 
                                            paddingTop="20px" 
                                            flexDirection="column" 
                                            gap="20px">
                                            <Button 
                                                disabled={loading} 
                                                padding="10px" alignItems="center" justifyContent="center" 
                                                border="2px solid #716FFA"
                                                backgroundColor="#716FFA"
                                                hover="#716ffa9d"
                                                borderRadius="15px" textAlign="center"
                                                fontSize="20px"
                                                color="#FFFFFF"
                                                fontWeight="bold">
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
//# sourceMappingURL=Bgr.tsx.map