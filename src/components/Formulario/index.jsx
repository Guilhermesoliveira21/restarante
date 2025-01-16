import { Typography } from "@mui/material"
import { FormStyle, Title } from "./style"

export const Formulario = ({children, title, submit}) => {
    return (
        <>
        <FormStyle onSubmit={submit}>
        <Title>{title}</Title>
            {children}
        </FormStyle>

        </>
    )
}