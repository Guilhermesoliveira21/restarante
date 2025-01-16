import { ContainerSectionStyle } from "./styles"

export const Section = ({children, w, h, direction, m, align, justifyContent, gap}) => {

    return (
        <>
        <ContainerSectionStyle direction={direction} w={w} h={h} m={m} align={align} justifyContent={justifyContent} gap={gap}>
            {children}
        </ContainerSectionStyle>
        </>
    )

}