import { Link } from "react-router-dom"
import { useFecth } from "../../hooks/useFerch";
import { CardBodyPopular, CardBodyPriceName, CardPopular, ContainerCard, ContainerCardPolulares, ContainerLink } from "./styles";
import { Typography } from "@mui/material";
import { FaSquarePlus } from "react-icons/fa6";

export const CardCategory = () => {

    const uri = "https://raw.githubusercontent.com/Guilhermesoliveira21/api_restarant/main/db.json";

    const { data, loading, erro } = useFecth(uri);

    return (
        <>
            {loading ? 'carregando...' : (
                <>
                    <Typography variant="h5" fontWeight={'bold'} color="#313131" marginTop={4}>Categoria</Typography>
                    <ContainerCard>
                        {data.category.map((cat) => (
                            <>
                                <ContainerLink key={cat.id}>
                                    <img src={cat.image} alt={cat.name} />
                                    <p>{cat.name}</p>
                                </ContainerLink>
                            </>
                        ))}
                    </ContainerCard>
                    <Typography variant="h5" fontWeight={'bold'} color="#313131" marginTop={4}>Populares</Typography>

                    <ContainerCardPolulares>
                        {data.home.map((cat) => (
                            <CardPopular>
                                <img src={cat.image} alt="" />
                                <CardBodyPopular>
                                    <CardBodyPriceName>
                                        <p>{cat.name}</p>
                                        <p><span>{cat.price}</span></p>
                                    </CardBodyPriceName>
                                    <div>
                                    <FaSquarePlus size={30} color="#F8B602"/>
                                    </div>
                                </CardBodyPopular>
                            </CardPopular>
                        ))}
                    </ContainerCardPolulares>
                </>
            )}
        </>
    )

}