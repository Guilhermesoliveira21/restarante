import { AppBar, Avatar, Box, TextField, Toolbar, Typography } from "@mui/material"
import { ContainerHeader } from "./styles"

export const Header = () => {

    return (
        <>
            <Box >
                <ContainerHeader>
                    
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ContainerHeader>
            </Box>
        </>
    )

}