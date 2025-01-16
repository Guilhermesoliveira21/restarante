import { Typography } from "@mui/material"
import { Section } from "../Section"
import { ContainerStyle, DescriptionStyle, ImageStyle } from "./styles"
import { FaPlus, FaTrashAlt } from "react-icons/fa"

export const OrderMenu = () => {

    return (
        <>

            <Section w='%' m="2rem 4rem" align='start'>
                <Typography variant="h5">Meus pedidos</Typography>

                <Section gap='1.2rem' w='100%' m='2rem 0'>
                    <Section direction='row' w='100%' align='center' justifyContent='space-between'>
                        <Section direction='row' justifyContent='center' align='center' style={{ gap: '1rem' }}>
                            <ImageStyle src="https://topreceitas.com.br/wp-content/uploads/2020/08/free-photo-of-close-up-of-meat-and-fries-scaled-829x550.jpeg" alt="" />
                            <DescriptionStyle>
                                <h4>Titulo</h4>
                                <p>1x</p>
                            </DescriptionStyle>
                        </Section>

                        <Section direction='row' align='center' justifyContent='center'>
                            <div >

                                <ContainerStyle color="#F8B602">
                                    <FaPlus color="#fff"/>
                                </ContainerStyle>

                                <ContainerStyle color="red">
                                    <FaTrashAlt color="#fff" />
                                </ContainerStyle>

                            </div>
                            <p>Preco</p>
                        </Section>
                    </Section>

                   
                </Section>
            </Section>

        </>
    )

}